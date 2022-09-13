import useAppContext from "../../../countdown-state-management/hooks/app/useAppContext";

interface CountdownLinkWrapperProps {
  children: React.ReactNode;
}

export default function CountdownLinkWrapper({
  children,
}: CountdownLinkWrapperProps) {
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
