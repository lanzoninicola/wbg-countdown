import { Box } from "@chakra-ui/react";

interface PropertyItemProps {
  children: React.ReactNode;
}

export default function PropertyItem({ children }: PropertyItemProps) {
  return (
    <Box pl={".35rem"} cursor="pointer" _hover={{ background: "blue.200" }}>
      <Box bg={"white"}>{children}</Box>
    </Box>
  );
}
