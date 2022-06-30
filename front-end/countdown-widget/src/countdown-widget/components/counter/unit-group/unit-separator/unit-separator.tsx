import { Text } from "@chakra-ui/react";

interface UnitSeparatorProps {
  separatorText: string;
  [key: string]: any;
}

export default function UnitSeparator({
  separatorText,
  ...props
}: UnitSeparatorProps) {
  return (
    <Text as="span" {...props} marginInline="1rem">
      {separatorText}
    </Text>
  );
}
