import block from "bem-css-modules";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";

import { ProjectContext } from "../../../contexts/ProjectContext";
import { useLockBodyScroll } from "../../../hooks/useLockBodyScroll";
import ProjectModalBanner from "./ProjectModalBanner";
import ProjectModalInfo from "./ProjectModalInfo";

import styles from "./ProjectModal.module.scss";

const b = block(styles);

function ProjectModal({ projects }) {
  const { selectedProjectID, setSelectedProjectID } =
    useContext(ProjectContext);

  const [highlightedProject, setHighlightedProject] = useState(null);

  // Toggle body scroll
  useLockBodyScroll();

  useEffect(() => {
    const chosenProject = projects.find(
      (project) => project.id === selectedProjectID
    );

    setHighlightedProject(chosenProject);
  }, [selectedProjectID, projects]);

  return (
    <AnimatePresence>
      {highlightedProject && (
        <motion.div
          key={selectedProjectID}
          layoutId={selectedProjectID}
          className={`${b()}`}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          onClick={() => {
            setSelectedProjectID(null);
          }}
        >
          {/* Banner */}
          <ProjectModalBanner project={highlightedProject} />

          {/* Description */}
          <ProjectModalInfo project={highlightedProject} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;
