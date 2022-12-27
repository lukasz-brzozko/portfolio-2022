import block from "bem-css-modules";

import Badge from "../../../atoms/Badge";
import Button from "../../../atoms/Button";
import Grid from "../../../layout/Grid";
import Inner from "../../../layout/Inner";
import Gallery from "../../../molecules/Gallery";
import { BUTTON_PROP_VARIANTS, BUTTON_TYPES } from "../../../atoms/Button";

import styles from "./ProjectModalInfo.module.scss";

const { alt, dark } = BUTTON_PROP_VARIANTS;
const { link } = BUTTON_TYPES;

const b = block(styles);

function ProjectModalInfo({ project }) {
  const { badges, gallery, info, showcaseLink, repoLink } = project?.attributes;

  const badgesList = badges.map(({ id, text }) => (
    <li key={id}>
      <Badge>{text}</Badge>
    </li>
  ));

  const showcaseBtn = showcaseLink ? (
    <Button variant={alt} type={link} url={showcaseLink}>
      Zobacz projekt
    </Button>
  ) : null;
  const repoBtn = repoLink ? (
    <Button variant={dark} type={link} url={repoLink}>
      GitHub
    </Button>
  ) : null;

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
            <div>
              {badges && (
                <ul className={`${b("badges")} ui-list`}>{badgesList}</ul>
              )}
            </div>

            <div className={`${b("links")}`}>
              {showcaseBtn}
              {repoBtn}
            </div>
          </div>
        </Grid>
      </Inner>
    </div>
  );
}

export default ProjectModalInfo;
