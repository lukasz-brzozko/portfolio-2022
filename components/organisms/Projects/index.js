import block from "bem-css-modules";
// import { VARIANTS, VARIANTS_NAMES } from "../../../constants/animations";
// import IMG from "../../atoms/IMG";
import Grid from "../../layout/Grid";
import Inner from "../../layout/Inner";
import TextBlock from "../../molecules/TextBlock";

import styles from "./Projects.module.scss";

const b = block(styles);

function Projects({ data }) {
  console.log(data);

  const { textBlock } = data;

  return (
    <section className={`${b()} ui-bg--bg-primary ui-section-padding`}>
      <Inner>
        <Grid>
          {/* Text block */}
          <div className={`${b("text-block-wrapper")} t-center`}>
            <TextBlock data={textBlock} />
          </div>
        </Grid>
      </Inner>
    </section>
  );
}

export default Projects;
