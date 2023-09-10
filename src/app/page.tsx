'use client';
import React from "react"
import {Box, Flex, Stat, StatArrow, StatHelpText, StatLabel, StatNumber} from "@chakra-ui/react"
import {Transaction, TransactionRow} from "@/components/transactionRow";
import {Buttons} from "@/components/buttons";
const transactions: Transaction[] = [
    {
        symbol: "BTC",
        amount: (518.74).toFixed(2),
        from: "me",
        to: "bc1pta326yq3ejnqu7yhc40hhkcyj2rlhxn29pm5cteempkg5ke56gjq6289a0"
    },
    {
        symbol: "BTC",
        amount: (67192.58).toFixed(2),
        from: "me",
        to: "bc1pta326yq3ejnqu7yhc40hhkcyj2rlhxn29pm5cteempkg5ke56gjq6289a0"
    },
    {
        symbol: "BTC",
        amount: (25785.93).toFixed(2),
        from: "me",
        to: "bc1pta326yq3ejnqu7yhc40hhkcyj2rlhxn29pm5cteempkg5ke56gjq6289a0"
    },
    {
        symbol: "BTC",
        amount: (67192.58).toFixed(2),
        from: "me",
        to: "bc1pta326yq3ejnqu7yhc40hhkcyj2rlhxn29pm5cteempkg5ke56gjq6289a0"
    },
    {
        symbol: "BTC",
        amount: (518.74).toFixed(2),
        from: "me",
        to: "bc1pta326yq3ejnqu7yhc40hhkcyj2rlhxn29pm5cteempkg5ke56gjq6289a0"
    }
]

export default function Home() {
    return (
        <Flex align="center" justify="center" direction={"column"}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Stat display="flex" alignItems="center" justifyContent="space-between">
                    <StatLabel textAlign="center">Current Balance</StatLabel>
                    <StatNumber textAlign="center">345,670 BTC</StatNumber>
                    <StatHelpText textAlign="center">
                        <StatArrow type='increase'/>
                        23.36%
                    </StatHelpText>
                </Stat>
            </Box>
            {transactions.map(tx => <TransactionRow {...tx}  />)}
            <Buttons/>
        </Flex>)

}
