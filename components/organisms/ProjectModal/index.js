import block from "bem-css-modules";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useContext, useEffect, useState } from "react";

import { ProjectContext } from "../../../contexts/ProjectContext";
import { ProjectModalContext } from "../../../contexts/ProjectModalContext";
import { useLockBodyScroll } from "../../../hooks/useLockBodyScroll";
import ProjectModalBanner from "./ProjectModalBanner";
import ProjectModalCloseArea from "./ProjectModalCloseArea";
import ProjectModalInfo from "./ProjectModalInfo";

import styles from "./ProjectModal.module.scss";

const b = block(styles);

const threshold = [];

for (let i = 0; i < 1.01; i += 0.01) {
  threshold.push(i);
}
function ProjectModal({ projects }) {
  const [modalRefEl, setModalRefEl] = useState(null);
  const [closeAreaRefEl, setCloseAreaRefEl] = useState(null);
  const [highlightedProject, setHighlightedProject] = useState(null);

  const { selectedProjectID, setSelectedProjectID } =
    useContext(ProjectContext);

  // ! Dokończyć i zrefaktorować

  const closeModal = useCallback(() => {
    if (modalRefEl) {
      modalRefEl.style.opacity = 0;

      setTimeout(() => {
        setSelectedProjectID(null);
      }, 300);
    }
  }, [setSelectedProjectID, modalRefEl]);

  useEffect(() => {
    if (selectedProjectID && closeAreaRefEl && modalRefEl) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              closeAreaRefEl.style.setProperty(
                "--progress",
                entry.intersectionRatio
              );

              if (entry.intersectionRatio > 0.9) {
                closeModal();
              }
            } else {
              closeAreaRefEl.style.setProperty("--progress", 0);
            }
          });
        },
        {
          threshold,
        }
      );

      observer.observe(closeAreaRefEl);

      return () => observer.unobserve(closeAreaRefEl);
    }
  }, [
    selectedProjectID,
    setSelectedProjectID,
    closeModal,
    closeAreaRefEl,
    modalRefEl,
  ]);

  // Toggle body scroll
  useLockBodyScroll();

  useEffect(() => {
    const chosenProject = projects.find(
      (project) => project.id === selectedProjectID
    );

    setHighlightedProject(chosenProject);
  }, [selectedProjectID, projects]);

  return (
    <ProjectModalContext.Provider
      value={{
        closeModal,
      }}
    >
      <AnimatePresence mode="wait">
        {highlightedProject ? (
          <motion.div
            ref={(el) => {
              setModalRefEl(el);
            }}
            key={selectedProjectID}
            layoutId={selectedProjectID}
            className={`${b()} ui-transition`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.1 } }}
            exit={{ opacity: 0 }}
          >
            {/* Banner */}
            <ProjectModalBanner project={highlightedProject} />

            {/* Description */}
            <ProjectModalInfo project={highlightedProject} />

            {/* Close area */}
            <ProjectModalCloseArea setCloseAreaRefEl={setCloseAreaRefEl} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </ProjectModalContext.Provider>
  );
}

export default ProjectModal;
