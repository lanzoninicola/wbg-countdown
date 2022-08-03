export interface ThemeGlobalContextData {
  containerSize: ElementSize;
}

export interface ThemeGlobalContextSetter {
  setContainerSize: (size: ElementSize) => void;
}

export interface ElementSize {
  width: number;
  height: number;
}
