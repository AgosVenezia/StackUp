const { AccountId, PrivateKey, Client, ContractCreateFlow, ContractExecuteTransaction, ContractFunctionParameters, TokenAssociateTransaction, TokenId } = require("@hashgraph/sdk");
require("dotenv").config();

const operatorId = AccountId.fromString(process.env.OPERATOR_ACCOUNT_ID);
const operatorKey = PrivateKey.fromString(process.env.OPERATOR_PRIVATE_KEY);
const receiverId = AccountId.fromString(process.env.RECEIVER_ACCOUNT_ID);
const receiverKey = PrivateKey.fromString(process.env.RECEIVER_PRIVATE_KEY);

const client = Client.forTestnet().setOperator(operatorId, operatorKey);

async function SCCreateNonFungibleToken() {
 // Part 1 - Store contract
 let NFTCreator = require("./NFTCreator.json");
 const bytecode = NFTCreator.data.bytecode.object;
 const createContract = new ContractCreateFlow()
  .setGas(250000) // Increase if revert
  .setBytecode(bytecode); // Contract bytecode

 const createContractTx = await createContract.execute(client);
 const createContractRx = await createContractTx.getReceipt(client);
 const contractId = createContractRx.contractId;
 console.log(`Contract created with ID: ${contractId} \n`);

 // Part 2 - Create NFT
 const createToken = new ContractExecuteTransaction()
 .setContractId(contractId)
 .setGas(300000) // Increase if revert
 .setPayableAmount(20) // Increase if revert
 .setFunction(
  "createNft",
  new ContractFunctionParameters()
   .addString("Fall Collection") // NFT name
   .addString("LEAF") // NFT symbol
   .addString("Just a memo") // NFT memo
   .addInt64(250) // NFT max supply
   .addUint32(7000000) // Expiration: Needs to be between 6999999 and 8000001
 );

const createTokenTx = await createToken.execute(client);
const createTokenRx = await createTokenTx.getRecord(client);
const tokenIdSolidityAddr = createTokenRx.contractFunctionResult.getAddress(0);
let tokenId = AccountId.fromSolidityAddress(tokenIdSolidityAddr);
const tokenIdFromString = TokenId.fromString(tokenId.toString());
console.log(`Token created with ID: ${tokenId} \n`);

 // Part 3 - Mint NFT
 metadata = "ipfs://QmVHRwJZAccfJa33d3MMtSxM51u2RLbX3Yp7sDscF122G3/";
 const mintToken = new ContractExecuteTransaction()
  .setContractId(contractId)
  .setGas(1000000)
  .setFunction(
   "mintNft",
   new ContractFunctionParameters()
    .addAddress(tokenIdSolidityAddr) // Token address
    .addBytesArray([Buffer.from(metadata)]) // Metadata
  );
 const mintTokenTx = await mintToken.execute(client);
 const mintTokenRx = await mintTokenTx.getRecord(client);
 const serial = mintTokenRx.contractFunctionResult.getInt64(0);
 console.log(`Minted NFT with serial: ${serial} \n`);

 // Part 4 - Associate NFT
 const transaction = await new TokenAssociateTransaction().setAccountId(receiverId).setTokenIds([tokenIdFromString]).freezeWith(client);
 const signTx = await transaction.sign(receiverKey);
 const associateResponseTx = await signTx.execute(client);

 // Part 5 - Transfer NFT
 const transferToken = await new ContractExecuteTransaction()
 .setContractId(contractId)
 .setGas(4000000)
 .setFunction(
  "transferNft",
  new ContractFunctionParameters()
   .addAddress(tokenIdSolidityAddr) // Token address
   .addAddress(receiverId.toSolidityAddress()) // Token receiver
   .addInt64(serial) // NFT serial number
 )
 .freezeWith(client) // Freeze using client
 .sign(operatorKey); // Sign transaction with operator
const transferTokenTx = await transferToken.execute(client);
const transferTokenRx = await transferTokenTx.getReceipt(client);
console.log(`Transfer status: ${transferTokenRx.status} \n`);
 client.close();
}
SCCreateNonFungibleToken();