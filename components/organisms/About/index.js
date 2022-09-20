import block from "bem-css-modules";
import { useRef } from "react";

import IMG from "../../atoms/IMG";
import Grid from "../../layout/Grid";
import Inner from "../../layout/Inner";
import TextBlock from "../../molecules/TextBlock";
import Developer from "../../svgs/Developer";
// import DeveloperSVG from "../../../images/svg/developer.svg";

import styles from "./About.module.scss";

const b = block(styles);

function About({ data = null }) {
  if (data === null) return;

  const { textBlock, tabs, img } = data;

  const IMGElement =
    img.data !== null ? (
      <IMG className={`${b("img")}`} image={img} layout="responsive" />
    ) : (
      // <DeveloperSVG className={`${b("img-placeholder")}`} />
      <Developer />
    );

  return (
    <section className={`ui-bg--bg-secondary ui-section-padding`}>
      <Inner>
        <Grid>
          {/* IMG */}
          <div className={`${b("img-wrapper")} ui-relative`}>{IMGElement}</div>

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
