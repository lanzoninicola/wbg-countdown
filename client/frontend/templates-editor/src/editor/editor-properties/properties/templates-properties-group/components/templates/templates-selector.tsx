import { Box, Grid } from "@chakra-ui/react";
import {
  EditorContext,
  useThemeLayoutWithDispatcher,
  useThemeState,
} from "../../../../../../countdown-state-management";
import PropertyItem from "../../../../components/layout/property-item/property-item";
import { TEMPLATES } from "../../constants/templates";
import TemplateView from "../template-view/template-view";

export default function TemplatesSelector() {
  const { themeDispatcher } = useThemeLayoutWithDispatcher();
  const { template } = useThemeState(EditorContext);

  return (
    <>
      <Grid
        templateColumns="repeat(1, auto)"
        rowGap={2}
        justifyContent={"center"}
        data-element={"templates-selector"}
      >
        {Object.values(TEMPLATES).map((t) => {
          return (
            <Box
              key={t.id}
              border={"2px solid"}
              borderColor={t.id === template.id ? "yellow" : "transparent"}
              borderRadius={"5px"}
              w={"150px"}
              h={"150px"}
              p={".5rem"}
              bg={"gray.700"}
            >
              <PropertyItem
                w={"100%"}
                h={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                onClick={() => {
                  themeDispatcher({
                    type: "THEME_TEMPLATE_ON_CHANGE_TEMPLATE",
                    payload: {
                      id: t.id,
                      name: t.name,
                      style: t.style,
                    },
                  });

                  if (t?.fontFamily) {
                    themeDispatcher({
                      type: "THEME_TITLE_ON_CHANGE_FONT_FAMILY",
                      payload: t.fontFamily,
                    });
                    themeDispatcher({
                      type: "THEME_TIMER_ON_CHANGE_UNIT_LABEL_FONT_FAMILY",
                      payload: t.fontFamily,
                    });
                    themeDispatcher({
                      type: "THEME_TIMER_ON_CHANGE_UNIT_NUMBER_FONT_FAMILY",
                      payload: t.fontFamily,
                    });
                    themeDispatcher({
                      type: "THEME_LAYOUT_ON_CHANGE_ORIENTATION",
                      payload: t.orientation,
                    });
                  }
                }}
              >
                <TemplateView
                  src={t.image}
                  alt={t.name}
                  name={t.name}
                  id={t.id}
                />
              </PropertyItem>
            </Box>
          );
        })}
      </Grid>
    </>
  );
}
