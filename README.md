# Cash Me Off-Chain

## A privacy and scaling solution to Ethereum / EVM chains

#### Authors: Diyahir Campos, James Scanlon, Napas Udomsak

---

## Project structure

1. [Smart Contracts](/contracts/)
2. [eCash Web Wallet](/src/)
3. [EY Challenge Markdown](/EYChallenge.md)

## System Architecture

```mermaid
sequenceDiagram
    participant ETH as Ethereum
    participant ECM as Eigenlayer Central Mint
    participant User1 as User 1
    participant User2 as User 2

    User1->>ETH: Send ETH to ECM
    User1->>ECM: Send Blinded Data S(Data)
    ECM->>ECM: Verify Transfer

    ECM->>ECM: Sign S(Data) => B(S(Data))
    ECM->>User1: Send B(S(Data))
    User1->>User1: Unblinds Note
    Note over User1: S(data) = S^-1(B(S(data))) = B(Data)

    User1-->>User2: Send Note and Proof (B(data), data)
    User2->>User2: Verify Signatures

    User2->>ECM: Send Data and Address (B(data), data, address)

    ECM->>ECM: Verifies Signature and Honors eCash
    Note over ECM: [B(data),data] stored in eigenDA or other DA provider
    ECM->>ETH: Send ETH to address
```

## Getting Started: Web Wallet

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Getting Started: Smart Contracts

Foundry required to be installed.

```bash
cd contracts
forge install openzeppelin/openzeppelin-contracts --no-git
forge install foundry-rs/forge-std --no-git
forge test
```
