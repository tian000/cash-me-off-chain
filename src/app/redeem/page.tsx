"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  Heading,
  Spinner,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  Textarea,
  useSteps,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

import { v4 as uuidv4 } from "uuid";

export function Step1({ nextCallback }: { nextCallback: () => void }) {
  const [value, setValue] = React.useState("");
  const [isClaiming, setIsClaiming] = React.useState(false);

  function onClaim() {
    setIsClaiming(true);
    setTimeout(() => {
      setIsClaiming(false);
    }, 20000);
  }

  const steps = [
    { title: "First", description: "Contact Info" },
    { title: "Second", description: "Date & Time" },
    { title: "Third", description: "Select Rooms" },
  ];

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Flex align="center" justify="center" direction={"column"}>
      <Heading>Recieve eCash</Heading>
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
      <Flex direction={"row"} gap={"2"} padding={"2"}>
        {!isClaiming && (
          <ButtonGroup>
            <Link href="/" color="blue.400" _hover={{ color: "blue.500" }}>
              <Button colorScheme="blue">Back</Button>
            </Link>
            <Button onClick={() => onClaim()} colorScheme="blue">
              Claim
            </Button>
          </ButtonGroup>
        )}
      </Flex>

      {isClaiming && (
        <Stepper size="lg" index={activeStep}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      )}
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
          <Heading>Recieve eCash</Heading>
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
