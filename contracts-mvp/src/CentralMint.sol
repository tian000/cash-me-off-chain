// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./ICentralMint.sol";

contract CentralMint is ICentralMint {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function initiateMint() external payable override {
        emit MintInitiated(msg.sender, msg.value);
        // Blinded data is sent off-chain
    }

    function setEigenlayerMPCAddress(address _mpc) external override isOwner {
        owner = _mpc;
    }

    function honorMint(
        address recipient,
        uint256 amount
    ) external override isOwner {
        // Validity is checked off-chain
        payable(recipient).transfer(amount);

        emit MintHonored(recipient, amount);
    }

    function honorMintCrossChain(
        address recipient,
        uint256 amount
    ) external override isOwner {
        // Validity is checked off-chain
        payable(recipient).transfer(amount);

        emit MintHonored(recipient, amount);
    }

    modifier isOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }
}
