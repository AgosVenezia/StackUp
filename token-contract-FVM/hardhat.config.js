require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const HYPERSPACE_RPC = process.env.HYPERSPACE_RPC;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hyperspace",
  networks: {
    hyperspace: {
      chainId: 3141,
      url: HYPERSPACE_RPC,
      accounts: [PRIVATE_KEY],
    },
  },
};
