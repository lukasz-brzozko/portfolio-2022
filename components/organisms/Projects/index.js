import block from "bem-css-modules";
import { AnimatePresence, motion } from "framer-motion";
// import { VARIANTS, VARIANTS_NAMES } from "../../../constants/animations";
// import IMG from "../../atoms/IMG";
import ProjectCard from "../../atoms/ProjectCard";
import Grid from "../../layout/Grid";
import Inner from "../../layout/Inner";
import TextBlock from "../../molecules/TextBlock";

import { useEffect, useState } from "react";
import Portal from "../../molecules/Portal";
import ProjectModal from "../../molecules/ProjectModal";
import styles from "./Projects.module.scss";
import { ProjectContext } from "../../../contexts/ProjectContext";

const b = block(styles);

function Projects({ data }) {
  const { textBlock, projects } = data;
  const { data: projectsList } = projects;

  const [selectedProjectID, setSelectedProjectID] = useState(null);

  useEffect(() => {
    console.log(selectedProjectID);
  }, [selectedProjectID]);

  const projectsItems = projectsList.map((project) => {
    const { id } = project;

    return (
      <li key={id} className={`${b("project")}`}>
        <ProjectCard data={project} onClick={setSelectedProjectID} />
      </li>
    );
  });

  return (
    <ProjectContext.Provider
      value={{
        selectedProjectID,
        setSelectedProjectID,
      }}
    >
      <section className={`${b()} ui-bg--bg-primary ui-section-padding`}>
        <Inner>
          <Grid>
            {/* Text block */}
            <div className={`${b("text-block-wrapper")} t-center`}>
              <TextBlock data={textBlock} />
            </div>
          </Grid>

          {/* Projects list */}
          <ul className={`ui-list ui-grid`}>{projectsItems}</ul>
        </Inner>

        {/* Project modal */}
        <Portal>
          <ProjectModal />
        </Portal>
      </section>
    </ProjectContext.Provider>
  );
}

export default Projects;