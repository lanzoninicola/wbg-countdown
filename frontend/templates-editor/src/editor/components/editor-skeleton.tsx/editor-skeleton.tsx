import { VStack, Skeleton, Divider } from "@chakra-ui/react";
import CenterContent from "../../layout/center-content/center-content";
import EditorWrapper from "../../layout/editor-wrapper/editor-wrapper";
import LeftSidebar from "../../layout/left-sidebar/left-sidebar";

export default function EditorSkeleton() {
  return (
    <EditorWrapper>
      <LeftSidebar>
        <VStack spacing={2}>
          <Skeleton w="350px" h="48px" borderRadius={"lg"} />
          <SkeletonProp />
          <SkeletonProp />
          <SkeletonProp />
          <SkeletonProp />
          <Divider marginBlock={".5rem"} />
          <Skeleton w="350px" h="48px" borderRadius={"lg"} />
          <SkeletonProp />
          <SkeletonProp />
          <Divider marginBlock={".5rem"} />
          <SkeletonProp />
          <Divider marginBlock={".5rem"} />
          <SkeletonProp />
          <SkeletonProp />
          <SkeletonProp />
          <Divider marginBlock={".5rem"} />
          <SkeletonProp />
          <SkeletonProp />
          <SkeletonProp />
          <SkeletonProp />
        </VStack>
      </LeftSidebar>
      <CenterContent>
        <Skeleton minH="60px" minW="650px" borderRadius={"lg"} />

        <Skeleton minH="300px" minW="1440px" borderRadius={"lg"} />

        <Skeleton minH="64px" minW="200px" borderRadius={"lg"} />
      </CenterContent>
    </EditorWrapper>
  );
}

function SkeletonProp() {
  return <Skeleton w="350px" h="32px" borderRadius={"lg"} />;
}
