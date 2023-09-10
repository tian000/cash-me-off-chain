"use client";
import React from "react";
import {
  Box,
  Flex,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  VStack,
} from "@chakra-ui/react";
import { Transaction, TransactionRow } from "@/components/transactionRow";
import { Buttons } from "@/components/buttons";
import { PageWrapper } from "@/components/pageWrapper";
const transactions: Transaction[] = [
  {
    action: "Minted",
    symbol: "ETH",
    amount: (8.74).toFixed(2),
    from: "me",
    to: "",
  },
  {
    action: "Redeemed",
    symbol: "ETH",
    amount: (2.58).toFixed(2),
    from: "me",
    to: "0x68b621079432B44EECf0cfaA09D81EB5e5239cF8",
  },
  {
    action: "Minted",
    symbol: "ETH",
    amount: (5.93).toFixed(2),
    from: "me",
    to: "",
  },
  {
    action: "Redeemed",
    symbol: "ETH",
    amount: (2.58).toFixed(2),
    from: "me",
    to: "0x68b621079432B44EECf0cfaA09D81EB5e5239cF8",
  },
  {
    action: "Redeemed",
    symbol: "ETH",
    amount: (8.74).toFixed(2),
    from: "me",
    to: "0x68b621079432B44EECf0cfaA09D81EB5e5239cF8",
  },
];

export default function Home() {
  return (
    <PageWrapper>
      <Flex align="center" justify="center" direction={"column"}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Stat
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <StatNumber textAlign="center">Current Balance</StatNumber>
            <StatNumber textAlign="center">1.35 ETH</StatNumber>
            <StatHelpText textAlign="center">
              <StatArrow type="increase" />
              23.36%
            </StatHelpText>
          </Stat>
        </Box>
        <VStack>
          {transactions.map((tx) => (
            <TransactionRow key={tx.action + tx.amount} {...tx} />
          ))}
          <Buttons />
        </VStack>
      </Flex>
    </PageWrapper>
  );
}
