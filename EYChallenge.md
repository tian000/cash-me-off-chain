# Cash Me Off-Chain

## A privacy and scaling solution to Ethereum / EVM chains

#### Authors: Diyahir Campos, James Scanlon, Napas Udomsak

---

## Table of Contents

1. [What is eCash?](#what-is-ecash)
2. [Main problem?](#main-problem)
3. [System Architecture](#system-architecture)
4. [Advantages and Use-cases](#advantages-and-use-cases)
5. [Conclusion](#conclusion)
6. [Extended: Chaumian Mints (Blind Signature scheme)](#extended-chaumian-mints-blind-signature-scheme)

---

## What is eCash?

- eCash works similar to physical cash, where the data is the money.
- eCash can be transferred in any way you can transfer data with instant settlement.
  - Email, telegram, sms, pen and paper, etc.
- Central bank issues the notes, and honors the notes when they see them, but do not know the full history of the note.

---

## Main problem?

- Central Bank is one entity who requires high levels of trust and can rug the whole system.
- Previous attempts to do this always had a central point of failure.
- With Eigenlayer, there is now a new source of 'Trust' via slashing and incentives.
- So the 'Central Bank', can leverage eigenlayer to operate in a trust-minimized way using their staked ETH as trust-collateral.

---

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

### Ethereum (ETH)

Ethereum acts as the underlying blockchain where all the smart contracts and transactions are recorded. It's where the initial ETH comes from and returns to as users engage with the Eigenlayer Central Mint.

### Eigenlayer Central Mint (ECM)

Eigenlayer Central Mint (ECM) is the core entity that facilitates the creation and settlement of eCash. It is responsible for:

- Receiving ETH from users.
- Verifying transactions.
- Issuing the blinded and signed data (notes).
- Verifying the validity of the notes when they are presented back for redemption.
- Sending ETH back to the Ethereum blockchain when notes are redeemed.

This entity leverages Eigenlayer's trust-minimized system, operating with staked ETH as trust collateral, thus reducing the risk of centralization.

### User (Minter)

The user is an individual or entity that wants to transact in eCash for reasons such as privacy, scaling, or instant settlement. The user:

- Sends ETH to ECM.
- Sends blinded data (S(Data)) to ECM.
- Receives signed data (B(S(Data))) from ECM.
- Unblinds the note to produce B(Data).
- Sends and receives notes through any data-transfer medium like email, telegram, etc.

### User 2 (Redeemer)

User 2 represents another individual or entity participating in the system, similar to 'User'. User 2 can:

- Receive notes from User or any other users.
- Verify the signatures on the notes.
- Redeem notes by sending them back to ECM along with their Ethereum address.

These participants interact in a sequence to provide a trust-minimized, privacy-preserving eCash system on top of Ethereum and other compatible blockchains.

### Workflow Walkthrough: Send Money

1. **User**: Send ETH
2. **Eigenlayer Central Mint**: Receive Signed 'Data' = S(Data)

### Workflow Walkthrough: Central Bank Signature

1. **User**: Verifies transfer
2. **Eigenlayer Central Mint**: Signs S(data) = B(S(data))

### Workflow Walkthrough: Unblind Note

1. **User**: Unblinds S(data) = S-1(B(S(data))) = B(data)

### Workflow Walkthrough: Transfer Note

- Can be sent via email, telegram, sms, any way of transferring data.

1. **User**: Sends Note and proof: B(data), data
2. **User 2**: Verifies Signatures

### Workflow Walkthrough: Claims Note

1. **User 2**: Sends B(data), data, address to Eigenlayer Central Mint

### Workflow Walkthrough: Honors Note

1. **User 2**: Provides Address
2. **Eigenlayer Central Mint**: Verifies Signature And Honors eCash by Sending ETH

---

## Advantages and Use-cases

- Anonymous / Private
- Off-chain
- Offline payments possible
- Minimal on-chain footprint
- Micropayments
- Instant settlement
- New use-cases with data as a bearer instrument

---

## Conclusion

The current bleeding-edge scaling solution to Bitcoin is eCash (Fedimint), but they have a central point of failure/poor trust model with the eCash minter / Central Bank.

Only with Eigenlayer, can you remove this point of failure and have the lowest level of trust to create an eCash system. Any attempt to steal money requires collaboration of all operators, thus will result in early slashing before any loss of funds.

---

## Extended: Chaumian Mints (Blind Signature scheme)

1. **Deposit Money**, user sign data => U(data)
2. **Bank signs** U(Data) => B(U(data)), sends back to user
3. **User unsigns data** => U-1B(U(data))) => B(data)
4. Now user has B(data) signed by Bank without ever revealing what 'data' is to the bank.
5. Bank honors any note with its signature. [B(data), data] is a proof that at some point money was deposited since they signed it at some point.

---
