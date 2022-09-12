import useThemeLayout from "../../../countdown-state-management/hooks/theme/useThemeLayout";
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

  const editorStyle = {
    flexDirection: flexOrientation as any,
    WebkitJustifyContent: justifyContent,
    justifyContent:
      gap === 1 ? "space-evenly" : gap === 2 ? "space-around" : "space-between",
    background,
  };

  return (
    <div data-role="countdown-wrapper" style={editorStyle}>
      {children}
    </div>
  );
}
