import { AnimatePresence, motion } from "framer-motion";
import block from "bem-css-modules";
// import { VARIANTS, VARIANTS_NAMES } from "../../../constants/animations";
// import IMG from "../../atoms/IMG";
import Grid from "../../layout/Grid";
import Inner from "../../layout/Inner";
import TextBlock from "../../molecules/TextBlock";
import ProjectCard from "../../atoms/ProjectCard";

import styles from "./Projects.module.scss";
import { useState } from "react";

const b = block(styles);

function Projects({ data }) {
  const { textBlock, projects } = data;
  const { data: projectsList } = projects;

  const projectsItems = projectsList.map((project) => {
    const { id } = project;

    return (
      <li key={id} className={`${b("project")}`}>
        <ProjectCard data={project} />
      </li>
    );
  });

  return (
    <section className={`${b()} ui-bg--bg-primary ui-section-padding`}>
      <Inner>
        <Grid>
          {/* Text block */}
          <div className={`${b("text-block-wrapper")} t-center`}>
            <TextBlock data={textBlock} />
          </div>
        </Grid>
        <ul className={`ui-list ui-grid`}>{projectsItems}</ul>
      </Inner>
    </section>
  );
}

export default Projects;
