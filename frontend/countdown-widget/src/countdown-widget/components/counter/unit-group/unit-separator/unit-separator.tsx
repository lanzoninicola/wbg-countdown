interface UnitSeparatorProps {
  separatorText: string;
  [key: string]: any;
}

export default function UnitSeparator({
  separatorText,
  ...props
}: UnitSeparatorProps) {
  return (
    <span
      style={{
        marginInline: "1rem",
        gridArea: props.gridArea,
      }}
    >
      {separatorText}
    </span>
  );
}
