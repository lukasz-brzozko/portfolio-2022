import React from "react";
import block from "bem-css-modules";

import IMG from "../IMG";

import styles from "./ProjectCard.module.scss";

const b = block(styles);

function ProjectCard({ data = null }) {
  const { id, attributes } = data;
  const { title, img } = attributes;

  return (
    <div className={`${b()} ui-relative`}>
      <IMG image={img} />
    </div>
  );
}

export default ProjectCard;
