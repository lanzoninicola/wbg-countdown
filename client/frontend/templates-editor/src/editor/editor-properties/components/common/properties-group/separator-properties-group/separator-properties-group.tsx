import { useTranslation } from "react-i18next";

import useThemeTimerSelector from "../../../../../../countdown-provider/hooks/theme/useThemeTimerSelector";
import PropertyGroupWrapper from "../../../../layout/property-group-wrapper/property-group-wrapper";
import SeparatorChar from "./separator-char/separator-char";
import ShowSeparator from "./show-separator/show-separator";

interface SeparatorPropertiesGroupProps {
  showGroupTitle?: boolean;
  [key: string]: any;
}

export default function SeparatorPropertiesGroup({
  showGroupTitle,
  ...props
}: SeparatorPropertiesGroupProps) {
  const { t } = useTranslation();
  const { showSeparator, setShowSeparator, separatorChar, setSeparatorChar } =
    useThemeTimerSelector();

  return (
    <PropertyGroupWrapper
      showGroupTitle={showGroupTitle}
      title={t("editor.propertiesGroup.separator.groupTitle")}
      {...props}
    >
      <ShowSeparator
        showSeparator={showSeparator}
        onChangeShowSeparator={setShowSeparator}
      />
      <SeparatorChar
        showSeparator={showSeparator}
        separatorChar={separatorChar}
        onChangeSeparatorChar={setSeparatorChar}
      />
    </PropertyGroupWrapper>
  );
}
