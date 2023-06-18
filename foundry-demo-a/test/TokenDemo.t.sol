// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/TokenDemo.sol";

contract FoundryDemoTest is Test {
  TokenDemo instance;

  function setUp() public {
    instance = new TokenDemo();
  }

  function test_Mint() public {
    string memory dummyTokenUri = "ipfs://metadata_url";
    uint256 tokenId = instance.mint(dummyTokenUri);
    assertEq(dummyTokenUri, instance.tokenURI(tokenId));
  }

  function testFail_UriComparison() public {
    string memory dummyTokenUri = "ipfs://metadata_url/1";
    string memory wrongTokenUri = "ipfs://metadata_url/should_fail";
    uint256 tokenId = instance.mint(dummyTokenUri);
    assertEq(wrongTokenUri, instance.tokenURI(tokenId));
  }
}