import { Grid } from "@chakra-ui/react";

interface UnitGroupWrapperProps {
  children: React.ReactNode;
}

export default function UnitGroupWrapper({ children }: UnitGroupWrapperProps) {
  return (
    <Grid
      gridTemplateAreas='"digit separator"
    "label empty"'
      alignItems={"center"}
      justifyItems={"center"}
    >
      {children}
    </Grid>
  );
}
