const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Quest 2 Deliverable", () => {
  let deployer, user1, user2, user3;

  // Constants
  const DEPLOYER_DEPLOY_MINT = ethers.parseEther("100");
  const DEPLOYER_MINT = ethers.parseEther("50");
  const BUY_AMOUNT = ethers.parseEther("30");
  const PRICE_IN_ETH = ethers.parseEther("3");
  const INCORRECT_PRICE_IN_ETH = ethers.parseEther("2");
  const TRANSFER_AMOUNT = ethers.parseEther("10");
  const APPROVE_AMOUNT = ethers.parseEther("15");

  beforeEach(async () => {
    [deployer, user1, user2, user3] = await ethers.getSigners();

    // Contract deployment
    const TokenFactory = await ethers.getContractFactory("contracts/ICOToken.sol:MyICO", deployer);
    this.token = await TokenFactory.connect(deployer).deploy(DEPLOYER_DEPLOY_MINT);
  });

  describe("Deployment tests", () => {
    it("Should mint 100 tokens to the deployer", async () => {
      expect(await this.token.balanceOf(deployer.address)).to.eq(DEPLOYER_DEPLOY_MINT);
    });
  });

  describe("ownerMint tests", () => {
    it("Should let the owner mint freely", async () => {
      await this.token.connect(deployer).ownerMint(DEPLOYER_MINT);
      expect(await this.token.balanceOf(deployer.address)).to.eq(ethers.parseEther("150"));
    });

    it("Should not allow others to mint freely", async () => {
      await expect(this.token.connect(user1).ownerMint(DEPLOYER_MINT)).to.be.revertedWith("Not the owner");
    });
  });

  describe("buyTokens tests", () => {
    it("Should let the public buy tokens", async () => {
      await this.token.connect(user1).buyTokens(BUY_AMOUNT, { value: PRICE_IN_ETH });
      expect(await this.token.balanceOf(user1.address)).to.equal(BUY_AMOUNT);
    });

    it("Should not allow the token purchase if the sale has expired", async () => {
      // Increase time
      ethers.provider.send("evm_increaseTime", [2 * 24 * 60 * 60]);
      // Mine the next block
      ethers.provider.send("evm_mine");
      await expect(this.token.connect(user1).buyTokens(BUY_AMOUNT), { value: PRICE_IN_ETH }).to.be.revertedWith("Sale has expired");
    });

    it("Should not allow the token purchase if the wrong amount of ETH is sent", async () => {
      await expect(this.token.connect(user1).buyTokens(BUY_AMOUNT), { value: INCORRECT_PRICE_IN_ETH }).to.be.revertedWith("Wrong amount of ETH sent");
    });
  });

  describe("ERC20 token tests", () => {
    it("Should transfer tokens via transfer()", async () => {
      // User 1 buys 30 tokens
      await this.token.connect(user1).buyTokens(BUY_AMOUNT, { value: PRICE_IN_ETH });

      // User 1 transfers 10 tokens to User 2
      await this.token.connect(user1).transfer(user2.address, TRANSFER_AMOUNT);
      expect(await this.token.balanceOf(user2.address)).to.eq(ethers.parseEther("10"));
      expect(await this.token.balanceOf(user1.address)).to.eq(ethers.parseEther("20"));
    });

    it("Should transfer tokens via transferFrom()", async () => {
      // User 1 buys 30 tokens
      await this.token.connect(user1).buyTokens(BUY_AMOUNT, { value: PRICE_IN_ETH });

      // User 1 approves User 3 to spend 15 tokens
      await this.token.connect(user1).approve(user3.address, APPROVE_AMOUNT);
      expect(await this.token.allowance(user1.address, user3.address)).to.eq(APPROVE_AMOUNT);

      // User 3 uses transferFrom to transfer User 1's tokens
      await this.token.connect(user3).transferFrom(user1.address, user3.address, APPROVE_AMOUNT);
      expect(await this.token.balanceOf(user3.address)).to.eq(ethers.parseEther("15"));
      expect(await this.token.balanceOf(user1.address)).to.eq(ethers.parseEther("15"));
    });
  });
});
