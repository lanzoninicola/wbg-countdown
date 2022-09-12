import { useMemo } from "react";

import useAppContext from "../../../countdown-state-management/hooks/app/useAppContext";
import useSettingsContext from "../../../countdown-state-management/hooks/settings/useSettingsContext";
import useThemeContext from "../../../countdown-state-management/hooks/theme/useThemeContext";
import { encrypt } from "../../../countdown-state-management/utils/crypto";

export default function useHtmlCode() {
  const { layout, timer, title } = useThemeContext();
  const { targetDate, targetTimezone } = useSettingsContext();
  const { productPublicWebsiteURL } = useAppContext();

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

    const BASE_ASSETS_URL = `${productPublicWebsiteURL}/wp-content/plugins/clockdown/client/frontend/public/clockdown-widget/assets`;

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
