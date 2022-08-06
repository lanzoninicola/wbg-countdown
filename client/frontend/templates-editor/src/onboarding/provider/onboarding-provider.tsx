import { useState } from "react";
import { OnboardingContext } from "./context/onboarding-context";

interface OnboardingProviderProps {
  children: React.ReactNode;
  currentStatus: "pending" | "completed";
}

export default function OnboardingProvider({
  children,
  currentStatus,
}: OnboardingProviderProps) {
  const [status, setStatus] = useState<"pending" | "completed">(currentStatus);

  return (
    <OnboardingContext.Provider
      value={{
        status,
        setStatus,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}
