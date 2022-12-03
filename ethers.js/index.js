const { ethers } = require('ethers');

const wallet = ethers.Wallet.createRandom();
console.log(wallet.address);
console.log(wallet.privateKey);
console.log(wallet.mnemonic);