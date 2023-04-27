import { Contract, ContractFactory } from "ethers";
import { ethers } from "hardhat";

const main = async (): Promise<any> => {
  const Coin: ContractFactory = await ethers.getContractFactory("NewTestToken");
  const coin: Contract = await Coin.deploy();

  await coin.deployed();
  console.log(`Coin deployed to: ${coin.address}`);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
