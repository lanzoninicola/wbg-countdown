import "../../../style/global.css";

import { Button, HStack } from "@chakra-ui/react";
import { useRef, useState } from "react";

import { Typography } from "../../../services/typography/types";
import DialogWrapper from "../dialog-wrapper/dialog-wrapper";
import FontList from "./font-list/font-list";
import TextPreview from "./text-preview/text-preview";

interface GoogleFontPicker {
  fontSelected: Typography;
  onFontSelected: (fontSelected: Typography) => void;
}

export default function GoogleFontPicker({
  fontSelected,
  onFontSelected,
}: GoogleFontPicker) {
  const [showDialog, setShowDialog] = useState(false);
  let ref = useRef(null);

  return (
    <>
      <Button
        ref={ref}
        gridColumn={"2 / -1"}
        size="xs"
        className="theme-font"
        onClick={() => setShowDialog(!showDialog)}
        lineHeight="1"
      >
        {fontSelected ? fontSelected.fontFamily : "Select font"}
      </Button>
      {showDialog && (
        <DialogWrapper
          callerRef={ref}
          onCloseDialog={() => setShowDialog(!showDialog)}
        >
          <HStack gap={1}>
            <FontList onFontSelected={onFontSelected} />
            <TextPreview fontSelected={fontSelected} />
          </HStack>
        </DialogWrapper>
      )}
    </>
  );
}
