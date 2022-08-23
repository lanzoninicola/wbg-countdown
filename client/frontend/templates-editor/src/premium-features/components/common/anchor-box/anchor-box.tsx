import { Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface AnchorBoxProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export default function AnchorBox({ children, ...props }: AnchorBoxProps) {
  const { t } = useTranslation();
  return (
    <Box
      className="premium-feat-watermark"
      position={"absolute"}
      inset={0}
      zIndex={99}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      {...props}
    >
      {children}
    </Box>
  );
}
