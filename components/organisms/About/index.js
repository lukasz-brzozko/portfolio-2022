import block from "bem-css-modules";
import { useRef } from "react";

import IMG from "../../atoms/IMG";
import Grid from "../../layout/Grid";
import Inner from "../../layout/Inner";
import Tabs from "../../molecules/Tabs";
import TextBlock from "../../molecules/TextBlock";
import Developer from "../../svgs/Developer";

import styles from "./About.module.scss";

const b = block(styles);

function About({ data = null }) {
  const { textBlock, tabs, img } = data;

  const innerRef = useRef(null);

  const IMGElement =
    img.data !== null ? (
      <IMG className={`${b("img")}`} image={img} layout="responsive" />
    ) : (
      <Developer />
    );

  return (
    <section
      id="about"
      className={`${b()} ui-bg--bg-secondary ui-section-padding ui-overflow`}
    >
      <Inner ref={innerRef}>
        <Grid>
          {/* IMG */}
          <div className={`${b("img-wrapper")} ui-relative`}>{IMGElement}</div>

          {/* Text block */}
          <div className={b("text-block-wrapper")}>
            <TextBlock data={textBlock} />

            {/* Tabs content */}
            <div className={`${b("tabs-wrapper")}`}>
              <Tabs data={tabs} inner={innerRef} />
            </div>
          </div>
        </Grid>
      </Inner>
    </section>
  );
}

export default About;
