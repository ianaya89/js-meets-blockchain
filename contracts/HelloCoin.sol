pragma solidity ^0.4.21;

contract HelloCoin {
  mapping (address => uint) public balance;

  function mint (address receiver, uint amount) public returns(uint) {
    balance[receiver] += amount;
    return balance[receiver];
  }

  function send (address receiver, uint amount) public {
    balance[msg.sender] -= amount;
    balance[receiver] += amount;
  }

  function getBalance (address receiver) public view returns(uint) {
    return balance[receiver];
  }
}