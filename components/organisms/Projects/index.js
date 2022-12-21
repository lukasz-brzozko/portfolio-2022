import block from "bem-css-modules";
import { motion } from "framer-motion";
import { useContext, useState } from "react";

import { VIEWPORT } from "../../../constants/section";
import { HeaderContext } from "../../../contexts/HeaderContext";
import { ProjectContext } from "../../../contexts/ProjectContext";
import ProjectCard from "../../atoms/ProjectCard";
import Grid from "../../layout/Grid";
import Inner from "../../layout/Inner";
import Portal from "../../molecules/Portal";
import TextBlock from "../../molecules/TextBlock";
import ProjectModal from "../../organisms/ProjectModal";

import styles from "./Projects.module.scss";

const b = block(styles);

function Projects({ data }) {
  const { textBlock, projects } = data;
  const { data: projectsList } = projects;

  const { setActiveSectionID } = useContext(HeaderContext);
  const [selectedProjectID, setSelectedProjectID] = useState(null);

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
      <motion.section
        id="portfolio"
        className={`${b()} ui-bg--bg-primary ui-section-padding`}
        onViewportEnter={() => setActiveSectionID(2)}
        viewport={VIEWPORT}
      >
        <Inner>
          <Grid>
            {/* Text block */}
            <div className={`${b("text-block-wrapper")} t-center`}>
              <TextBlock data={textBlock} />
            </div>
          </Grid>

          {/* Projects list */}
          <ul className={`${b("list")} ui-list ui-grid`}>{projectsItems}</ul>
        </Inner>

        {/* Project modal */}
        <Portal>
          <ProjectModal projects={projectsList} />
        </Portal>
      </motion.section>
    </ProjectContext.Provider>
  );
}

export default Projects;
