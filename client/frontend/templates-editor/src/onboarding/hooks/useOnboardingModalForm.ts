// create a hook to handle the form state with useReducer including loading and error  and the reducer function
import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useNotifications } from "../../notifications";
import { useOnboardingRestApi } from "../../onboarding-rest-api";
import useOnboardingContext from "../provider/hooks/useOnboardingContext";
import useProductInfo from "../provider/hooks/useProductInfo";
import { OnboardingFormState } from "../provider/types/context";
import useOnboardingModalThankYou from "./useOnboardingModalThankYou";

export default function useOnboardingModalForm() {
  const {
    isOpen: isModalOpen,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();
  const { onOpenModal: onOpenModalThankYou } = useOnboardingModalThankYou();
  const { productId, installationId } = useProductInfo();
  const { formState, dispatch } = useOnboardingContext();
  const { doOnboarding } = useOnboardingRestApi();
  const { error: errorNotification } = useNotifications();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "ON_CHANGE_ONBOARDING_FORM",
      name: e.target.name as keyof OnboardingFormState,
      value: e.target.value.trim(),
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "ON_CHANGE_ONBOARDING_FORM",
      name: e.target.name as keyof OnboardingFormState,
      value: e.target.checked,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT_ONBOARDING_FORM" });

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
          dispatch({ type: "SUCCESS_ONBOARDING_RESPONSE" });
          onCloseModal();
          onOpenModalThankYou();
        }
      })
      .catch((error) => {
        dispatch({ type: "FAILURE_ONBOARDING_RESPONSE", error });

        errorNotification(error.message);
      });
  };

  return {
    formState,
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
    isModalOpen,
    onOpenModal,
    onCloseModal,
  };
}
