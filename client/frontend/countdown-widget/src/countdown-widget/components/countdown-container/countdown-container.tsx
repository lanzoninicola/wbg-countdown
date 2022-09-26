import { useEffect, useRef } from "react";

import useThemeLayoutSelector from "../../../countdown-state-management/hooks/theme/useThemeLayoutSelector";
import useElementSize from "../../../countdown-state-management/utils/useElementSize";

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
    <div ref={containerRef} data-element="countdown-container">
      {children}
    </div>
  );
}
