import { VStack, Box, Text } from "@chakra-ui/react";
import useCustomScrollbar from "../../../../hooks/useCustomScrollbar";
import { GOOGLE_FONTS_LIST } from "../../../../services/typography/constants";
import { Typography } from "../../../../services/typography/types";
import GoogleFontsLinkTag from "../../google-fonts-link-tag/google-fonts-link-tag";

export default function FontList({
  onFontSelected,
}: {
  onFontSelected: (font: Typography) => void;
}) {
  const customScrollbar = useCustomScrollbar();

  return (
    <>
      <GoogleFontsLinkTag googleFonts={GOOGLE_FONTS_LIST} />
      <VStack
        id="font-list"
        spacing={1}
        alignItems={"flex-start"}
        overflowY={"scroll"}
        maxH={"calc(300px - 2rem)"}
        w="120px"
        css={customScrollbar}
        p={1}
        marginInlineStart="0 !important"
      >
        {GOOGLE_FONTS_LIST.map((font, idx) => (
          <Box
            key={idx}
            borderRadius={"md"}
            onClick={() => onFontSelected(font)}
            p={2}
            cursor={"pointer"}
            _hover={{
              background: "gray.100",
            }}
            width="100%"
          >
            <Text
              pl={1}
              fontSize={"xs"}
              style={{
                fontFamily: font.fontFamily,
              }}
            >
              {font.fontFamily}
            </Text>
          </Box>
        ))}
      </VStack>
    </>
  );
}
