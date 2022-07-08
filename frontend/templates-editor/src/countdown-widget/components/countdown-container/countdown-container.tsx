import { useEffect, useRef } from "react";
import useElementSize from "../../../countdown-provider/hooks/theme/useElementSize";
import useThemeGlobalSelector from "../../../countdown-provider/hooks/theme/useThemeGlobalSelector";

interface CountdownContainerProps {
  children: React.ReactNode;
}

export default function CountdownContainer({
  children,
}: CountdownContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerSize = useElementSize(containerRef);
  const { setContainerSize } = useThemeGlobalSelector();

  useEffect(() => {
    if (containerSize.width > 0 || containerSize.height > 0) {
      setContainerSize(containerSize);
    }
  }, [containerSize]);

  return (
    <div ref={containerRef} data-role="clockdown-container">
      {children}
    </div>
  );
}
