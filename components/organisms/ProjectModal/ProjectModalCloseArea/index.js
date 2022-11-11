import { motion } from "framer-motion";
import { forwardRef } from "react";
import block from "bem-css-modules";

import styles from "./ProjectModalCloseArea.module.scss";

const b = block(styles);

const ProjectModalCloseArea = forwardRef(({ project }, ref) => {
  return (
    <div ref={ref} className={`${b()} ui-relative t-typo-h3`}>
      Powrót do strony
    </div>
  );
});

ProjectModalCloseArea.displayName = "ProjectModalCloseArea";

export default ProjectModalCloseArea;
