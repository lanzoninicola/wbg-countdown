import { useContextSelector } from "use-context-selector";
import { OnboardingContext } from "../context/onboarding-context";

export default function useProductInfo() {
  const productId = useContextSelector(
    OnboardingContext,
    (ctx) => ctx.productId
  );

  const installationId = useContextSelector(
    OnboardingContext,
    (ctx) => ctx.installationId
  );

  return {
    productId,
    installationId,
  };
}
