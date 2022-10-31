import block from "bem-css-modules";
import Badge from "../../../atoms/Badge";
import Button from "../../../atoms/Button";

import Grid from "../../../layout/Grid";
import Inner from "../../../layout/Inner";
import Gallery from "../../../molecules/Gallery";

import styles from "./ProjectModalInfo.module.scss";

const b = block(styles);

function ProjectModalInfo({ project }) {
  const { badges, gallery, info, showcaseLink, repoLink } = project?.attributes;

  console.log(project);

  const badgesList = badges.map(({ id, text }) => (
    <li key={id}>
      <Badge>{text}</Badge>
    </li>
  ));

  const showcaseBtn = showcaseLink ? <Button>Zobacz link</Button> : null;

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
            {badges && (
              <ul className={`${b("badges")} ui-list`}>{badgesList}</ul>
            )}
          </div>

          {showcaseBtn}
        </Grid>
      </Inner>
    </div>
  );
}

export default ProjectModalInfo;
