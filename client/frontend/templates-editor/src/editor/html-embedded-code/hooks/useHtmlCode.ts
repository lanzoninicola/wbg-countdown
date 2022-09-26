import { useMemo } from "react";

import useAppContext from "../../../countdown-state-management/hooks/app/useAppContext";
import useSettingsContext from "../../../countdown-state-management/hooks/settings/useSettingsContext";
import useThemeContext from "../../../countdown-state-management/hooks/theme/useThemeContext";
import { encrypt } from "../../../countdown-state-management/utils/crypto";

export default function useHtmlCode() {
  const { layout, timer, title } = useThemeContext();
  const { targetDate, targetTimezone } = useSettingsContext();
  const app = useAppContext();

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

    const appEnc = encrypt(
      JSON.stringify({
        ...app,
      })
    );

    let htmlCode = "<div data-widget='clockdown'>";

    htmlCode += "<div ";
    htmlCode += 'data-element="clockdown-widget"';
    htmlCode += `data-settings="${settingsEnc}"`;
    htmlCode += `data-theme="${themeEnc}"`;
    htmlCode += `data-app="${appEnc}"`;
    htmlCode += "></div>";

    const BASE_ASSETS_URL = `${app.productPublicWebsiteURL}/wp-content/plugins/clockdown/client/frontend/public/clockdown-widget/assets`;

    // script tag
    htmlCode += `<script `;
    htmlCode += `src="${BASE_ASSETS_URL}/index.js"`;
    htmlCode += `></script>`;

    // style tag
    htmlCode += `<link rel="stylesheet" `;
    htmlCode += `href="${BASE_ASSETS_URL}/index.css"`;
    htmlCode += `/>`;

    htmlCode += "</div>";

    return htmlCode;
  }, [app, layout, timer, title, targetDate, targetTimezone]);
}
