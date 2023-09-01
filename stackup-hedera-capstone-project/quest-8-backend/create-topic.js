const { Client, AccountId, PrivateKey, TopicCreateTransaction, TopicMessageSubmitTransaction } = require("@hashgraph/sdk");
require("dotenv").config();

const operatorId = AccountId.fromString(process.env.MERCHANT_ACCOUNT_ID);
const operatorKey = PrivateKey.fromString(process.env.MERCHANT_PRIVATE_KEY);

const client = Client.forTestnet().setOperator(operatorId, operatorKey);

async function createTopic() {
 const createTopicTransactionResponse = await new TopicCreateTransaction().execute(client);

 // Get the receipt of our transaction, to see if it was successful
 const createTopicReceipt = await createTopicTransactionResponse.getReceipt(client);

 // If it was successful, it will contain a new topic ID
 const newTopicId = createTopicReceipt.topicId;

 console.log("Our topic: " + newTopicId);

 client.close();
}

createTopic();