const {
    Client,
    FileCreateTransaction,
    ContractCreateTransaction,
    ContractFunctionParameters,
    ContractCallQuery,
    Hbar,
    ContractExecuteTransaction,
   } = require("@hashgraph/sdk");
   require("dotenv").config();
   
   async function helloWorld() {
    // Part 1 - Create connection to the Hedera network
    const myAccountId = process.env.MY_ACCOUNT_ID;
    const myPrivateKey = process.env.MY_PRIVATE_KEY;
    if (myAccountId == null || myPrivateKey == null) {
     throw new Error("Environment variables myAccountId and myPrivateKey must be present");
    }
    const client = Client.forTestnet();
    client.setOperator(myAccountId, myPrivateKey);
   
    // Part 2 - Store the smart contract’s bytecode on Hedera
    let helloHedera = require("./HelloHedera.json");
    const bytecode = helloHedera.data.bytecode.object;
    const fileCreateTx = new FileCreateTransaction().setContents(bytecode);
    const submitTx = await fileCreateTx.execute(client);
    const fileReceipt = await submitTx.getReceipt(client);
    const bytecodeFileId = fileReceipt.fileId;
    console.log("The smart contract byte code file ID is " + bytecodeFileId);
   
    // Part 3 - Deploy the smart contract
    const contractTx = await new ContractCreateTransaction()
     .setBytecodeFileId(bytecodeFileId)
     .setGas(100000)
     .setConstructorParameters(new ContractFunctionParameters().addString("Hello from Hedera!"));
    const contractResponse = await contractTx.execute(client);
    const contractReceipt = await contractResponse.getReceipt(client);
    const newContractId = contractReceipt.contractId;
    console.log("The smart contract ID is " + newContractId);
   
    // Part 4a - Interact with the smart contract - get_message()
    const contractQuery = await new ContractCallQuery()
     .setGas(100000)
     .setContractId(newContractId)
     .setFunction("get_message")
     .setQueryPayment(new Hbar(2));
    const getMessage = await contractQuery.execute(client);
    const message = getMessage.getString(0);
    console.log("The contract message: " + message);
   
    // Part 4b - Interact with the smart contract - set_message()
    const contractExecTx = await new ContractExecuteTransaction()
     .setContractId(newContractId)
     .setGas(100000)
     .setFunction("set_message", new ContractFunctionParameters().addString("Aguito"));
    const submitExecTx = await contractExecTx.execute(client);
    const receipt2 = await submitExecTx.getReceipt(client);
    console.log("The transaction status is " + receipt2.status.toString());
   
    const contractCallQuery = new ContractCallQuery()
     .setContractId(newContractId)
     .setGas(100000)
     .setFunction("get_message")
     .setQueryPayment(new Hbar(2));
    const contractUpdateResult = await contractCallQuery.execute(client);
    const newMessage = contractUpdateResult.getString(0);
    console.log("The updated contract message: " + newMessage);
   }
   helloWorld();