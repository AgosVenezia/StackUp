import { ethers } from "hardhat";
import {
  MyERC721MintByID,
  MyERC721MintByID__factory,
} from "../../typechain-types";

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
  const factory: MyERC721MintByID__factory = await ethers.getContractFactory(
    "MyERC721MintByID"
  );
  const contract: MyERC721MintByID = await factory.connect(deployer).deploy(
    deployer.address, // owner
    "Imaginary Immutable Iguanas", // name
    "III", // symbol
    "https://example-base-uri.com/", // baseURI
    "https://example-contract-uri.com/", // contractURI
    operatorAllowlist, // operator allowlist
    deployer.address, // royalty recipient
    ethers.BigNumber.from("2000") // fee numerator
  );
  await contract.deployed();

  // log deployed contract address
  console.log(`MyERC721MintByID contract deployed to ${contract.address}`);
}

deploy().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
