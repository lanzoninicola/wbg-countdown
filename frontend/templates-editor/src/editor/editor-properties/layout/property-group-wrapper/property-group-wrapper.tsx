import { Flex } from "@chakra-ui/react";

interface PropertyGroupProps {
  children: React.ReactNode;
}

export default function PropertyGroupWrapper({ children }: PropertyGroupProps) {
  return (
    <Flex flexDirection={"column"} gap=".5rem">
      {children}
    </Flex>
  );
}
