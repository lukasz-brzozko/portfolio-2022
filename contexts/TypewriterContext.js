import { createContext } from "react";

export const TypewriterContext = createContext({
  activeBarIndex: 0,
  barStep: 0,
  setActiveBarIndex: (index) => {},
  setBarStep: (step) => {},
});
