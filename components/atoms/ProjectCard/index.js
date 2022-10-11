import block from "bem-css-modules";
import { motion } from "framer-motion";
import { useContext } from "react";

import IMG from "../IMG";
import { ProjectContext } from "../../../contexts/ProjectContext";

import styles from "./ProjectCard.module.scss";

const b = block(styles);

function ProjectCard({ data = null, onClick }) {
  const { setSelectedProjectID } = useContext(ProjectContext);

  const { id, attributes } = data;
  const { title, img } = attributes;

  return (
    <motion.div
      layoutId={id}
      className={`${b()} ui-relative`}
      onClick={() => setSelectedProjectID(id)}
    >
      <IMG image={img} />

      <div className={`${b("text-block")} ui-relative`}>
        <h4 className={`${b("title")} t-typo-h4`}>{title}</h4>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
