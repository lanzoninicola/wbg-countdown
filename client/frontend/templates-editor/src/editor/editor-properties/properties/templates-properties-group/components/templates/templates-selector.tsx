import PropertyItem from "../../../../components/layout/property-item/property-item";
import { TEMPLATES } from "../../constants/templates";
import TemplateView from "../template-view/template-view";

export default function TemplatesSelector() {
  return (
    <>
      {Object.values(TEMPLATES).map((t) => {
        return (
          <PropertyItem key={t.name}>
            <TemplateView src={t.image} alt={t.name} name={t.name} />
          </PropertyItem>
        );
      })}
    </>
  );
}
