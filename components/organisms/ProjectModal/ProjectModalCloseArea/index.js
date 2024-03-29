import block from "bem-css-modules";
import { useContext } from "react";

import { ProjectModalContext } from "../../../../contexts/ProjectModalContext";

import styles from "./ProjectModalCloseArea.module.scss";

const b = block(styles);

function ProjectModalCloseArea({ project, setCloseAreaRefEl }) {
  const { closeModal } = useContext(ProjectModalContext);

  return (
    <div
      ref={(el) => setCloseAreaRefEl(el)}
      className={`${b()} ui-relative t-typo-h3`}
      style={{ "--progress": 0 }}
      onClick={closeModal}
    >
      <span className={`${b("text")} ui-relative`}>Powrót do strony</span>
    </div>
  );
}

export default ProjectModalCloseArea;
