import useThemeLayout from "../../../countdown-provider/hooks/theme/useThemeLayout";
import "./countdown-wrapper.css";

interface CountdownWrapperProps {
  children: React.ReactNode;
}

export default function CountdownWrapper({ children }: CountdownWrapperProps) {
  const { orientation, gap } = useThemeLayout();

  const flexOrientation = orientation === "vertical" ? "column" : "row";

  return (
    <div
      data-role="countdown-wrapper"
      style={{
        WebkitFlexDirection: flexOrientation,
        msFlexDirection: flexOrientation,
        flexDirection: flexOrientation,
        gap: `${gap}rem`,
      }}
    >
      {children}
    </div>
  );
}
