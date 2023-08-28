// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

import 'https://github.com/hashgraph/hedera-smart-contracts/blob/v0.2.0/contracts/hts-precompile/HederaResponseCodes.sol';
import 'https://github.com/hashgraph/hedera-smart-contracts/blob/v0.2.0/contracts/hts-precompile/IHederaTokenService.sol';
import 'https://github.com/hashgraph/hedera-smart-contracts/blob/v0.2.0/contracts/hts-precompile/HederaTokenService.sol';
import 'https://github.com/hashgraph/hedera-smart-contracts/blob/v0.2.0/contracts/hts-precompile/ExpiryHelper.sol';

contract NFTCreator is ExpiryHelper {
  function createNft(
      string memory name, 
      string memory symbol, 
      string memory memo, 
      int64 maxSupply,  
      uint32 autoRenewPeriod
    ) external payable returns (address){

    IHederaTokenService.TokenKey[] memory keys = new IHederaTokenService.TokenKey[](1);
    // Set this contract as supply
    keys[0] = getSingleKey(KeyType.SUPPLY, KeyValueType.CONTRACT_ID, address(this));

    IHederaTokenService.HederaToken memory token;
    token.name = name;
    token.symbol = symbol;
    token.memo = memo;
    token.treasury = address(this);
    token.tokenSupplyType = true; // set supply to FINITE
    token.maxSupply = maxSupply;
    token.tokenKeys = keys;
    token.freezeDefault = false;
    token.expiry = createAutoRenewExpiry(address(this), autoRenewPeriod); // Contract automatically renews by itself

    (int responseCode, address createdToken) = HederaTokenService.createNonFungibleToken(token);
    if(responseCode != HederaResponseCodes.SUCCESS){revert("Failed to create non-fungible token");}
    return createdToken;
  }

  function mintNft(address token, bytes[] memory metadata) external returns(int64){
    (int response, , int64[] memory serial) = HederaTokenService.mintToken(token, 0, metadata);
    if(response != HederaResponseCodes.SUCCESS) {revert("Failed to mint non-fungible token");}
    return serial[0];
  }

  function transferNft(address token, address receiver, int64 serial) external returns(int){
    int response = HederaTokenService.transferNFT(token, address(this), receiver, serial);
    if(response != HederaResponseCodes.SUCCESS){revert("Failed to transfer non-fungible token");}
    return response;
  }
}