import { useEffect, useState, useContext } from "react";
import { createPortal } from "react-dom";

import { ProjectContext } from "../../../contexts/ProjectContext";

function Portal({ children }) {
  const { selectedProjectID } = useContext(ProjectContext);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (selectedProjectID) {
      setMounted(true);
    }

    return () => setMounted(false);
  }, [selectedProjectID]);

  return mounted
    ? createPortal(children, document.querySelector("#portal"))
    : null;
}

export default Portal;
