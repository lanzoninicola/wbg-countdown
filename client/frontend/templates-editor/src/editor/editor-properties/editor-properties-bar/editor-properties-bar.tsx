import { Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdLabelOutline } from "@react-icons/all-files/md/MdLabelOutline";
import { MdTimer10 } from "@react-icons/all-files/md/MdTimer10";
import { MdTitle } from "@react-icons/all-files/md/MdTitle";
import { MdViewList } from "@react-icons/all-files/md/MdViewList";
import { BsLayoutWtf } from "@react-icons/all-files/bs/BsLayoutWtf";

import DialogWrapper from "../components/primitives/dialog-wrapper/dialog-wrapper";
import DialogWrapperHeader from "../components/primitives/dialog-wrapper/dialog-wrapper-header/dialog-wrapper-header";
import DigitLabelPropertiesGroup from "../properties/digit-label-properties-group/digit-label-properties-group";
import DigitsPropertiesGroup from "../properties/digits-properties-group/digits-properties-group";
import SeparatorPropertiesGroup from "../properties/separator-properties-group/separator-properties-group";
import TitlePropertiesGroup from "../properties/title-properties-group/title-properties-group";
import PropertiesBar from "./components/properties-bar/properties-bar";
import { PropertyBarItem } from "./types";
import VerticalSeparatorIcon from "./components/vertical-separator-icon/vertical-separator-icon";
import LayoutPicker from "../properties/layout-picker/layout-picker";
import Countdowns from "../../../countdowns/components/countdowns/countdowns";

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
      component: <LayoutPicker />,
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
      title: t("editor.propertiesGroup.digits.groupTitle"),
      component: <DigitsPropertiesGroup showGroupTitle={false} pb={5} />,
    },
    {
      label: t("editor.propertiesBar.labels"),
      icon: <MdLabelOutline />,
      ref: useRef(null),
      title: t("editor.propertiesGroup.digitLabel.groupTitle"),
      component: <DigitLabelPropertiesGroup showGroupTitle={false} pb={5} />,
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
          minW={"350px"}
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
