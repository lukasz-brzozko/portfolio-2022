import block from "bem-css-modules";
import { motion } from "framer-motion";
import { useContext } from "react";

import { ProjectContext } from "../../../contexts/ProjectContext";
import Button from "../Button";
import IMG from "../IMG";

import styles from "./ProjectCard.module.scss";

const b = block(styles);

function ProjectCard({ data = null, onClick }) {
  const { setSelectedProjectID } = useContext(ProjectContext);

  const { id, attributes } = data;
  const { title, img } = attributes;

  const TRANSITION = {
    duration: 0.25,
  };

  const IMG_INNER_VARIANTS = {
    initial: { scale: 1.13 },
    hover: { scale: 1 },
  };

  const IMG_WRAPPER_VARIANTS = {
    hover: { scale: 1.08 },
  };

  const IMG_OVERLAY = {
    initial: { opacity: 0 },
    hover: { opacity: 0.85 },
  };

  return (
    <motion.div
      className={`${b()} ui-relative`}
      onClick={() => setSelectedProjectID(id)}
      whileHover="hover"
      whileTap="hover"
      initial="initial"
    >
      <motion.div
        className={`${b("img-wrapper")} ui-relative ui-overflow`}
        variants={IMG_WRAPPER_VARIANTS}
        transition={TRANSITION}
      >
        <motion.div
          className={`${b("img-inner")}`}
          variants={IMG_INNER_VARIANTS}
          transition={TRANSITION}
        >
          <IMG image={img} />
        </motion.div>
        <motion.div
          className={`${b("img-overlay")}`}
          variants={IMG_OVERLAY}
          transition={TRANSITION}
        ></motion.div>
      </motion.div>

      <motion.div className={`${b("text-block")} ui-relative`}>
        <motion.h4 className={`${b("title")} t-typo-h4 t-center`}>
          {title}
        </motion.h4>
        <Button>Zobacz więcej</Button>
      </motion.div>
    </motion.div>
  );
}

export default ProjectCard;
