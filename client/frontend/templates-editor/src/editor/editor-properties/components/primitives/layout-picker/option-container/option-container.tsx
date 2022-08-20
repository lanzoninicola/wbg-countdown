import { Box, VStack } from "@chakra-ui/react";

interface OptionContainerProps {
  children: React.ReactNode;
  onClick?: () => void;
  [key: string]: any;
}

export default function OptionContainer({
  children,
  onClick,
  ...props
}: OptionContainerProps) {
  return (
    <Box
      padding={".5rem"}
      _hover={{
        backgroundColor: "gray.100",
        cursor: "pointer",
      }}
      onClick={onClick}
      borderRadius={"5px"}
      {...props}
    >
      <VStack
        className="option-container"
        alignItems={"flex-start"}
        maxW={"500px"}
      >
        {children}
      </VStack>
    </Box>
  );
}
