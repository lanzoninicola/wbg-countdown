import {
  forwardRef,
  IconButton,
  IconButtonProps,
  Tooltip,
} from "@chakra-ui/react";

interface PropertyButtonProps extends Omit<IconButtonProps, "aria-label"> {
  label: string;
  icon: IconButtonProps["icon"];
}

const PropertyButton = forwardRef(
  ({ label, icon, ...props }: PropertyButtonProps, ref) => {
    return (
      <Tooltip label={label} placement="right">
        <IconButton
          ref={ref}
          {...props}
          icon={icon}
          size="lg"
          aria-label={label}
          isRound={true}
          colorScheme="gray"
          boxShadow={"lg"}
        />
      </Tooltip>
    );
  }
);

export default PropertyButton;
