import { Flex, Heading } from "@chakra-ui/react";

export default function GroupTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex h="48px" alignItems={"center"}>
      <Heading as="h2" className="theme-font" fontSize={"sm"} fontWeight={600}>
        {children}
      </Heading>
    </Flex>
  );
}
