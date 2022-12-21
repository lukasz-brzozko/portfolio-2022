import { createContext } from "react";

export const ProjectContext = createContext({
  selectedProjectID: null,
  setSelectedProjectID: (id) => {},
});
