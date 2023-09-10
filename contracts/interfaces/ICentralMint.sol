// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

interface ICentralMint {
    function initiateMint(uint256 amount) external payable;

    function honorMint(address recipient, uint256 amount) external;

    function honorMintCrossChain(
        uint256 amount,
        string calldata recipient,
        string calldata destinationChain
    ) external;

    function setEigenlayerMPCAddress(address mpc) external;

    event MintInitiated(address indexed minter, uint256 amount);

    event MintHonored(address indexed minter, uint256 amount);

    event MintHonoredCrossChain(
        uint256 amount,
        string recipient,
        string destinationChain
    );
}
