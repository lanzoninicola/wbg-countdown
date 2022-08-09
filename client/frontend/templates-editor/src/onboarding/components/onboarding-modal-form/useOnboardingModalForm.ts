// create a hook to handle the form state with useReducer including loading and error  and the reducer function
import React from "react";
import { useOnboardingRestApi } from "../../../onboarding-rest-api";
import useOnboardingFormState from "../../provider/hooks/useOnboardingFormState";
import useProductInfo from "../../provider/hooks/useProductInfo";
import { OnboardingFormState } from "../../provider/types";

export const useOnboardingModalForm = () => {
  const { productId, installationId } = useProductInfo();
  const { formState, dispatchFormState } = useOnboardingFormState();
  const { doOnboarding } = useOnboardingRestApi();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchFormState({
      type: "CHANGE",
      name: e.target.name as keyof OnboardingFormState,
      value: e.target.value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatchFormState({ type: "SUBMIT" });

    const {
      fullname,
      email,
      consent_terms,
      consent_newsletter,
      consent_privacy,
    } = formState;

    doOnboarding({
      product_id: Number(productId),
      installation_id: installationId,
      fullname,
      email,
      consent_terms,
      consent_newsletter,
      consent_privacy,
    })
      .then((res) => {
        if (res.data.status > 400) {
          throw new Error(res.message);
        }

        if (res.data.status === 200) {
          dispatchFormState({ type: "SUCCESS" });
        }
      })
      .catch((error) => {
        dispatchFormState({ type: "FAILURE", error });
      });
  };

  return { formState, handleChange, handleSubmit };
};
