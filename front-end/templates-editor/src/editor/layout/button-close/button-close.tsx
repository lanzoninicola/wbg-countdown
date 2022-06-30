import { Button, forwardRef, IconButtonProps, Tooltip } from "@chakra-ui/react";
import { FiX } from "react-icons/fi";

interface ButtonCloseProps extends Omit<IconButtonProps, "aria-label"> {
  label: string;
}

const ButtonClose = forwardRef(({ label, ...props }: ButtonCloseProps, ref) => {
  return (
    <Tooltip label={label}>
      <Button
        leftIcon={<FiX />}
        variant="solid"
        size="sm"
        aria-label={label}
        className="theme-font"
        {...props}
      >
        {label}
      </Button>
    </Tooltip>
  );
});

export default ButtonClose;
