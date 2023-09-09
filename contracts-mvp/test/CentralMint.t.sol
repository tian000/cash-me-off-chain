// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {CentralMint} from "../src/CentralMint.sol";

contract CentralMintTest is Test {
    CentralMint centralMint;

    function setUp() public {
        centralMint = new CentralMint();
    }

    // Test initialization of the CentralMint
    function testInitiateMint() public {
        uint initialBalance = address(this).balance;
        uint amount = 1 ether;

        centralMint.initiateMint{value: amount}();

        assertEq(address(centralMint).balance, amount);
        emit log_named_uint(
            "Contract ETH Balance",
            address(centralMint).balance
        );
        emit log_named_uint("Sender ETH Balance", initialBalance - amount);
    }

    // Test honoring the mint
    function testHonorMint() public {
        address payable recipient = payable(address(0x1234));
        uint amount = 1 ether;

        centralMint.initiateMint{value: amount}();
        centralMint.honorMint(recipient, amount);

        assertEq(address(centralMint).balance, 0);
        emit log_named_uint(
            "Contract ETH Balance",
            address(centralMint).balance
        );
        emit log_named_uint("Recipient ETH Balance", recipient.balance);
    }
}
