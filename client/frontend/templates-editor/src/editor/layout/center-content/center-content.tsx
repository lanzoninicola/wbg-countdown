import { VStack } from "@chakra-ui/react";

interface CenterContentProps {
  children: React.ReactNode;
}

export default function CenterContent({
  children,
  ...props
}: CenterContentProps) {
  return (
    <VStack
      id="center-content"
      justifyContent={"space-around"}
      bg="gray.50"
      {...props}
    >
      {children}
    </VStack>
  );
}
