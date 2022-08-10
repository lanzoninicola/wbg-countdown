import { VStack, Checkbox, Text } from "@chakra-ui/react";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import useOnboardingModalForm from "../../../hooks/useOnboardingModalForm";
import FormRequiredIndicator from "../form-required-indicator/form-required-indicator";
import CheckboxLabel from "./checkbox-label/checkbox-label";

export default function ConsentGroup() {
  const { handleCheckboxChange } = useOnboardingModalForm();
  const { t } = useTranslation();

  return (
    <VStack spacing={4} alignItems={"flex-start"}>
      <Checkbox
        size="md"
        name="consent_newsletter"
        onChange={handleCheckboxChange}
      >
        <CheckboxLabel>{t("onboarding.newsletterConsent")}</CheckboxLabel>
      </Checkbox>
      <Checkbox
        size="md"
        name="consent_terms"
        onChange={handleCheckboxChange}
        isRequired={true}
      >
        <CheckboxLabel>
          <FormRequiredIndicator /> {t("onboarding.privacyConsent")}
        </CheckboxLabel>
      </Checkbox>
      <Checkbox
        size="md"
        name="consent_privacy"
        onChange={handleCheckboxChange}
        isRequired={true}
      >
        <CheckboxLabel>
          <FormRequiredIndicator /> {t("onboarding.termsAndConditionsConsent")}
        </CheckboxLabel>
      </Checkbox>
    </VStack>
  );
}
