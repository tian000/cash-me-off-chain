// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {CentralMint} from "../src/CentralMint.sol";
import {MockERC20} from "../src/MockERC20.sol";

contract CentralMintTest is Test {
    CentralMint centralMint;
    MockERC20 mockToken;

    address internal alice = vm.addr(0x1);
    address internal bob = vm.addr(0x2);
    address internal admin = vm.addr(0x3);

    function setUp() public {
        mockToken = new MockERC20("wETH", "wETH", 18);
        centralMint = new CentralMint(address(mockToken), admin);
        mockToken.mint(alice, 10 ether);
        mockToken.mint(bob, 5 ether);
    }

    function testInitiateMint() public {
        uint256 initialBalance = mockToken.balanceOf(alice);
        uint256 amount = 1 ether;

        vm.prank(alice);
        mockToken.increaseAllowance(address(centralMint), amount);
        vm.prank(alice);
        centralMint.initiateMint(amount);

        assertEq(mockToken.balanceOf(address(centralMint)), amount);
        assertEq(mockToken.balanceOf(alice), initialBalance - amount);
    }

    function testHonorMint() public {
        uint256 amount = 1 ether;

        vm.prank(admin);
        mockToken.mint(address(centralMint), amount); // Manually mint tokens to CentralMint for testing
        centralMint.honorMint(bob, amount);

        assertEq(mockToken.balanceOf(address(centralMint)), 0);
        assertEq(mockToken.balanceOf(bob), 6 ether); // Initial 5 ether + 1 ether honored
    }
}
