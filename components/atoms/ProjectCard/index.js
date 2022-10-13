import block from "bem-css-modules";
import { LayoutGroup, motion } from "framer-motion";
import { useContext } from "react";

import IMG from "../IMG";
import { ProjectContext } from "../../../contexts/ProjectContext";
import Button from "../Button";

import styles from "./ProjectCard.module.scss";

const b = block(styles);

function ProjectCard({ data = null, onClick }) {
  const { setSelectedProjectID } = useContext(ProjectContext);

  const { id, attributes } = data;
  const { title, img } = attributes;

  return (
    <motion.div
      className={`${b()} ui-relative`}
      onClick={() => setSelectedProjectID(id)}
    >
      <motion.div className={`${b("img-wrapper")} ui-relative`}>
        <IMG image={img} />
      </motion.div>

      <motion.div className={`${b("text-block")} ui-relative`}>
        <motion.h4 className={`${b("title")} t-typo-h4`}>{title}</motion.h4>
        <Button>Zobacz więcej</Button>
      </motion.div>
    </motion.div>
  );
}

export default ProjectCard;
