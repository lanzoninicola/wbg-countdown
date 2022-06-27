import { Grid } from "@chakra-ui/react";

interface PropertyWrapperProps {
  children: React.ReactNode;
  columns?: number;
  firstColumnW?: string;
}

export default function PropertyWrapper({
  children,
  columns = 3,
  firstColumnW = "160px",
  ...props
}: PropertyWrapperProps) {
  return (
    <Grid
      gridTemplateColumns={`minmax(0,${firstColumnW}) repeat(${
        columns - 1
      },minmax(0,1fr))`}
      gridTemplateRows={"auto"}
      paddingBlock={".25rem"}
      columnGap={".5rem"}
      alignItems={"center"}
      w="100%"
      position={"relative"}
      {...props}
    >
      {children}
    </Grid>
  );
}
