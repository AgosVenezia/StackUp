const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Quest 3 Deliverable", () => {
  let deployer, user;
  const STARTING_UNI = ethers.parseEther("20");
  const STARTING_LINK = ethers.parseEther("10");

  before(async () => {
    [deployer, user, _] = await ethers.getSigners();

    // Create UNI and LINK token contracts
    const TokenFactory = await ethers.getContractFactory("contracts/utils/ERC20.sol:TemplateERC20", deployer);
    this.uni = await TokenFactory.connect(deployer).deploy("Uniswap", "UNI", ethers.parseEther("1000"));
    this.link = await TokenFactory.connect(deployer).deploy("Chainlink", "LINK", ethers.parseEther("1000"));

    // Create Stackup vault contract
    const VaultFactory = await ethers.getContractFactory("contracts/StackupVault.sol:StackupVault", deployer);
    this.vault = await VaultFactory.connect(deployer).deploy(this.uni.target, this.link.target);

    // Get claim token contracts
    this.sUni = await ethers.getContractAt("sToken", await this.vault.claimTokens(this.uni.target));
    this.sLink = await ethers.getContractAt("sToken", await this.vault.claimTokens(this.link.target));

    // Check that claim tokens were correctly saved in vault contract
    expect(await this.sUni.name()).to.eq("Claim Uni");
    expect(await this.sLink.symbol()).to.eq("sLINK");

    // Transfer 20 UNI and 10 LINK tokens to the user
    await this.uni.connect(deployer).transfer(user.address, STARTING_UNI);
    await this.link.connect(deployer).transfer(user.address, STARTING_LINK);

    // Check that UNI and LINK tokens were transferred to the user
    expect(await this.uni.balanceOf(user.address)).to.eq(STARTING_UNI);
    expect(await this.link.balanceOf(user.address)).to.eq(STARTING_LINK);
  });

  describe("Deposit Tests", () => {
    it("Should deposit tokens", async () => {
      // User deposits 20 UNI tokens
      await this.uni.connect(user).approve(this.vault.target, ethers.parseEther("20"));
      await this.vault.connect(user).deposit(this.uni.target, ethers.parseEther("20"));
      // User deposits 10 LINK tokens
      await this.link.connect(user).approve(this.vault.target, ethers.parseEther("10"));
      await this.vault.connect(user).deposit(this.link.target, ethers.parseEther("10"));

      // Check that vault received the deposited tokens
      expect(await this.uni.balanceOf(this.vault.target)).to.eq(ethers.parseEther("20"));
      expect(await this.link.balanceOf(this.vault.target)).to.eq(ethers.parseEther("10"));

      // Check that user received claim tokens
      expect(await this.sUni.balanceOf(user.address)).to.eq(ethers.parseEther("20"));
      expect(await this.sLink.balanceOf(user.address)).to.eq(ethers.parseEther("10"));
    });
  });

  describe("Withdraw Tests", () => {
    it("Should withdraw tokens", async () => {
      // User uses 15 sUNI tokens to retrieve back 15 deposited UNI tokens
      await this.vault.connect(user).withdraw(this.uni.target, ethers.parseEther("15"));

      // Check that the user only has 5 sUNI tokens remaining
      expect(await this.sUni.balanceOf(user.address)).to.eq(ethers.parseEther("5"));

      // Check that the vault transfered 15 UNI tokens to the user
      expect(await this.uni.balanceOf(this.vault.target)).to.eq(ethers.parseEther("5"));
      expect(await this.uni.balanceOf(user.address)).to.eq(ethers.parseEther("15"));
    });
  });
});
