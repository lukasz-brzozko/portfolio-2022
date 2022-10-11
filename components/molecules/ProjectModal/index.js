import block from "bem-css-modules";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useContext } from "react";

import { ProjectContext } from "../../../contexts/ProjectContext";
import IMG from "../../atoms/IMG";

import styles from "./ProjectModal.module.scss";

const b = block(styles);

function ProjectModal({ projects }) {
  const { selectedProjectID, setSelectedProjectID } =
    useContext(ProjectContext);

  const [highlightedProject, setHighlightedProject] = useState(null);

  useEffect(() => {
    const chosenProject = projects.find(
      (project) => project.id === selectedProjectID
    );

    console.log(chosenProject);

    setHighlightedProject(chosenProject);
  }, [selectedProjectID, projects]);

  return (
    <AnimatePresence>
      {highlightedProject && (
        <motion.div
          key={selectedProjectID}
          layoutId={selectedProjectID}
          className={`${b()}`}
          onClick={() => {
            setSelectedProjectID(null);
          }}
        >
          <motion.div>{highlightedProject?.attributes.title}</motion.div>
          <IMG image={highlightedProject?.attributes.img} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;
