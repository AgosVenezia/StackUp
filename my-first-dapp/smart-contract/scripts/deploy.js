const hre = require("hardhat");

async function main() {
 const StackUp = await hre.ethers.getContractFactory("StackUp");
 const stackUp = await StackUp.deploy();

 await stackUp.deployed();

 console.log("stackUp deployed to:", stackUp.address);

 let adminAddr = await stackUp.admin();
 console.log("admin address:", adminAddr);

 await stackUp.createQuest("Introduction to Hardhat", 2, 600);
 await stackUp.createQuest("Unit Testing with Hardhat", 4, 500);
 await stackUp.createQuest("Debugging and Deploying with Hardhat", 5, 400);
}

main()
 .then(() => process.exit(0))
 .catch((error) => {
  console.error(error);
  process.exit(1);
 });