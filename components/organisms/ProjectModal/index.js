import block from "bem-css-modules";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useContext, useEffect, useState, useRef } from "react";

import { ProjectContext } from "../../../contexts/ProjectContext";
import { useLockBodyScroll } from "../../../hooks/useLockBodyScroll";
import ProjectModalBanner from "./ProjectModalBanner";
import ProjectModalInfo from "./ProjectModalInfo";
import ProjectModalCloseArea from "./ProjectModalCloseArea";

import styles from "./ProjectModal.module.scss";

const b = block(styles);

function ProjectModal({ projects }) {
  const [modalRefEl, setModalRefEl] = useState(null);
  const [closeAreaRefEl, setCloseAreaRefEl] = useState(null);
  const [highlightedProject, setHighlightedProject] = useState(null);

  // const { scrollYProgress, scrollY } = useScroll({
  //   container: modalRef,
  //   target: closeAreaRef,
  // });

  const threshold = [];

  for (let i = 0; i < 1.01; i += 0.01) {
    threshold.push(i);
  }

  // ! Dokończyć i zrefaktorować

  useEffect(() => {
    if (selectedProjectID && closeAreaRefEl && modalRefEl) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log(entry.intersectionRatio);
              modalRefEl.style.opacity = 1 - entry.intersectionRatio;
              // console.log(entry.intersectionRect.height);
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
  }, [selectedProjectID, closeAreaRefEl, modalRefEl]);

  const { selectedProjectID, setSelectedProjectID } =
    useContext(ProjectContext);

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
      {highlightedProject ? (
        <motion.div
          ref={(el) => {
            setModalRefEl(el);
          }}
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

          {/* Close area */}
          <ProjectModalCloseArea setCloseAreaRefEl={setCloseAreaRefEl} />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default ProjectModal;
