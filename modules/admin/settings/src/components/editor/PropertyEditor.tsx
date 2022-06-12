import { Flex, Divider } from "@chakra-ui/react";
import { useState } from "react";
import { Typography } from "../../services/typography/types";
import GroupTitle from "../layout/group-title/group-title";
import PropertyGroupWrapper from "../layout/property-group-wrapper/property-group-wrapper";
import CountdownTitle from "./properties/countdown-title/countdown-title";
import FontColor from "./properties/font-color/font-color";
import FontFamily from "./properties/font-family/font-family";
import FontSize from "./properties/font-size/font-size";
import TargetDate from "./properties/target-date/target-date";
import Time from "./properties/target-time/target-time";
import Timezone from "./properties/timezone/timezone";
import Units from "./properties/units/units";

export default function PropertyEditor() {
  const [colorTitle, setColorTitle] = useState("#aabbcc");
  const [colorDigits, setColorDigits] = useState("#aabbcc");
  const [colorLastDigit, setColorLastDigit] = useState("#aabbcc");
  const [fontFamilyTitle, setFontFamilyTitle] = useState<Typography>({
    fontFamily: "Inter",
    fontWeight: "400",
  });
  const [fontFamilyDigits, setFontFamilyDigits] = useState<Typography>({
    fontFamily: "Inter",
    fontWeight: "400",
  });
  const [fontSizeTitle, setFontSizeTitle] = useState(24);
  const [fontSizeDigits, setFontSizeDigits] = useState(24);

  return (
    <>
      <PropertyGroupWrapper>
        <GroupTitle>General</GroupTitle>
        <TargetDate />
        <Timezone />
      </PropertyGroupWrapper>
      <Divider marginBlock={".5rem"} />
      <PropertyGroupWrapper>
        <GroupTitle>Title style</GroupTitle>
        <CountdownTitle />
        <FontFamily
          label={"Text font"}
          fontFamilySelected={fontFamilyTitle}
          onFontFamilySelected={setFontFamilyTitle}
        />
        <FontSize
          label={"Text size"}
          fontSizeSelected={fontSizeTitle}
          onFontSizeSelected={setFontSizeTitle}
        />
        <FontColor
          label={"Text color"}
          colorSelected={colorTitle}
          onColorSelected={setColorTitle}
        />
      </PropertyGroupWrapper>
      <Divider marginBlock={".5rem"} />
      <PropertyGroupWrapper>
        <GroupTitle>Countdown Style</GroupTitle>
        <Units />
        <FontFamily
          label={"Digits font"}
          fontFamilySelected={fontFamilyDigits}
          onFontFamilySelected={setFontFamilyDigits}
        />
        <FontSize
          label={"Digits size"}
          fontSizeSelected={fontSizeDigits}
          onFontSizeSelected={setFontSizeDigits}
        />
        <FontColor
          label={"Digits color"}
          colorSelected={colorDigits}
          onColorSelected={setColorDigits}
        />
        <FontColor
          label={"Last digit color"}
          colorSelected={colorLastDigit}
          onColorSelected={setColorLastDigit}
        />
      </PropertyGroupWrapper>
    </>
  );
}
