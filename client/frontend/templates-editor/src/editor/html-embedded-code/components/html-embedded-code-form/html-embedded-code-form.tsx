import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface HtmlEmbeddedCodeFormProps {
  htmlCode: string;
}

export default function HtmlEmbeddedCodeForm({
  htmlCode,
}: HtmlEmbeddedCodeFormProps) {
  const { t } = useTranslation();

  return (
    <FormControl>
      <FormLabel
        htmlFor="countdown-html"
        className="theme-font"
        fontSize={"sm"}
        hidden={true}
      >
        {t("countdowns.table.shortcode")}
      </FormLabel>
      <Textarea
        id="countdown-html"
        minH={"300px"}
        value={htmlCode}
        isReadOnly={true}
        fontFamily="monospace"
        fontSize={"sm"}
        bg={"gray.600"}
        color={"white"}
      />
    </FormControl>
  );
}
