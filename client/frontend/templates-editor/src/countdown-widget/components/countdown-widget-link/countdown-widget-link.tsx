import useAppContext from "../../../countdown-state-management/hooks/app/useAppContext";

interface CountdownWidgetLinkProps {
  children: React.ReactNode;
}

export default function CountdownWidgetLink({
  children,
}: CountdownWidgetLinkProps) {
  const { productPublicWebsiteURL } = useAppContext();

  if (true) {
    return <>{children}</>;
  }

  return (
    <a href={productPublicWebsiteURL} data-element="countdown-link-wrapper">
      {children}
    </a>
  );
}
