require("dotenv").config();
const { AccountId, PrivateKey, Client, TokenCreateTransaction, TokenType, TokenSupplyType, TokenAssociateTransaction, AccountBalanceQuery, TransferTransaction, } = require("@hashgraph/sdk");

const aliceId = AccountId.fromString(process.env.ALICE_ACCOUNT_ID);
const aliceKey = PrivateKey.fromString(process.env.ALICE_PRIVATE_KEY);
const bobId = AccountId.fromString(process.env.BOB_ACCOUNT_ID);
const bobKey = PrivateKey.fromString(process.env.BOB_PRIVATE_KEY);

const client = Client.forTestnet().setOperator(aliceId, aliceKey);

async function createFungibleToken() {
 // Part 1 - Create token
 let tokenCreateTx = await new TokenCreateTransaction()
 .setTokenName("Alice Hours")
 .setTokenSymbol("AHOUR")
 .setTokenType(TokenType.FungibleCommon)
 .setDecimals(1)
 .setInitialSupply(1000)
 .setTreasuryAccountId(aliceId)
 .setSupplyType(TokenSupplyType.Infinite)
 .setSupplyKey(aliceKey)
 .freezeWith(client);

let tokenCreateSign = await tokenCreateTx.sign(aliceKey);
let tokenCreateSubmit = await tokenCreateSign.execute(client);
let tokenCreateRx = await tokenCreateSubmit.getReceipt(client);
let tokenId = tokenCreateRx.tokenId;
console.log(`- Created token with ID: ${tokenId}`);

 // Part 2 - Associate token to user account
 let associateBobTx = await new TokenAssociateTransaction().setAccountId(bobId).setTokenIds([tokenId]).freezeWith(client);

 // sign with the private key of the account that is being associated to the token
 await associateBobTx.sign(bobKey);

 let associateBobTxSubmit = await associateBobTx.execute(client);
 let associateBobRx = await associateBobTxSubmit.getReceipt(client);
 console.log(`- Token association with Bob's account: ${associateBobRx.status}\n`);

 // Part 3 - Check balance (before)
 var aliceBefore = await new AccountBalanceQuery().setAccountId(aliceId).execute(client);
 console.log(`- Alice balance: ${aliceBefore.tokens._map.get(tokenId.toString())} units of token ID ${tokenId}`);
 var bobBefore = await new AccountBalanceQuery().setAccountId(bobId).execute(client);
 console.log(`- Bob's balance: ${bobBefore.tokens._map.get(tokenId.toString())} units of token ID ${tokenId}`);

 // Part 4 - Transfer tokens
 let tokenTransferTx = await new TransferTransaction()
 .addTokenTransfer(tokenId, aliceId, -40)
 .addTokenTransfer(tokenId, bobId, 40)
 .freezeWith(client)
 .sign(aliceKey);

let tokenTransferSubmit = await tokenTransferTx.execute(client);
let tokenTransferRx = await tokenTransferSubmit.getReceipt(client);
console.log(`\n- AHOUR transfer from Alice to Bob: ${tokenTransferRx.status} \n`);

 // Part 5 - Check balance (after)
 var aliceAfter = await new AccountBalanceQuery().setAccountId(aliceId).execute(client);
 console.log(`- Alice balance: ${aliceAfter.tokens._map.get(tokenId.toString())} units of token ID ${tokenId}`);
 var bobAfter = await new AccountBalanceQuery().setAccountId(bobId).execute(client);
 console.log(`- Bob's balance: ${bobAfter.tokens._map.get(tokenId.toString())} units of token ID ${tokenId}`);

 client.close();
}

createFungibleToken();