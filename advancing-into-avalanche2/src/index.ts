import { Avalanche, Buffer, BN } from "avalanche/dist";
import {
  AVMAPI,
  KeyChain,
  KeyPair,
  UTXOSet,
  UnsignedTx,
  Tx,
  InitialStates,
  SECPMintOutput,
  SECPTransferOutput,
} from "avalanche/dist/apis/avm";
import { GetUTXOsResponse } from "avalanche/dist/apis/avm/interfaces";

const ip: string = "api.avax-test.network";
const port: number = 443;
const protocol: string = "https";
const networkID: number = 5;
const avalanche: Avalanche = new Avalanche(ip, port, protocol, networkID);
const xchain: AVMAPI = avalanche.XChain();

type KeyInfo = { address: string; publicKey: string; privateKey: string };

const senderKeys: KeyInfo = {
  address: "X-fuji15revnlgprfvjvlldtcedkfrw0lm86ncw5cq7gx",
  publicKey: "6XLbrk1erjY5UZdPKZNKBifyvXykJf16xsPinrRVpiUwAJziNt",
  privateKey: "PrivateKey-AknpcpbVe8jMC8h6SaJsibqHbNEoptW8YxqVoqAUTbkKXxecx",
};
const assetID = "WHJsDuoVGRuFYM8X8bfCRjHFiTCrHoDsYmCthBRB41FnKj3Mv"; // the transaction ID is used as asset ID
const friendsAddress = "X-fuji1g4zrg0prrj3z0uyk78f84rtcpnkykrl28a04ma"; // address format is Bech32
// ============ Main Part of Script ===================
const step: number = 11; // Values can be 0, 6, 10, 11
switch (step) {
  case 6:
    console.log("Running Step 6 Code");
    createKeyPairs();
    break;
  case 10:
    console.log("Running Step 10 Code");
    createAsset();
    break;
  case 11:
    console.log("Running Step 11 Code");
    sendAsset();
    break;
  default:
    console.log("Please change the step variable to either 6, 10 or 11!");
}
// =========================================================

async function createKeyPairs(): Promise<void> {
  console.log("Generating Keypairs");

  const keychain: KeyChain = xchain.keyChain();
  console.log("======== Generating Sender keys ========");
  const keypair: KeyPair = keychain.makeKey();
  console.log({
    address: keypair.getAddressString(),
    publicKey: keypair.getPublicKeyString(),
    privateKey: keypair.getPrivateKeyString(),
  });
  console.log("==========================================");
  console.log("======== Generating Receiver keys ========");
  const receiverKeyPair: KeyPair = keychain.makeKey();
  console.log({
    address: receiverKeyPair.getAddressString(),
    publicKey: receiverKeyPair.getPublicKeyString(),
    privateKey: receiverKeyPair.getPrivateKeyString(),
  });
  console.log("============================================");
  console.log(
    "Keypairs generated! Please remember to copy them and save it somewhere for the next step."
  );
}

async function createAsset(): Promise<void> {
  console.log("======== Creating Asset ========");
  const xKeychain: KeyChain = xchain.keyChain();
  xKeychain.importKey(senderKeys.privateKey);
  const xAddresses: Buffer[] = xchain.keyChain().getAddresses();
  const xAddressStrings: string[] = xchain.keyChain().getAddressStrings();

  const outputs: SECPMintOutput[] = [];
  const threshold: number = 1;
  const locktime: BN = new BN(0);
  const memo: Buffer = Buffer.from(
    "AVM utility method buildCreateAssetTx to create an ANT"
  );

  const name: string = "Aguito";
  const symbol: string = "SU";
  const denomination: number = 3;

  const avmUTXOResponse: GetUTXOsResponse = await xchain.getUTXOs(
    xAddressStrings
  );
  const utxoSet: UTXOSet = avmUTXOResponse.utxos;

  const amount: BN = new BN(1000);
  const vcapSecpOutput = new SECPTransferOutput(
    amount,
    xAddresses,
    locktime,
    threshold
  );
  const initialStates: InitialStates = new InitialStates();
  initialStates.addOutput(vcapSecpOutput);

  const secpMintOutput: SECPMintOutput = new SECPMintOutput(
    xAddresses,
    locktime,
    threshold
  );
  outputs.push(secpMintOutput);

  console.log("Asset Details ");
  console.log(`Token Name: ${name}`);
  console.log(`Token Symbol: ${symbol}`);
  console.log(`Amount of tokens created: ${amount}`);
  console.log(`Address to receive new token: ${xAddressStrings}`);

  const unsignedTx: UnsignedTx = await xchain.buildCreateAssetTx(
    utxoSet,
    xAddressStrings,
    xAddressStrings,
    initialStates,
    name,
    symbol,
    denomination,
    outputs,
    memo
  );

  const tx: Tx = unsignedTx.sign(xKeychain);
  const txid: string = await xchain.issueTx(tx);

  console.log(`Success! Your Asset ID: ${txid}`);
  console.log("======== Asset Created ========");
}

async function sendAsset() {
  console.log("======== Creating Asset ========");
  const xchain = avalanche.XChain(); //returns a reference to the X-Chain used by AvalancheJS
  const myKeychain = xchain.keyChain();

  const keypair = myKeychain.importKey(senderKeys.privateKey); //returns a Buffer for the address
  let address = keypair.getAddress(); //returns Buffer
  let addressString = keypair.getAddressString(); //returns string
  let utxos = (await xchain.getUTXOs(addressString)).utxos;

  let sendAmount = new BN(200); //amounts are in BN format
  let assetid = assetID; //avaSerialized string
  let mybalance = utxos.getBalance([address], assetid); //returns 1000 as a BN

  console.log(`Sender Address: ${addressString}`);
  console.log(`Receiver Address: ${friendsAddress}`);
  console.log(`Asset ID: ${assetID}`);
  console.log(`Current Balance: ${mybalance}`);
  console.log(`Amount to send: ${sendAmount}`);

  //The below returns a UnsignedTx
  //Parameters sent are (in order of appearance):
  //   * The UTXO Set
  //   * The amount being sent as a BN
  //   * An array of addresses to send the funds
  //   * An array of addresses sending the funds
  //   * An array of addresses any leftover funds are sent
  //   * The AssetID of the funds being sent
  let unsignedTx2 = await xchain.buildBaseTx(
    utxos,
    sendAmount,
    assetid,
    [friendsAddress],
    [addressString],
    [addressString]
  );
  let signedTx = unsignedTx2.sign(myKeychain);
  let txid2 = await xchain.issueTx(signedTx);

  console.log(`Success! TXID2: ${txid2}`);
  console.log("======== Asset Sent ========");
}
