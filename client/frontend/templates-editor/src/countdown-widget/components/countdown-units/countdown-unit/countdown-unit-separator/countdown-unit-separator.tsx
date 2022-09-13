interface CountdownUnitSeparatorProps {
  separatorText: string;
  [key: string]: any;
}

export default function CountdownUnitSeparator({
  separatorText,
  ...props
}: CountdownUnitSeparatorProps) {
  const editorStyle = {
    marginInline: "1rem",
    gridArea: props.gridArea,
  };

  return (
    <span data-element="countdown-unit-separator" style={editorStyle}>
      {separatorText}
    </span>
  );
}
