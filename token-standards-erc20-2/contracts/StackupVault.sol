// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {sToken} from "./sToken.sol";

contract StackupVault {
    mapping(address => IERC20) public tokens;
    mapping(address => sToken) public claimTokens;

    constructor(address uniAddr, address linkAddr) {
        tokens[uniAddr] = IERC20(uniAddr);
        tokens[linkAddr] = IERC20(linkAddr);

        claimTokens[uniAddr] = new sToken("Claim Uni", "sUNI");
        claimTokens[linkAddr] = new sToken("Claim Link", "sLINK");
    }

    function deposit(address tokenAddr, uint256 amount) external {
        require(tokens[tokenAddr] != IERC20(address(0)), "Invalid token");
        require(tokens[tokenAddr].transferFrom(msg.sender, address(this), amount), "transferFrom failed");
        claimTokens[tokenAddr].mint(msg.sender, amount);
    }

    function withdraw(address tokenAddr, uint256 amount) external {
        require(tokens[tokenAddr] != IERC20(address(0)), "Invalid token");
        claimTokens[tokenAddr].burn(msg.sender, amount);
        require(tokens[tokenAddr].transfer(msg.sender, amount), "transfer failed");
    }
}
