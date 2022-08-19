import { VStack } from "@chakra-ui/react";

import { PropertyBarItem } from "../../types";
import PropertyButton from "../property-button/property-button";

interface PropertyBarProps {
  items: PropertyBarItem[];
  onItemSelected: (item: PropertyBarItem) => void;
}

export default function PropertiesBar({
  items,
  onItemSelected,
}: PropertyBarProps) {
  return (
    <VStack position="absolute" top={5} left={5} spacing={4} zIndex={1}>
      {items.map((item, index) => {
        return (
          <PropertyButton
            key={index}
            ref={item.ref}
            label={item.label}
            icon={item.icon}
            onClick={() => onItemSelected(item)}
          />
        );
      })}
    </VStack>
  );
}
