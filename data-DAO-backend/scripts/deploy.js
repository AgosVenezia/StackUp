const { ethers } = require("hardhat");

require("dotenv").config({
  path: ".env",
});

const CID = "bafk2bzaced7xrpcqmijgvrqowawbhzpk4kco77kvuaftvfqlcxod5pguh73wc";

async function main() {
  /**
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so dataDaoFile here is a factory for instances of our CoinFile contract.
    **/
    const dataDaoFile = await ethers.getContractFactory("DataDao");

    console.log(`Deploying smart contract...`);
    const deployeddataDaoFile = await dataDaoFile.deploy(CID);
   
    // Wait for it to finish deploying.
    await deployeddataDaoFile.deployed();
   
    // print the address of the deployed contract*
    console.log(
     `The smart contract was deployed at: ${deployeddataDaoFile.address}`
    );
}

// Call the main function and catch if there is any error
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// call main

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
