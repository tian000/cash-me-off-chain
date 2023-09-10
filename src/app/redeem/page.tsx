"use client";
import React, { useState } from "react";
import { uuidv4 } from "@/utils/uuid";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  Heading,
  HStack,
  Input,
  Skeleton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { ReceiveStepper } from "@/components/receiveStepper";
import { RedeemStepper } from "@/components/redeemStepper";
import { PageWrapper } from "@/components/pageWrapper";

function Step1({ nextCallback }: { nextCallback: () => void }) {
  const [value, setValue] = React.useState("");
  const [isRedeeming, setIsRedeeming] = React.useState(false);
  const [isDone, setIsDone] = useState<boolean>(false);

  function onRedeem() {
    setIsRedeeming(true);
    setTimeout(() => {
      setIsRedeeming(false);
    }, 20000);
  }

  return (
    <Flex align="center" justify="center" direction={"column"}>
      <Heading>Redeem eCash</Heading>

      <Flex direction={"row"} gap={"2"} padding={"2"}>
        {!isRedeeming && (
          <VStack>
            <Box p="2">
              <FormControl>
                <Box p="2">
                  <CheckboxGroup colorScheme="green">
                    <TableContainer>
                      <Table variant="simple">
                        <Thead>
                          <Tr>
                            <Th>Redeemable Notes</Th>
                            <Th isNumeric>Denomination</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>
                              <Checkbox value="something">{uuidv4()}</Checkbox>
                            </Td>
                            <Td isNumeric>0.1 ETH</Td>
                          </Tr>
                          <Tr>
                            <Td>
                              <Checkbox value="naruto">{uuidv4()}</Checkbox>
                            </Td>
                            <Td isNumeric>0.2 ETH</Td>
                          </Tr>
                          <Tr>
                            <Td>
                              {" "}
                              <Checkbox value="kakashi">{uuidv4()}</Checkbox>
                            </Td>
                            <Td isNumeric>0.7 ETH</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </CheckboxGroup>
                </Box>
                <Input placeholder="Redemption Address" />
              </FormControl>
            </Box>
            <ButtonGroup>
              <Link href="/" color="blue.400" _hover={{ color: "blue.500" }}>
                <Button colorScheme="blue">Back</Button>
              </Link>
              <Button onClick={() => onRedeem()} colorScheme="blue">
                Redeem
              </Button>
            </ButtonGroup>
          </VStack>
        )}
      </Flex>

      {isRedeeming && (
        <VStack>
          <HStack>
            <VStack>
              <RedeemStepper
                onDone={() => {
                  setIsDone(true);
                }}
              />
            </VStack>
            <Box p="2" justifySelf="center" alignSelf="center">
              <Skeleton isLoaded={isDone}>
                <Text fontSize="2xl">1 ETH Received</Text>
              </Skeleton>
            </Box>
          </HStack>
          <Link href="/" color="blue.400" _hover={{ color: "blue.500" }}>
            <Button mt={"20px"} colorScheme="blue">
              Back
            </Button>
          </Link>
        </VStack>
      )}
    </Flex>
  );
}

export default function RedeemPage() {
  const [step, setStep] = useState<number>(1);
  console.log(step);

  return (
    <PageWrapper>
      {step === 1 && <Step1 nextCallback={() => setStep(step + 1)}></Step1>}
    </PageWrapper>
  );
}
