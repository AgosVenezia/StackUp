import { ethers } from "hardhat";
import { expect } from "chai";
import { MyERC721 } from "../typechain-types";

describe("MyERC721", function () {
  let contract: MyERC721;

  beforeEach(async function () {
    // get owner (first account)
    const [owner] = await ethers.getSigners();

    // deploy OperatorAllowlist contract
    const OperatorAllowlist = await ethers.getContractFactory(
      "OperatorAllowlist"
    );
    const operatorAllowlist = await OperatorAllowlist.deploy(owner.address);

    // deploy MyERC721 contract
    const MyERC721 = await ethers.getContractFactory("MyERC721");
    contract = await MyERC721.deploy(
      owner.address, // owner
      "Imaginary Immutable Iguanas", // name
      "III", // symbol
      "https://example-base-uri.com/", // baseURI
      "https://example-contract-uri.com/", // contractURI
      operatorAllowlist.address, // operator allowlist contract
      owner.address, // royalty recipient
      ethers.BigNumber.from("2000") // fee numerator
    );
    await contract.deployed();

    // grant owner the minter role
    await contract.grantRole(await contract.MINTER_ROLE(), owner.address);
  });

  it("Should be deployed with the correct arguments", async function () {
    expect(await contract.name()).to.equal("Imaginary Immutable Iguanas");
    expect(await contract.symbol()).to.equal("III");
    expect(await contract.baseURI()).to.equal("https://example-base-uri.com/");
    expect(await contract.contractURI()).to.equal(
      "https://example-contract-uri.com/"
    );
  });

  it("Account with minter role should be able to mint NFT", async function () {
    const [owner, recipient] = await ethers.getSigners();
    await contract.connect(owner).mint(recipient.address, 123);
    expect(await contract.balanceOf(recipient.address)).to.equal(1);
    expect(await contract.ownerOf(123)).to.equal(recipient.address);
  });

  it("Account with minter role should be able to mint multiple NFTs", async function () {
    const [owner, recipient] = await ethers.getSigners();
    await contract
      .connect(owner)
      .safeMintBatch([
        { to: recipient.address, tokenIds: [...Array(5)].map((_, x) => x + 1) },
      ]);
    expect(await contract.balanceOf(recipient.address)).to.equal(5);
    expect(await contract.ownerOf(1)).to.equal(recipient.address);
    expect(await contract.ownerOf(2)).to.equal(recipient.address);
    expect(await contract.ownerOf(3)).to.equal(recipient.address);
    expect(await contract.ownerOf(4)).to.equal(recipient.address);
    expect(await contract.ownerOf(5)).to.equal(recipient.address);
  });

  it("Account without minter role should not be able to mint NFTs", async function () {
    const [_, acc1] = await ethers.getSigners();
    const minterRole = await contract.MINTER_ROLE();
    await expect(
      contract.connect(acc1).mint(acc1.address, 1)
    ).to.be.revertedWith(
      `AccessControl: account 0x70997970c51812dc3a010c7d01b50e0d17dc79c8 is missing role ${minterRole}`
    );
  });
});
