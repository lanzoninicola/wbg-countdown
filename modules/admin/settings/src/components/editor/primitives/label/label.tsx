import { FormLabel, FormLabelProps } from "@chakra-ui/react";

export default function Label({ children, ...props }: FormLabelProps) {
  return (
    <FormLabel
      className="theme-font"
      fontSize={"xs"}
      color="#666666"
      pl="15px"
      fontWeight={500}
      m={0}
      {...props}
    >
      {children}
    </FormLabel>
  );
}
