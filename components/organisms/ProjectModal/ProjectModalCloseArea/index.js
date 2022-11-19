import { motion } from "framer-motion";
import { forwardRef } from "react";
import block from "bem-css-modules";

import styles from "./ProjectModalCloseArea.module.scss";

const b = block(styles);

function ProjectModalCloseArea({ project, setCloseAreaRefEl }) {
  return (
    <div
      ref={(el) => setCloseAreaRefEl(el)}
      className={`${b()} ui-relative t-typo-h3`}
    >
      Powrót do strony
    </div>
  );
}

export default ProjectModalCloseArea;
