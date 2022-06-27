import {
  Button,
  forwardRef,
  IconButton,
  IconButtonProps,
  Tooltip,
} from "@chakra-ui/react";
import { BsWordpress } from "react-icons/bs";

interface ButtonShortcodeProps extends Omit<IconButtonProps, "aria-label"> {
  label: string;
}

const ButtonShortcode = forwardRef(
  ({ label, ...props }: ButtonShortcodeProps, ref) => {
    return (
      <Tooltip label={label}>
        <Button
          ref={ref}
          {...props}
          leftIcon={<BsWordpress />}
          isRound={true}
          size="sm"
          aria-label={label}
        >
          Shortcode
        </Button>
      </Tooltip>
    );
  }
);

export default ButtonShortcode;
