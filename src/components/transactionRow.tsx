export type Transaction = {
  action: string;
  from: string;
  to: string;
  amount: string;
  symbol: string;
};
import { Box, Card, CardBody } from "@chakra-ui/react";

export function TransactionRow(tx: Transaction) {
  return (
    <Card w="100%" p={"2"} m={"2"}>
      <CardBody p={"1"}>
        <Box>
          <Box>
            {tx.action} {tx.amount + " " + tx.symbol}
          </Box>
          <Box> {tx.to}</Box>
        </Box>
      </CardBody>
    </Card>
  );
}
