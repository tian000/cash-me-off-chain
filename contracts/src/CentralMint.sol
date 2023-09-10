// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "../interfaces/ICentralMint.sol";
import "../interfaces/IAxelarGateway.sol";
import {IERC20} from "openzeppelin-contracts/token/ERC20/IERC20.sol";

// Make sure to include your IERC20 interface here

contract CentralMint is ICentralMint {
    address public owner;
    IAxelarGateway public axelarGateway; // Assuming you have this interface
    IERC20 public erc20Token; // ERC20 token interface

    constructor(address _erc20Address, address _axelarGateway) {
        owner = msg.sender;
        // Initialize the ERC20 token
        erc20Token = IERC20(_erc20Address);

        // Initialize the Axelar Gateway
        axelarGateway = IAxelarGateway(_axelarGateway);
    }

    function initiateMint(uint256 amount) external payable override {
        require(
            erc20Token.transferFrom(msg.sender, address(this), amount),
            "Transfer failed"
        );
        emit MintInitiated(msg.sender, amount);
        // Blinded data is sent and verified by eigenlayer operators off-chain
    }

    function setEigenlayerMPCAddress(address _mpc) external override isOwner {
        owner = _mpc;
    }

    function honorMint(
        address recipient,
        uint256 amount
    ) external override isOwner {
        // Validity is checked off-chain
        require(erc20Token.transfer(recipient, amount), "Transfer failed");
        emit MintHonored(recipient, amount);
    }

    function honorMintCrossChain(
        uint256 amount,
        string calldata recipient,
        string calldata destinationChain
    ) external override isOwner {
        // Validity is checked off-chain
        erc20Token.approve(address(axelarGateway), amount);
        axelarGateway.sendToken(destinationChain, recipient, "USDC", amount);

        emit MintHonoredCrossChain(amount, recipient, destinationChain);
    }

    modifier isOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }
}
