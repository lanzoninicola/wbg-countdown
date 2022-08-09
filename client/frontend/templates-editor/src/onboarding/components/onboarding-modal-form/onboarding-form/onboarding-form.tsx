import {
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { useOnboardingModalForm } from "../useOnboardingModalForm";

interface OnboardingFormProps {
  /** Used to focus on an input field */
  initialFocusRef?: React.MutableRefObject<HTMLInputElement>;
}

export default function OnboardingForm({
  initialFocusRef,
}: OnboardingFormProps) {
  const { formState, handleInputChange, handleCheckboxChange } =
    useOnboardingModalForm();
  const { t } = useTranslation();

  const { fullname, email } = formState;

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  return (
    <VStack alignItems={"flex-start"} spacing={6} w="100%">
      <VStack alignItems={"flex-start"} w="100%">
        <FormControl>
          <FormLabel htmlFor="fullname" className="theme-font" fontSize={"xs"}>
            {t("global.name")}
          </FormLabel>
          <Input
            id="fullname"
            name="fullname"
            ref={initialFocusRef}
            placeholder={t("onboarding.namePlaceholder")}
            onChange={handleInputChange}
            className="theme-font"
            isDisabled={formState.isLoading}
            autoComplete="off"
            size={"sm"}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email" className="theme-font" fontSize={"xs"}>
            {t("global.email")}
          </FormLabel>
          <Input
            id="email"
            name="email"
            placeholder={t("onboarding.emailPlaceholder")}
            onChange={handleInputChange}
            className="theme-font"
            isDisabled={formState.isLoading}
            size={"sm"}
          />
        </FormControl>
      </VStack>
      {fullname !== "" && email !== "" && (
        <VStack spacing={2} alignItems={"flex-start"}>
          <Checkbox
            size="md"
            name="consent_newsletter"
            onChange={handleCheckboxChange}
          >
            <Text as="p" fontSize={"xs"} lineHeight={1.1} color={"gray.500"}>
              {t("onboarding.newsletterConsent")}
            </Text>
          </Checkbox>
          <Checkbox
            size="md"
            name="consent_terms"
            onChange={handleCheckboxChange}
          >
            <Text as="p" fontSize={"xs"} lineHeight={1.1} color={"gray.500"}>
              {t("onboarding.privacyConsent")}
            </Text>
          </Checkbox>
          <Checkbox
            size="md"
            name="consent_privacy"
            onChange={handleCheckboxChange}
          >
            <Text as="p" fontSize={"xs"} lineHeight={1.1} color={"gray.500"}>
              {t("onboarding.termsAndConditionsConsent")}
            </Text>
          </Checkbox>
        </VStack>
      )}
      {formState.isError && (
        <FormErrorMessage>{t("global.error")}</FormErrorMessage>
      )}
    </VStack>
  );
}
