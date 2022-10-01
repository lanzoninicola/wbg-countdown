import { useMemo } from "react";

import useConfigContext from "../../../countdown-state-management/hooks/config/useConfigContext";
import useThemeContext from "../../../countdown-state-management/hooks/theme/useThemeContext";
import useWidgetContext from "../../../countdown-state-management/hooks/widget/useWidgetContext";
import { encrypt } from "../../../countdown-state-management/utils/crypto";

export default function useHtmlCode() {
  const { layout, timer, title } = useThemeContext();
  const { targetDate, targetTimezone } = useWidgetContext();
  const config = useConfigContext();

  return useMemo(() => {
    const widgetEnc = encrypt(
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

    const configEnc = encrypt(
      JSON.stringify({
        ...config,
      })
    );

    let htmlCode = "<div data-widget='clockdown'>";

    htmlCode += "<div ";
    htmlCode += 'data-element="clockdown-widget"';
    htmlCode += `data-widget="${widgetEnc}"`;
    htmlCode += `data-theme="${themeEnc}"`;
    htmlCode += `data-config="${configEnc}"`;
    htmlCode += "></div>";

    const BASE_ASSETS_URL = `${config.productPublicWebsiteURL}/wp-content/plugins/clockdown/client/frontend/public/clockdown-widget/assets`;

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
  }, [config, layout, timer, title, targetDate, targetTimezone]);
}
