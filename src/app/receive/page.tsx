"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  HStack,
  Heading,
  Skeleton,
  Spinner,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { ReceiveStepper } from "@/components/receiveStepper";
import { PageWrapper } from "@/components/pageWrapper";

function Step1({ nextCallback }: { nextCallback: () => void }) {
  const [value, setValue] = React.useState("");
  const [isClaiming, setIsClaiming] = React.useState(false);
  const [isDone, setIsDone] = useState<boolean>(false);

  function onClaim() {
    setIsClaiming(true);
    setTimeout(() => {
      setIsClaiming(false);
    }, 20000);
  }

  return (
    <Flex align="center" justify="center" direction={"column"}>
      <Heading>Receive eCash</Heading>

      <Flex direction={"row"} gap={"2"} padding={"2"}>
        {!isClaiming && (
          <VStack>
            <Box p="2">
              <FormControl>
                <Textarea
                  value={value}
                  minW="600px"
                  minH="200px"
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="eCash tokens"
                  size="lg"
                />
              </FormControl>
            </Box>
            <ButtonGroup>
              <Link href="/" color="blue.400" _hover={{ color: "blue.500" }}>
                <Button colorScheme="blue">Back</Button>
              </Link>
              <Button onClick={() => onClaim()} colorScheme="blue">
                Claim
              </Button>
            </ButtonGroup>
          </VStack>
        )}
      </Flex>

      {isClaiming && (
        <VStack>
          <HStack>
            <VStack>
              <ReceiveStepper
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
