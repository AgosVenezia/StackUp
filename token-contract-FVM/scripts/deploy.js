const { ethers } = require("hardhat");

require("dotenv").config({
  path: ".env",
});

// Initialize the RPC provider
const provider = new ethers.providers.JsonRpcProvider(
  process.env.HYPERSPACE_RPC
);

async function main() {
  /**
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so coinFile here is a factory for instances of our CoinFile contract.
    **/

    const coinFile = await ethers.getContractFactory("CoinFile");

    console.log(`Deploying smart contract...`);
    const deployedCoinFile = await coinFile.deploy();
    
    // Wait for it to finish deploying.
    await deployedCoinFile.deployed();
    
    // Print the address of the deployed contract*
    console.log(
     `The smart contract was deployed at: ${deployedCoinFile.address}`
     );
    
    // Print the owner
    const owner = await deployedCoinFile.owner();
    const balance = await deployedCoinFile.balanceOf(owner);
    console.log(`The owner is ${owner} with balance of ${balance} tokens`);
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
