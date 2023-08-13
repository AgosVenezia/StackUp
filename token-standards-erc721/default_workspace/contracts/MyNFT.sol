// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyNFT is ERC721URIStorage {
  constructor() ERC721("Stack NFTs", "SNFT") {}

  uint256 public nextTokenId;

  function mint (
    address _to,
    string calldata _uri
   ) external {
     _mint(_to, nextTokenId);
     _setTokenURI(nextTokenId, _uri);
     nextTokenId++;
  }
}