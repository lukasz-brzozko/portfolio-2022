import block from "bem-css-modules";
import { motion } from "framer-motion";

import IMG from "../../../atoms/IMG";
import Inner from "../../../layout/Inner";

import styles from "./ProjectModalBanner.module.scss";

const b = block(styles);

function ProjectModalBanner({ project }) {
  return (
    <div className={`${b()} ui-relative`}>
      <IMG image={project?.attributes.img} />

      <Inner>
        <motion.div className={`${b("title")} t-typo-h1 ui-relative`}>
          {project?.attributes.title}
        </motion.div>
      </Inner>
    </div>
  );
}

export default ProjectModalBanner;
