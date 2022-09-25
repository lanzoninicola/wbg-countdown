import useThemeTimerSelector from "../../../countdown-state-management/hooks/theme/useThemeTimerSelector";
import useThemeTitleSelector from "../../../countdown-state-management/hooks/theme/useThemeTitleSelector";
import GoogleFontsLinkTag from "../../../editor/editor-properties/components/primitives/google-fonts-link-tag/google-fonts-link-tag";

export default function CountdownWidgetGoogleFontTag() {
  const {
    unitNumberFontFamily,
    unitNumberFontWeight,
    unitLabelFontFamily,
    unitLabelFontWeight,
  } = useThemeTimerSelector();
  const { fontFamily: titleFontFamily, fontWeight: titleFontWeight } =
    useThemeTitleSelector();

  return (
    <GoogleFontsLinkTag
      googleFonts={[
        {
          fontFamily: unitNumberFontFamily,
          fontWeight: unitNumberFontWeight,
        },
        {
          fontFamily: unitLabelFontFamily,
          fontWeight: unitLabelFontWeight,
        },
        { fontFamily: titleFontFamily, fontWeight: titleFontWeight },
      ]}
    />
  );
}
