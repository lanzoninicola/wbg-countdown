import { Flex } from "@chakra-ui/react";

import { ChakraToken } from "../../../../../countdown-provider/types/theme/responsive";
import useCustomScrollbar from "../../../../../hooks/useCustomScrollbar";
import DEFAULT_BREAKPOINTS from "../../../constants/default-breakpoints";

interface PreviewWrapperProps {
  children: React.ReactNode;
  currentToken: ChakraToken;
}

export default function PreviewWrapper({
  currentToken,
  children,
  ...props
}: PreviewWrapperProps) {
  const scrollbar = useCustomScrollbar();

  return (
    <Flex
      justifyContent={"center"}
      border={"1px solid black"}
      borderColor="gray.300"
      borderStyle={"dotted"}
      w={DEFAULT_BREAKPOINTS[currentToken]}
      overflowX={"auto"}
      css={scrollbar}
      {...props}
    >
      {children}
    </Flex>
  );
}
