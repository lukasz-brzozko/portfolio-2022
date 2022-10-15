import block from "bem-css-modules";

import Grid from "../../../layout/Grid";
import Inner from "../../../layout/Inner";
import Gallery from "../../../molecules/Gallery";

import styles from "./ProjectModalInfo.module.scss";

const b = block(styles);

function ProjectModalInfo({ project }) {
  const { badges, gallery, info } = project?.attributes;

  console.log(badges);

  return (
    <div className={`${b()} ui-relative ui-bg--bg-primary`}>
      <Inner>
        <Grid>
          <div className={`${b("col", { "col-1": true })}`}>
            <div
              className={`t-typo-p1`}
              dangerouslySetInnerHTML={{ __html: info }}
            ></div>

            <Gallery data={gallery} />
          </div>

          <div className={`${b("col", { "col-2": true })}`}>
            {badges.map((badge) => badge.text)}
          </div>
        </Grid>
      </Inner>
    </div>
  );
}

export default ProjectModalInfo;
