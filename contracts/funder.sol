// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract Funder {
    uint256 public numberOfFunder;
    mapping(uint256 => address) funders;

    receive() external payable {}

    function transfer() external payable {
        funders[numberOfFunder] = msg.sender;
    }

    function withdraw(uint256 withdrawAmount) external {
        require(
            withdrawAmount <= 2000000000000000000,
            "Can't withdraw more then 2 ethers"
        );
        payable(msg.sender).transfer(withdrawAmount);
    }
}
