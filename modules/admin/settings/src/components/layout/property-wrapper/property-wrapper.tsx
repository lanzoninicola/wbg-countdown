import { Grid } from "@chakra-ui/react";

export default function PropertyWrapper({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <Grid
      gridTemplateColumns={"minmax(0,1.25fr) repeat(2,minmax(0,1fr))"}
      gridTemplateRows={"auto"}
      paddingBlock={".25rem"}
      columnGap={".5rem"}
      alignItems={"center"}
      w="100%"
      {...props}
    >
      {children}
    </Grid>
  );
}
