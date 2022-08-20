import useThemeLayout from "../../../countdown-provider/hooks/theme/useThemeLayout";

interface CountdownWrapperProps {
  children: React.ReactNode;
}

export default function CountdownWrapper({ children }: CountdownWrapperProps) {
  const { orientation } = useThemeLayout();

  const flexOrientation = orientation === "vertical" ? "column" : "row";

  return (
    <div
      data-role="clockdown-wrapper"
      style={{
        WebkitFlexDirection: flexOrientation,
        msFlexDirection: flexOrientation,
        flexDirection: flexOrientation,
      }}
    >
      {children}
    </div>
  );
}
