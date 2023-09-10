import { VStack } from "@chakra-ui/react";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return <VStack py={"20px"}>{children}</VStack>;
}
