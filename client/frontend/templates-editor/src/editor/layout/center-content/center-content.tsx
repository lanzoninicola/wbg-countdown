import { Grid, VStack } from "@chakra-ui/react";

interface CenterContentProps {
  children: React.ReactNode;
}

export default function CenterContent({
  children,
  ...props
}: CenterContentProps) {
  return (
    <Grid
      gridTemplateRows={"auto 1fr"}
      justifyItems="center"
      rowGap={8}
      data-element="center-content"
      bg="gray.50"
      maxH={"100vh"}
      {...props}
    >
      {children}
    </Grid>
  );
}
