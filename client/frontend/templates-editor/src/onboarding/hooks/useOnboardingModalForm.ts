// create a hook to handle the form state with useReducer including loading and error  and the reducer function
import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useNotifications } from "../../notifications";
import { useOnboardingRestApi } from "../../onboarding-rest-api";
import useOnboardingContext from "../provider/hooks/useOnboardingContext";
import useProductInfo from "../provider/hooks/useProductInfo";
import { OnboardingFormState } from "../provider/types/context";

export default function useOnboardingModalForm() {
  const {
    isOpen: isModalOpen,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();
  const { productId, installationId } = useProductInfo();
  const { formState, dispatch } = useOnboardingContext();
  const { doOnboarding } = useOnboardingRestApi();
  const { error: errorNotification } = useNotifications();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "ONBOARDING_FORM_ON_CHANGE",
      name: e.target.name as keyof OnboardingFormState,
      value: e.target.value.trim(),
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "ONBOARDING_FORM_ON_CHANGE",
      name: e.target.name as keyof OnboardingFormState,
      value: e.target.checked,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch({ type: "ONBOARDING_FORM_SUBMIT" });

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
          dispatch({ type: "ONBOARDING_FORM_SUCCESS_RESPONSE" });
        }
      })
      .catch((error) => {
        dispatch({ type: "ONBOARDING_FORM_FAILURE_RESPONSE", error });

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
