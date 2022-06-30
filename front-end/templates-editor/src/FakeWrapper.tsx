import { Box, HStack } from "@chakra-ui/react";

export default function FakeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Box bg="black" h="32px"></Box>
      <HStack>
        <Box bg="black" w="160px" minH={"calc(100vh - 32px)"}></Box>
        <Box>{children}</Box>
      </HStack>
    </>
  );
}
