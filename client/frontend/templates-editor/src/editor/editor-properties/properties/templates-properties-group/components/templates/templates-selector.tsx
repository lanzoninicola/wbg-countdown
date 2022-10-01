import { Box, Flex, Grid, VStack } from "@chakra-ui/react";
import PropertyItem from "../../../../components/layout/property-item/property-item";
import { TEMPLATES } from "../../constants/templates";
import TemplateView from "../template-view/template-view";

export default function TemplatesSelector() {
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" templateRows="" gap={4}>
        {Object.values(TEMPLATES).map((t) => {
          return (
            <PropertyItem
              key={t.name}
              w={"100%"}
              h={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <TemplateView src={t.image} alt={t.name} name={t.name} />
            </PropertyItem>
          );
        })}
      </Grid>
    </>
  );
}
