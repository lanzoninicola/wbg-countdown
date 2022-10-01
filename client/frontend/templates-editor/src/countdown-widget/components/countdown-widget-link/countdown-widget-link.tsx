import { WidgetContext } from "../../../countdown-state-management";
import useConfigState from "../../../countdown-state-management/common/hooks/config/useConfigState";

interface CountdownWidgetLinkProps {
  children: React.ReactNode;
}

export default function CountdownWidgetLink({
  children,
}: CountdownWidgetLinkProps) {
  const config = useConfigState(WidgetContext);

  if (!config) {
    return <>{children}</>;
  }

  return (
    <a
      href={config?.productPublicWebsiteURL}
      data-element="countdown-link-wrapper"
    >
      {children}
    </a>
  );
}
