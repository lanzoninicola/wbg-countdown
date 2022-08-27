import { useEffect, useRef } from "react";

import useElementSize from "../../../countdown-provider/utils/useElementSize";
import useThemeLayoutSelector from "../../../countdown-provider/hooks/theme/useThemeLayoutSelector";

interface CountdownContainerProps {
  children: React.ReactNode;
}

export default function CountdownContainer({
  children,
}: CountdownContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerSize = useElementSize(containerRef);
  const { themeDispatcher } = useThemeLayoutSelector();

  useEffect(() => {
    if (containerSize.width > 0 || containerSize.height > 0) {
      themeDispatcher({
        type: "THEME_LAYOUT_ON_CHANGE_CONTAINER_SIZE",
        payload: containerSize,
      });
    }
  }, [containerSize]);

  return (
    <div ref={containerRef} data-role="countdown-container">
      {children}
    </div>
  );
}
