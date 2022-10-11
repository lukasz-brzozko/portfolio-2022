import block from "bem-css-modules";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import styles from "./ProjectModal.module.scss";

const b = block(styles);

function ProjectModal() {
  return (
    <AnimatePresence>
      <motion.div className={b()}>ProjectModal</motion.div>
    </AnimatePresence>
  );
}

export default ProjectModal;
