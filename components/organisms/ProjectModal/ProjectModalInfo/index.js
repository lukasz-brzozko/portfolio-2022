import block from "bem-css-modules";

import Grid from "../../../layout/Grid";
import Inner from "../../../layout/Inner";

import styles from "./ProjectModalInfo.module.scss";

const b = block(styles);

function ProjectModalInfo({ project }) {
  const { info } = project?.attributes;

  return (
    <div className={`${b()} ui-relative ui-bg--bg-primary`}>
      <Inner>
        <Grid>
          <div dangerouslySetInnerHTML={{ __html: info }}></div>
        </Grid>
      </Inner>
    </div>
  );
}

export default ProjectModalInfo;
