interface CountdownUnitSeparatorProps {
  separatorText: string;
  [key: string]: any;
}

export default function CountdownUnitSeparator({
  separatorText,
  ...props
}: CountdownUnitSeparatorProps) {
  return <span data-element="countdown-unit-separator">{separatorText}</span>;
}
