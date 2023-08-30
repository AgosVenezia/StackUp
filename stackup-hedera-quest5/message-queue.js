require("dotenv").config();
const { Client, TopicCreateTransaction, TopicMessageQuery, TopicMessageSubmitTransaction, PrivateKey, AccountCreateTransaction, Hbar, } = require("@hashgraph/sdk");

function delay(time) {
 return new Promise((resolve) => setTimeout(resolve, time));
}

async function createMessageQueue() {
 const myAccountId = process.env.MY_ACCOUNT_ID;
 const myPrivateKey = process.env.MY_PRIVATE_KEY;

 if (myAccountId == null || myPrivateKey == null) {
  throw new Error("account ID or Private key are missing");
 }

 const client = Client.forTestnet();
 client.setOperator(myAccountId, myPrivateKey);

 // Part 1 - Create topic
 const createTopicTransactionId = await new TopicCreateTransaction().execute(client);
 const createTopicReceipt = await createTopicTransactionId.getReceipt(client);
 const newTopicId = createTopicReceipt.topicId;
 console.log("The new topic ID is " + newTopicId);

 // Part 2 - Subscribe to topic
 await delay(5000);

 new TopicMessageQuery()
  .setTopicId(newTopicId)
  .setStartTime(0)
  .subscribe(client, null, (message) => {
   let messageAsString = Buffer.from(message.contents, "utf8").toString();
   console.log(`${message.consensusTimestamp.toDate()} Received: ${messageAsString}`);
  });

 // Part 3 - Submit messages to topic
 for (let i = 1; i <= 7; i++) {
  const newAccountPrivateKey = PrivateKey.generateED25519();
  const newAccountPublicKey = newAccountPrivateKey.publicKey;

  const newAccount = await new AccountCreateTransaction()
   .setKey(newAccountPublicKey)
   .setInitialBalance(Hbar.fromTinybars(10000000000))
   .execute(client);

  const getReceipt = await newAccount.getReceipt(client);
  const newAccountId = getReceipt.accountId;

  const newClient = Client.forTestnet();
  newClient.setOperator(newAccountId, newAccountPrivateKey);
  await new TopicMessageSubmitTransaction()
   .setTopicId(newTopicId)
   .setMessage(`User ${i} (${newAccountId}) has completed action no. ${i}`)
   .execute(newClient);
 }
}

createMessageQueue();