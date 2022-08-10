import { Box } from "@chakra-ui/react";

export default function ModalImage({ image }: { image: string | null }) {
  return (
    <Box
      className="onboarding-image"
      bgImage={`url(${image})`}
      bgSize={"250px"}
      w="100%"
      h="400px"
      bgRepeat={["no-repeat"]}
      bgPosition={["center"]}
    ></Box>
  );
}
