pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SDT is ERC20 {
  constructor() ERC20("StackUp DST Token", "SDT") {
    _mint(msg.sender, 1000000 * (10 ** decimals()));
  }

}