import block from "bem-css-modules";

import IMG from "../../atoms/IMG";
import Grid from "../../layout/Grid";
import Inner from "../../layout/Inner";
import TextBlock from "../../molecules/TextBlock";

import styles from "./About.module.scss";

const b = block(styles);

function About({ data = null }) {
  if (data === null) return;

  const { textBlock, tabs, img } = data;

  return (
    <section className={`ui-bg--bg-secondary ui-section-padding`}>
      <Inner>
        <Grid>
          {/* IMG */}
          <div className={`${b("img-wrapper")} ui-relative`}>
            <IMG className={`${b("img")}`} image={img} layout="responsive" />
          </div>

          {/* Text block */}
          <div className={b("text-block-wrapper")}>
            <TextBlock data={textBlock} />
          </div>
        </Grid>
      </Inner>
    </section>
  );
}

export default About;
