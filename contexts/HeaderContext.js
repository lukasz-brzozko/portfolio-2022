import { createContext } from "react";

export const HeaderContext = createContext({
  activeSectionID: 0,
  setActiveSectionID: (id) => {},
});
