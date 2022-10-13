import block from "bem-css-modules";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useContext } from "react";

import { ProjectContext } from "../../../contexts/ProjectContext";
import Inner from "../../layout/Inner";
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
          <div className={`${b("banner")} ui-relative`}>
            <IMG image={highlightedProject?.attributes.img} />

            <Inner>
              <motion.div className={`${b("title")} t-typo-h1 ui-relative`}>
                {highlightedProject?.attributes.title}
              </motion.div>
            </Inner>
          </div>

          {/* Description */}
          <div className={`${b("desc")} ui-relative ui-bg--bg-primary`}></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;
