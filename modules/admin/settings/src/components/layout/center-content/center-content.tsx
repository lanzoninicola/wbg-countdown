import { VStack } from "@chakra-ui/react";

interface CenterContentProps {
  children: React.ReactNode;
}

export default function CenterContent({ children }: CenterContentProps) {
  return <VStack flex={"1 1 100%"}>{children}</VStack>;
}
