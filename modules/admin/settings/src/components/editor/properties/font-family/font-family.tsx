import { Typography } from "../../../../services/typography/types";
import GoogleFontPicker from "../../../shared/google-font-picker/google-font-picker";
import PropertyWrapper from "../../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";

interface FontFamilyProps {
  label: string;
  fontFamilySelected: Typography;
  onFontFamilySelected: (fontFamilySelected: Typography) => void;
}

export default function FontFamily({
  label,
  fontFamilySelected,
  onFontFamilySelected,
}: FontFamilyProps) {
  return (
    <PropertyWrapper>
      <Label>{label}</Label>
      <GoogleFontPicker
        fontSelected={fontFamilySelected}
        onFontSelected={onFontFamilySelected}
      />
    </PropertyWrapper>
  );
}
