import {
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { useOnboardingModalForm } from "../useOnboardingModalForm";

interface OnboardingFormProps {
  /** Used to focus on an input field */
  initialFocusRef?: React.MutableRefObject<HTMLInputElement>;
}

export default function OnboardingForm({
  initialFocusRef,
}: OnboardingFormProps) {
  const { formState, handleChange } = useOnboardingModalForm();
  const { t } = useTranslation();

  return (
    <VStack alignItems={"flex-start"} spacing={4}>
      <VStack alignItems={"flex-start"}>
        <FormControl>
          <FormLabel htmlFor="fullname" className="theme-font" fontSize={"sm"}>
            {t("global.name")}
          </FormLabel>
          <Input
            id="fullname"
            ref={initialFocusRef}
            placeholder={t("onboarding.namePlaceholder")}
            onChange={handleChange}
            className="theme-font"
            isDisabled={formState.isLoading}
            autoComplete="off"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email" className="theme-font" fontSize={"sm"}>
            {t("global.email")}
          </FormLabel>
          <Input
            id="email"
            placeholder={t("onboarding.emailPlaceholder")}
            onChange={handleChange}
            className="theme-font"
            isDisabled={formState.isLoading}
          />
        </FormControl>
      </VStack>

      <VStack spacing={1} alignItems={"flex-start"}>
        <Checkbox size="sm" name="consent_newsletter" onChange={handleChange}>
          Newsletter Consent blah blah blah
        </Checkbox>
        <Checkbox size="sm" name="consent_terms" onChange={handleChange}>
          Terms Consent blah blah blah
        </Checkbox>
        <Checkbox size="sm" name="consent_privacy" onChange={handleChange}>
          Privacy Consent blah blah blah
        </Checkbox>
      </VStack>
      {formState.isError && (
        <FormErrorMessage>{t("global.error")}</FormErrorMessage>
      )}
    </VStack>
  );
}
