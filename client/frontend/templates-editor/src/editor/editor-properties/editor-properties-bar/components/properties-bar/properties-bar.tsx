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
    <>
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
    </>
  );
}
