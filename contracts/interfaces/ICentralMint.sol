// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

interface ICentralMint {
    function initiateMint(uint256 amount) external payable;

    function honorMint(address recipient, uint256 amount) external;

    function honorMintCrossChain(address recipient, uint256 amount) external;

    function setEigenlayerMPCAddress(address mpc) external;

    event MintInitiated(address indexed minter, uint256 amount);

    event MintHonored(address indexed minter, uint256 amount);
}
