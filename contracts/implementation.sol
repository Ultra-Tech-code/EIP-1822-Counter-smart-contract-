// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./proxiable.sol";

contract counter is Proxiable {
    address public owner;
    uint count;
    bool set;

    function intialize() external{
        require(owner == address(0) && set == false, "already initialized");
        owner = msg.sender;
        set = true;
    }

    function increment() external {
        count++;
    }

    function getCount() public view returns(uint){
        return count;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "restricted to the owner");
        _; 
    }

    function upgradeContract(address _newAddress) public onlyOwner {
        updateCodeAddress(_newAddress);

    }
}