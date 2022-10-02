import { Grid } from "@chakra-ui/react";
import { useThemeLayoutWithDispatcher } from "../../../../../../countdown-state-management";
import PropertyItem from "../../../../components/layout/property-item/property-item";
import { TEMPLATES } from "../../constants/templates";
import TemplateView from "../template-view/template-view";

export default function TemplatesSelector() {
  const { themeDispatcher } = useThemeLayoutWithDispatcher();

  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" templateRows="" gap={4}>
        {Object.values(TEMPLATES).map((t) => {
          return (
            <PropertyItem
              w={"100%"}
              h={"100%"}
              key={t.id}
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
          );
        })}
      </Grid>
    </>
  );
}
