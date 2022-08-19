import { Box, VStack } from "@chakra-ui/react";

interface OptionContainerProps {
  children: React.ReactNode;
}

export default function OptionContainer({ children }: OptionContainerProps) {
  return (
    <Box
      padding={".5rem"}
      _hover={{
        backgroundColor: "gray.100",
        cursor: "pointer",
      }}
    >
      <VStack
        className="vertical-layout"
        alignItems={"flex-start"}
        maxW={"500px"}
      >
        {children}
      </VStack>
    </Box>
  );
}
