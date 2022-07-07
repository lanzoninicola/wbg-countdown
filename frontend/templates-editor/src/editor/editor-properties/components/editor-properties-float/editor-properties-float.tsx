import { Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdLabelOutline, MdOutlineTimer10, MdTitle } from "react-icons/md";
import { TbSeparatorVertical } from "react-icons/tb";

import DialogWrapper from "../../primitives/dialog-wrapper/dialog-wrapper";
import DialogWrapperHeader from "../../primitives/dialog-wrapper/dialog-wrapper-header/dialog-wrapper-header";
import DigitLabelPropertiesGroup from "../common/properties-group/digit-label-properties-group/digit-label-properties-group";
import DigitsPropertiesGroup from "../common/properties-group/digits-properties-group/digits-properties-group";
import SeparatorPropertiesGroup from "../common/properties-group/separator-properties-group/separator-properties-group";
import TitlePropertiesGroup from "../common/properties-group/title-properties-group/title-properties-group";
import PropertiesBar from "./components/properties-bar/properties-bar";
import { PropertyBarItem } from "./types";

export default function EditorPropertiesFloat() {
  const { t } = useTranslation();
  const [itemSelected, setItemSelected] = useState<PropertyBarItem | null>(
    null
  );

  const items = [
    {
      label: t("editor.propertiesBar.title"),
      icon: <MdTitle />,
      ref: useRef(null),
      title: t("editor.propertiesGroup.title.groupTitle"),
      component: <TitlePropertiesGroup showGroupTitle={false} pb={5} />,
    },
    {
      label: t("editor.propertiesBar.timer"),
      icon: <MdOutlineTimer10 />,
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
      icon: <TbSeparatorVertical />,
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
