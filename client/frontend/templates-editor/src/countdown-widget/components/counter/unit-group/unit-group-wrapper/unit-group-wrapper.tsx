import "./unit-group-wrapper.css";

interface UnitGroupWrapperProps {
  children: React.ReactNode;
}

export default function UnitGroupWrapper({ children }: UnitGroupWrapperProps) {
  return <div className="unit-group-wrapper">{children}</div>;
}
