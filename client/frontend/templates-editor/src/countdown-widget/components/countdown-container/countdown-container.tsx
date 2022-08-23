import { useEffect, useRef } from "react";
import useElementSize from "../../../countdown-provider/hooks/theme/useElementSize";
import useContainerSizeSelector from "../../../countdown-provider/hooks/theme/useContainerSizeSelector";

interface CountdownContainerProps {
  children: React.ReactNode;
}

export default function CountdownContainer({
  children,
}: CountdownContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerSize = useElementSize(containerRef);
  const { setContainerSize } = useContainerSizeSelector();

  useEffect(() => {
    if (containerSize.width > 0 || containerSize.height > 0) {
      setContainerSize(containerSize);
    }
  }, [containerSize]);

  return (
    <div ref={containerRef} data-role="countdown-container">
      {children}
    </div>
  );
}
