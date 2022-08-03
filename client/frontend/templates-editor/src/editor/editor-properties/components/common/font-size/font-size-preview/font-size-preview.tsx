import { Text } from "@chakra-ui/react";
import useFontsizeUnitSelector from "../../../../../../countdown-provider/hooks/app/useFontsizeUnit";

interface FontSizePreviewProps {
  size?: number;
}

export default function FontSizePreview({ size }: FontSizePreviewProps) {
  const { fontSizeUnit } = useFontsizeUnitSelector();

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
