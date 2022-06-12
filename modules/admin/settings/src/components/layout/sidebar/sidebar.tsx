import { Flex } from "@chakra-ui/react";

interface SidebarProps {
  children: React.ReactNode;
  [key: string]: any;
}

export default function Sidebar({ children, ...props }: SidebarProps) {
  return (
    <Flex flexDirection={"column"} minW="350px" {...props}>
      {children}
    </Flex>
  );
}
