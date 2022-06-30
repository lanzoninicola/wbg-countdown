import { forwardRef, Text, TextProps } from "@chakra-ui/react";
import "../../../style/global.css";

const Teext = forwardRef(({ children, ...props }: TextProps, ref) => {
  return (
    <Text ref={ref} className="theme-font" {...props}>
      {children}
    </Text>
  );
});

export default Teext;
