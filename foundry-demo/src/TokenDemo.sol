// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "openzeppelin-contracts/contracts/utils/Counters.sol";

contract TokenDemo is ERC721URIStorage {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenId;

  constructor() ERC721("Aguito", "TD") {}

  function mint(string memory tokenUri) external returns (uint256) {
    uint256 newTokenId = _tokenId.current();

    _mint(msg.sender, newTokenId);
    _setTokenURI(newTokenId, tokenUri);

    _tokenId.increment();

    return newTokenId;
  }
}
