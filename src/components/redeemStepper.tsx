"use client";
import React, {useEffect} from "react";
import {
    Box,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    Stepper,
    StepSeparator,
    StepStatus,
    StepTitle,
    useSteps,
} from "@chakra-ui/react";

const steps = [
    {
        title: "Sending notes and proof",
        description: "Sending notes to Eigenlayer Central Mint",
    },
    {
        title: "Verifying data and address",
        description: "Eigenlayer Central Mint is verifying the redemption request.",
    },
    {
        title: "Sending ETH to redemption address",
        description: "ETH incoming...",
    },
];

export function RedeemStepper({onDone}: { onDone: () => void }) {
    const {activeStep, setActiveStep} = useSteps({
        index: 0,
        count: steps.length,
    });

    useEffect(() => {
        (async () => {
            for (let step = 0; step < steps.length + 1; step++) {
                await new Promise((resolve) => setTimeout(resolve, 300));
                setActiveStep(step);
            }
            onDone();
        })();
        return () => {
            setActiveStep(0);
        };
    }, []);

    return (
        <Stepper index={activeStep} orientation="vertical" height="400px" gap="0">
            {steps.map((step, index) => (
                <Step key={index}>
                    <StepIndicator>
                        <StepStatus
                            complete={<StepIcon/>}
                            incomplete={<StepNumber/>}
                            active={<StepNumber/>}
                        />
                    </StepIndicator>

                    <Box flexShrink="0">
                        <StepTitle>{step.title}</StepTitle>
                        <StepDescription>{step.description}</StepDescription>
                    </Box>

                    <StepSeparator/>
                </Step>
            ))}
        </Stepper>
    );
}
