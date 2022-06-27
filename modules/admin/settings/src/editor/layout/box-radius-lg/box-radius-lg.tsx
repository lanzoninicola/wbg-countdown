import {
  ComponentWithAs,
  forwardRef,
  HStack,
  StackProps,
} from "@chakra-ui/react";

interface BoxRadiusLgProps extends StackProps {
  children: React.ReactNode;
}

const BoxRadiusLg = forwardRef(
  ({ children, ...props }: BoxRadiusLgProps, ref) => {
    return (
      <HStack
        ref={ref}
        spacing={4}
        borderRadius={"lg"}
        boxShadow={"lg"}
        paddingBlock=".5rem"
        paddingInline={"1rem"}
        mt="1rem"
        maxW="650px"
        {...props}
      >
        {children}
      </HStack>
    );
  }
);

export default BoxRadiusLg;
