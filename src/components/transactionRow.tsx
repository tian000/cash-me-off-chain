export type Transaction = {
    from: string,
    to: string,
    amount: string,
    symbol: string
}
import {Box, Card, CardBody} from "@chakra-ui/react"

export function TransactionRow(tx: Transaction) {
    return (
        <Card p={"2"} m={"2"}>
            <CardBody p={"1"}>
                <Box>
                    <Box>Sent {tx.amount + " " + tx.symbol}</Box>
                    <Box>To: {tx.to}</Box>
                </Box>
            </CardBody>
        </Card>
    )
}