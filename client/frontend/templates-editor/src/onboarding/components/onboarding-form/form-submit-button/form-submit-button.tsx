import { Button } from "@chakra-ui/react";
import { t } from "i18next";
import useOnboardingModalForm from "../../../hooks/useOnboardingModalForm";

export default function FormSubmitButton() {
  const { formState, handleSubmit } = useOnboardingModalForm();
  const { fullname, email, consent_terms, consent_privacy } = formState;

  return (
    <Button
      isLoading={formState.isLoading}
      isDisabled={
        fullname === "" ||
        email === "" ||
        consent_terms === false ||
        consent_privacy === false
      }
      loadingText={t("global.saving").capitalize()}
      className="theme-font"
      colorScheme="blue"
      size={"sm"}
      onClick={handleSubmit}
      data-test="onboarding-form-submit"
    >
      {t("onboarding.buttonLabel").capitalize()}
    </Button>
  );
}
