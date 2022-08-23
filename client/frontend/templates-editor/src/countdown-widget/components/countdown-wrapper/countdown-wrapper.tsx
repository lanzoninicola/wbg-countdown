import useThemeLayout from "../../../countdown-provider/hooks/theme/useThemeLayout";
import "./countdown-wrapper.css";

interface CountdownWrapperProps {
  children: React.ReactNode;
}

export default function CountdownWrapper({ children }: CountdownWrapperProps) {
  const { orientation, gap, transparentBackground, backgroundColor } =
    useThemeLayout();

  const flexOrientation = orientation === "vertical" ? "column" : "row";
  const justifyContent =
    gap === 1 ? "space-evenly" : gap === 2 ? "space-around" : "space-between";
  const background = transparentBackground
    ? "transparent"
    : backgroundColor || "white";

  return (
    <div
      data-role="countdown-wrapper"
      style={{
        WebkitFlexDirection: flexOrientation,
        msFlexDirection: flexOrientation,
        flexDirection: flexOrientation,
        WebkitJustifyContent: justifyContent,
        justifyContent: justifyContent,
        background,
      }}
    >
      {children}
    </div>
  );
}
