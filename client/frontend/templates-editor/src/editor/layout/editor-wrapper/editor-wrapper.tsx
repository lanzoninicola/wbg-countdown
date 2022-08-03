import { Box } from "@chakra-ui/react";

export default function EditorWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      id="editor-wrapper"
      w="100%"
      h="calc(100% - 50px)"
      position={"relative"}
      css={`
        & > * {
          height: 100%;
        }
      `}
    >
      {children}
    </Box>
  );
}
