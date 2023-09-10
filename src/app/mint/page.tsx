"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  NumberInput,
  NumberInputField,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

import { v4 as uuidv4 } from "uuid";

export function Step1({ nextCallback }: { nextCallback: () => void }) {
  const [value, setValue] = React.useState("");

  return (
    <Flex align="center" justify="center" direction={"column"}>
      <Heading>Mint eCash</Heading>
      <Box p="2">
        <FormControl>
          <NumberInput
            min={0}
            onChange={(valueString) => setValue(valueString)}
          >
            <NumberInputField />
          </NumberInput>
        </FormControl>
      </Box>
      <Flex direction={"row"} gap={"2"} padding={"2"}>
        <Link href="/" color="blue.400" _hover={{ color: "blue.500" }}>
          <Button colorScheme="blue">Back</Button>
        </Link>

        <Button onClick={nextCallback} colorScheme="blue">
          Next
        </Button>
      </Flex>
    </Flex>
  );
}

export function Step2() {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    })();
    return () => {
      setIsLoading(true);
    };
  }, []);

  return (
    <Flex align="center" justify="center" direction={"column"}>
      {isLoading ? (
        <>
          <Heading>Minting eCash</Heading>
          <Box p="2">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Box>
        </>
      ) : (
        <>
          <Heading>Share this message to anonymously send your bitcoin</Heading>
          <Box p="2">
            <Text fontSize="2xl">{uuidv4()}</Text>
          </Box>
        </>
      )}
    </Flex>
  );
}

export default function MintPage() {
  const [step, setStep] = useState<number>(1);
  console.log(step);

  return (
    <>
      {step === 1 && <Step1 nextCallback={() => setStep(step + 1)}></Step1>}
      {step === 2 && <Step2></Step2>}
    </>
  );
}
