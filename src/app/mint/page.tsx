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
import { SendStepper } from "@/components/stepper";

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

import { SimpleGrid } from "@chakra-ui/react";
import { NotesTable } from "@/components/notesTable";

export function Step2() {
  const [isDone, setIsDone] = useState<boolean>(false);

  return (
    <Flex align="center" justify="center" direction={"column"}>
      <Heading>Minting eCash</Heading>
      <SimpleGrid columns={2} spacing={10}>
        <SendStepper onDone={() => setIsDone(true)}></SendStepper>
        <Box p="2" justifySelf="center" alignSelf="center">
          {!isDone ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          ) : (
            <NotesTable />
          )}
        </Box>
      </SimpleGrid>
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
