import {
  forwardRef,
  IconButton,
  IconButtonProps,
  Tooltip,
} from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";

interface ButtonEditProps extends Omit<IconButtonProps, "aria-label"> {
  label: string;
}

const ButtonEdit = forwardRef(({ label, ...props }: ButtonEditProps, ref) => {
  return (
    <Tooltip label={label}>
      <IconButton
        ref={ref}
        {...props}
        icon={<FiEdit />}
        isRound={true}
        size="sm"
        aria-label={label}
      />
    </Tooltip>
  );
});

export default ButtonEdit;
