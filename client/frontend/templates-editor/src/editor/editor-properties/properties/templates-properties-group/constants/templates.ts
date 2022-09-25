import { Templates } from "../types";

export const TEMPLATES_BASE_ASSET_PATH =
  "/src/editor/editor-properties/properties/templates-properties-group/assets/";

export const TEMPLATES: Templates = {
  monospace: {
    name: "Monospace",
    style: `div[data-element="countdown-wrapper"] {  display: -webkit-flex;  display: -ms-flexbox;  display: flex;  -webkit-flex-direction: column;  -ms-flex-direction: column;  flex-direction: column;  background-color: blueviolet;  max-width: 375px;  gap: 0.75rem;  font-family: monospace;}h2[data-element="countdown-title"] {  text-align: center;  color: white;  font-weight: bold;}div[data-element="countdown-units"] {  display: -ms-grid;  display: grid;  grid-template-columns: repeat(4, 1fr);  gap: 0.5rem;}div[data-element="countdown-unit"] {  display: -webkit-flex;  display: -ms-flexbox;  display: flex;  -webkit-flex-direction: column;  -ms-flex-direction: column;  gap: 0.25rem;  flex-direction: column;}span[data-element="countdown-unit-number"] {  background-color: white;  padding: 1rem;  border-radius: 10px;  text-align: center;  font-size: 1.15rem;}span[data-element="countdown-unit-label"] {  text-align: center;  color: white;}span[data-element="countdown-unit-separator"] {  display: none;}`,
    image: "monospace",
  },
};
