import { useMemo } from "react";
import useSettingsContext from "../../../countdown-provider/hooks/settings/useSettingsContext";
import useThemeContext from "../../../countdown-provider/hooks/theme/useThemeContext";
import { encrypt } from "../../../countdown-provider/utils/crypto";

export default function useHtmlCode() {
  const { layout, timer, title } = useThemeContext();
  const { targetDate, targetTimezone } = useSettingsContext();

  return useMemo(() => {
    const settingsEnc = encrypt(
      JSON.stringify({
        targetDate,
        targetTimezone,
      })
    );

    const themeEnc = encrypt(
      JSON.stringify({
        layout,
        timer,
        title,
      })
    );

    let htmlCode = "<div ";
    htmlCode += 'data-role="clockdown-widget"';
    htmlCode += `data-settings="${settingsEnc}"`;
    htmlCode += `data-theme="${themeEnc}"`;
    htmlCode += "></div>";

    return htmlCode;
  }, [layout, timer, title, targetDate, targetTimezone]);
}
