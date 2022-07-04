import { useTranslation } from "react-i18next";

import {
  ThemeSeparatorContextData,
  ThemeSeparatorContextSetter,
} from "../../../../../../countdown-provider/types/theme/timer";
import PropertyGroupWrapper from "../../../../layout/property-group-wrapper/property-group-wrapper";
import SeparatorChar from "./separator-char/separator-char";
import ShowSeparator from "./show-separator/show-separator";

interface SeparatorPropertiesGroupProps {
  themeSeparator: ThemeSeparatorContextData & ThemeSeparatorContextSetter;
  showGroupTitle?: boolean;
  [key: string]: any;
}

export default function SeparatorPropertiesGroup({
  themeSeparator,
  showGroupTitle,
  ...props
}: SeparatorPropertiesGroupProps) {
  const { t } = useTranslation();

  return (
    <PropertyGroupWrapper
      showGroupTitle={showGroupTitle}
      title={t("editor.propertiesGroup.separator.groupTitle")}
      {...props}
    >
      <ShowSeparator
        showSeparator={themeSeparator.showSeparator}
        onChangeShowSeparator={themeSeparator.setShowSeparator}
      />
      <SeparatorChar
        showSeparator={themeSeparator.showSeparator}
        separatorChar={themeSeparator.separatorChar}
        onChangeSeparatorChar={themeSeparator.setSeparatorChar}
      />
    </PropertyGroupWrapper>
  );
}
