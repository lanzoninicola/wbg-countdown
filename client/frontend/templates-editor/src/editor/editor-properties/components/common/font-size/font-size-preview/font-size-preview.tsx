import { Text } from "@chakra-ui/react";

import useEditorContext from "../../../../../../countdown-state-management/hooks/editor/useEditorContext";

interface FontSizePreviewProps {
  size?: number;
}

export default function FontSizePreview({ size }: FontSizePreviewProps) {
  const { fontSizeUnit } = useEditorContext();

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
