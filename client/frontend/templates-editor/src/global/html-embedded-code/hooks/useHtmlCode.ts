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

    const BASE_DOMAIN = "http://localhost/bb-melhor-envio";
    const BASE_ASSETS_URL = `${BASE_DOMAIN}/wp-content/plugins/clockdown/client/frontend/public/clockdown-widget/assets`;

    // script tag
    htmlCode += `<script `;
    htmlCode += `src="${BASE_ASSETS_URL}/index.js"`;
    htmlCode += `></script>`;

    // style tag
    htmlCode += `<link rel="stylesheet" `;
    htmlCode += `href="${BASE_ASSETS_URL}/index.css"`;
    htmlCode += `/>`;

    return htmlCode;
  }, [layout, timer, title, targetDate, targetTimezone]);
}
