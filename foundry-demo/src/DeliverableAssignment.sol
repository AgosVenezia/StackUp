pragma solidity ^0.8.0;

contract DeliverableAssignment {
  address public owner;
  uint256 public secretNumber = 27;

  constructor() {
    owner = msg.sender;
  }
}