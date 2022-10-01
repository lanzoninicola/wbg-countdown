import useConfigContext from "../../../countdown-state-management/hooks/config/useConfigContext";

interface CountdownWidgetLinkProps {
  children: React.ReactNode;
}

export default function CountdownWidgetLink({
  children,
}: CountdownWidgetLinkProps) {
  const { productPublicWebsiteURL } = useConfigContext();

  if (true) {
    return <>{children}</>;
  }

  return (
    <a href={productPublicWebsiteURL} data-element="countdown-link-wrapper">
      {children}
    </a>
  );
}
