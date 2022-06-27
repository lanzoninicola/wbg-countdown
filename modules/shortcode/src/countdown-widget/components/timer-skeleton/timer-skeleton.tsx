import { Flex, Grid, Skeleton, Text } from "@chakra-ui/react";

export default function TimerSkeleton() {
  return (
    <Grid
      gridTemplateAreas='"title title title title title title title"
    "days sep1 minutes sep2 hours sep3 seconds"
    "lab1 lab2 lab3 lab4 lab5 lab6 lab7"
    '
      rowGap={2}
      columnGap={2}
      w="350px"
      p={1}
    >
      <Skeleton w="100%" h="30px" gridArea={"title"} borderRadius={"md"} />
      <SkeletonUnit gridArea={"days"} />
      <SkeletonLabel gridArea={"lab1"} />
      <SkeletonSeparator gridArea={"sep1"} />

      <SkeletonUnit gridArea={"minutes"} />
      <SkeletonLabel gridArea={"lab3"} />
      <SkeletonSeparator gridArea={"sep2"} />
      <SkeletonUnit gridArea={"hours"} />
      <SkeletonLabel gridArea={"lab5"} />
      <SkeletonSeparator gridArea={"sep3"} />
      <SkeletonUnit gridArea={"seconds"} />
      <SkeletonLabel gridArea={"lab7"} />
    </Grid>
  );
}

function SkeletonUnit({ ...props }) {
  return (
    <Skeleton
      w="70px"
      h="50px"
      gridArea={"seconds"}
      borderRadius={"md"}
      {...props}
    />
  );
}

function SkeletonLabel({ ...props }) {
  return (
    <Skeleton
      w="70px"
      h="20px"
      gridArea={"seconds"}
      borderRadius={"md"}
      {...props}
    />
  );
}

function SkeletonSeparator({ ...props }) {
  return (
    <Flex h="100%" justifyContent="center" alignItems={"center"} {...props}>
      <span>:</span>
    </Flex>
  );
}
