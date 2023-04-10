require("dotenv").config();
const { AccountId, PrivateKey, Client, TokenCreateTransaction, TokenType, TokenSupplyType, TokenMintTransaction, TransferTransaction, AccountBalanceQuery, TokenAssociateTransaction, } = require("@hashgraph/sdk");

const aliceId = AccountId.fromString(process.env.ALICE_ACCOUNT_ID);
const aliceKey = PrivateKey.fromString(process.env.ALICE_PRIVATE_KEY);
const bobId = AccountId.fromString(process.env.BOB_ACCOUNT_ID);
const bobKey = PrivateKey.fromString(process.env.BOB_PRIVATE_KEY);

const client = Client.forTestnet().setOperator(aliceId, aliceKey);

async function createNonFungibleToken() {
 // Part 1 - Create token
 let nftCreate = await new TokenCreateTransaction()
 .setTokenName("Alice NFT")
 .setTokenSymbol("ANFT")
 .setTokenType(TokenType.NonFungibleUnique)
 .setDecimals(0)
 .setInitialSupply(0)
 .setTreasuryAccountId(aliceId)
 .setSupplyType(TokenSupplyType.Finite)
 .setMaxSupply(10)
 .setSupplyKey(aliceKey)
 .freezeWith(client);

let nftCreateTxSign = await nftCreate.sign(aliceKey);
let nftCreateSubmit = await nftCreateTxSign.execute(client);
let nftCreateRx = await nftCreateSubmit.getReceipt(client);
let tokenId = nftCreateRx.tokenId;
console.log(`- Created NFT with Token ID: ${tokenId} \n`);

 // Part 2 - Mint token
 const CID = "ipfs://Qme5niYwb7b9dFimAgJwWYFUbxJ2rbM5MguV32Z4UuALmg/alice-nft-metadata.json";

 let mintTx = await new TokenMintTransaction()
  .setTokenId(tokenId)
  .setMetadata([Buffer.from(CID)])
  .freezeWith(client);

 let mintTxSign = await mintTx.sign(aliceKey);
 let mintTxSubmit = await mintTxSign.execute(client);
 let mintRx = await mintTxSubmit.getReceipt(client);
 console.log(`- Created NFT ${tokenId} with serial: ${mintRx.serials[0].low} \n`);

 // Part 3 - Associate token to user account
 let associateAliceTx = await new TokenAssociateTransaction().setAccountId(bobId).setTokenIds([tokenId]).freezeWith(client).sign(bobKey);
 let associateAliceTxSubmit = await associateAliceTx.execute(client);
 let associateAliceRx = await associateAliceTxSubmit.getReceipt(client);
 console.log(`- NFT association with Bob's account: ${associateAliceRx.status}\n`);

 // Part 4 - Transfer token
// balance check (before)
var balanceCheckTx = await new AccountBalanceQuery().setAccountId(aliceId).execute(client);
console.log(`- Alice balance: ${balanceCheckTx.tokens._map.get(tokenId.toString())} NFTs of ID ${tokenId}`);
var balanceCheckTx = await new AccountBalanceQuery().setAccountId(bobId).execute(client);
console.log(`- Bob's balance: ${balanceCheckTx.tokens._map.get(tokenId.toString())} NFTs of ID ${tokenId}`);

let tokenTransferTx = await new TransferTransaction().addNftTransfer(tokenId, 1, aliceId, bobId).freezeWith(client).sign(aliceKey);
let tokenTransferSubmit = await tokenTransferTx.execute(client);
let tokenTransferRx = await tokenTransferSubmit.getReceipt(client);
console.log(`\n- NFT transfer from Treasury to Alice: ${tokenTransferRx.status} \n`);

// balance check (after)
var balanceCheckTx = await new AccountBalanceQuery().setAccountId(aliceId).execute(client);
console.log(`- Alice balance: ${balanceCheckTx.tokens._map.get(tokenId.toString())} NFTs of ID ${tokenId}`);
var balanceCheckTx = await new AccountBalanceQuery().setAccountId(bobId).execute(client);
console.log(`- Bob's balance: ${balanceCheckTx.tokens._map.get(tokenId.toString())} NFTs of ID ${tokenId}`);

}

createNonFungibleToken();