interface CountdownWrapperProps {
  children: React.ReactNode;
}

export default function CountdownWrapper({ children }: CountdownWrapperProps) {
  return <div data-element="countdown-wrapper">{children}</div>;
}
