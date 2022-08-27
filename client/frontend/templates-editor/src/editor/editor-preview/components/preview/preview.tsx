import { FlexProps, forwardRef, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { ChakraToken } from "../../../../countdown-provider/types/theme/responsive";
import DEFAULT_BREAKPOINTS from "../../constants/default-breakpoints";
import DisplaySizeBar from "./display-size-bar/display-size-bar";
import PreviewWrapper from "./preview-wrapper/preview-wrapper";

interface PreviewWrapperProps extends FlexProps {
  children: React.ReactNode;
  currentToken: ChakraToken;
}

const Preview = forwardRef(
  ({ currentToken, children }: PreviewWrapperProps, ref) => {
    const { t } = useTranslation();

    return (
      <VStack ref={ref} id="countdown-wrapper" spacing={4}>
        <DisplaySizeBar
          badgeLabel={`${t("editor.preview.tokenBadge")} ${
            DEFAULT_BREAKPOINTS[currentToken]
          } `}
          w="100%"
          color="blue.500"
        />
        <PreviewWrapper currentToken={currentToken}>{children}</PreviewWrapper>
        {currentToken === "sm" && (
          <DisplaySizeBar
            badgeLabel={t("editor.preview.smallestDisplay")}
            w="375px"
            color="green.500"
          />
        )}
      </VStack>
    );
  }
);

export default Preview;
