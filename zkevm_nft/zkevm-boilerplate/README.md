# zkEVM Boilerplate

This repository contains a boilerplate Hardhat project for EVM smart contract development in Solidity. It is intended to bootstrap the development of Immutable zkEVM-compatible smart contracts for developers of all skill levels.

It contains an example `MyERC721` contract that inherits from the `ImmutableERC721PermissionedMintable` contract from the [`@imtbl/zkevm-contracts`](https://github.com/immutable/zkevm-contracts) package, as well as example test cases and a deployment script to help you get started.

For more information and guides, please refer to our [smart contract developer documentation](https://docs.x.immutable.com/docs/rollups/zkevm/smart-contract-development-framework/).

## How to use

Fork this repository and clone it to your local machine.
See the [Github docs](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) for a guide to forking a repository.

Run `yarn` to install the required dependencies.

There are a few pre-defined scripts that you can run to compile, test, and deploy your contracts:

```
"scripts": {
  "clean": "npx hardhat clean",
  "test": "npx hardhat test",
  "compile": "npx hardhat compile",
  "deploy:goerli": "npx hardhat run scripts/deploy.ts --network goerli",
  "deploy:zkevm": "npx hardhat run scripts/deploy.ts --network immutableZkevmTestnet"
},
```
