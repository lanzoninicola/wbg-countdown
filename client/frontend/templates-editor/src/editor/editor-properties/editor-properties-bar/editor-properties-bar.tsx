import { Text } from "@chakra-ui/react";
import { BsLayoutWtf } from "@react-icons/all-files/bs/BsLayoutWtf";
import { MdLabelOutline } from "@react-icons/all-files/md/MdLabelOutline";
import { MdTimer10 } from "@react-icons/all-files/md/MdTimer10";
import { MdTitle } from "@react-icons/all-files/md/MdTitle";
import { MdViewList } from "@react-icons/all-files/md/MdViewList";
import { HiTemplate } from "@react-icons/all-files/hi/HiTemplate";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import Countdowns from "../../../countdowns/components/countdowns/countdowns";
import DialogWrapper from "../components/primitives/dialog-wrapper/dialog-wrapper";
import DialogWrapperHeader from "../components/primitives/dialog-wrapper/dialog-wrapper-header/dialog-wrapper-header";
import UnitLabelPropertiesGroup from "../properties/unit-label-properties-group/unit-label-properties-group";
import UnitNumberPropertiesGroup from "../properties/unit-number-properies-group/unit-number-properties-group";
import LayoutPropertiesGroup from "../properties/layout-properties-group/layout-properties-group";
import SeparatorPropertiesGroup from "../properties/separator-properties-group/separator-properties-group";
import TemplatesPropertiesGroup from "../properties/templates-properties-group/templates-properties-group";
import TitlePropertiesGroup from "../properties/title-properties-group/title-properties-group";
import PropertiesBar from "./components/properties-bar/properties-bar";
import VerticalSeparatorIcon from "./components/vertical-separator-icon/vertical-separator-icon";
import { PropertyBarItem } from "./types";

export default function EditorPropertiesBar() {
  const { t } = useTranslation();
  const [itemSelected, setItemSelected] = useState<PropertyBarItem | null>(
    null
  );

  const items = [
    {
      label: t("editor.propertiesBar.list"),
      icon: <MdViewList />,
      ref: useRef(null),
      title: t("editor.propertiesGroup.list.groupTitle"),
      component: <Countdowns />,
    },
    {
      label: t("editor.propertiesBar.layout"),
      icon: <BsLayoutWtf />,
      ref: useRef(null),
      title: t("editor.propertiesGroup.layout.groupTitle"),
      component: <LayoutPropertiesGroup showGroupTitle={false} pb={5} />,
    },
    {
      label: t("editor.propertiesBar.templates"),
      icon: <HiTemplate />,
      ref: useRef(null),
      title: t("editor.propertiesGroup.templates.groupTitle"),
      component: <TemplatesPropertiesGroup showGroupTitle={false} pb={5} />,
    },
    {
      label: t("editor.propertiesBar.title"),
      icon: <MdTitle />,
      ref: useRef(null),
      title: t("editor.propertiesGroup.title.groupTitle"),
      component: <TitlePropertiesGroup showGroupTitle={false} pb={5} />,
    },
    {
      label: t("editor.propertiesBar.timer"),
      icon: <MdTimer10 />,
      ref: useRef(null),
      title: t("editor.propertiesGroup.unitNumber.groupTitle"),
      component: <UnitNumberPropertiesGroup showGroupTitle={false} pb={5} />,
    },
    {
      label: t("editor.propertiesBar.labels"),
      icon: <MdLabelOutline />,
      ref: useRef(null),
      title: t("editor.propertiesGroup.unitLabel.groupTitle"),
      component: <UnitLabelPropertiesGroup showGroupTitle={false} pb={5} />,
    },
    {
      label: t("editor.propertiesGroup.separator.groupTitle"),
      icon: <VerticalSeparatorIcon />,
      ref: useRef(null),
      title: t("editor.propertiesGroup.separator.groupTitle"),
      component: <SeparatorPropertiesGroup showGroupTitle={false} pb={5} />,
    },
  ];

  return (
    <>
      <PropertiesBar items={items} onItemSelected={setItemSelected} />
      {itemSelected && (
        <DialogWrapper
          callerRef={itemSelected?.ref}
          isOpen={itemSelected !== null}
          showCloseButton={false}
          offset={{
            left: 100,
            top: 15,
          }}
          borderTopColor={"blue.500"}
          minW={"370px"}
        >
          <DialogWrapperHeader onClose={() => setItemSelected(null)}>
            <Text as="h3" className="theme-font" fontWeight={600}>
              {itemSelected?.title}
            </Text>
          </DialogWrapperHeader>
          {itemSelected?.component}
        </DialogWrapper>
      )}
    </>
  );
}
