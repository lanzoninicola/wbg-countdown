import { Text } from "@chakra-ui/react";

import useAppContext from "../../../../../../countdown-provider/hooks/app/useAppContext";

interface FontSizePreviewProps {
  size?: number;
}

export default function FontSizePreview({ size }: FontSizePreviewProps) {
  const { fontSizeUnit } = useAppContext();

  return (
    <Text
      className="theme-font"
      fontSize={"xs"}
      fontWeight={600}
      textAlign="right"
    >
      {`${size}${fontSizeUnit}`}
    </Text>
  );
}
