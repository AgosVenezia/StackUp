import { ethers } from "hardhat";
import { MyERC721, MyERC721__factory } from "../typechain-types";

async function deploy() {
 // get deployer
 const [deployer] = await ethers.getSigners();
 console.log("Deploying contracts with the account:", deployer.address);

 // check account balance
 console.log(
  "Account balance:",
  ethers.utils.formatEther(await deployer.getBalance())
 );

 const operatorAllowlist = process.env.OPERATOR_ALLOWLIST;
 if (operatorAllowlist === undefined) {
  throw new Error("Please set your OPERATOR_ALLOWLIST in a .env file");
 }

 // deploy MyERC721 contract
 const factory: MyERC721__factory = await ethers.getContractFactory(
  "MyERC721"
 );
 const contract: MyERC721 = await factory.connect(deployer).deploy(
  deployer.address, // owner
  "My First NFT Collection", // name
  "SU", // symbol
  "https://cyan-continuing-tyrannosaurus-524.mypinata.cloud/ipfs/QmUKXbtzSUvX6r8mYi44WCoPpFwZXjYNq7mg3u8DECC1wv/", // baseURI
  "https://cyan-continuing-tyrannosaurus-524.mypinata.cloud/ipfs/QmdYJe3DVZCcTdW3Shc4e2trD4BTKGz9SgHsAF8kTnqjeW", // contractURI
  operatorAllowlist, // operator allowlist
  deployer.address, // royalty recipient
  ethers.BigNumber.from("2000") // fee numerator
 );
 await contract.deployed();

 // log deployed contract address
 console.log(`MyERC721 contract deployed to ${contract.address}`);
}

deploy().catch((error) => {
 console.error(error);
 process.exitCode = 1;
});