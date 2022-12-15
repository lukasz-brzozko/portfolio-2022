import block from "bem-css-modules";
import { useRef } from "react";

import IMG from "../../atoms/IMG";
import Grid from "../../layout/Grid";
import Inner from "../../layout/Inner";
import TextBlock from "../../molecules/TextBlock";
import Typewriter from "../../svgs/Typewriter";

import styles from "./Contact.module.scss";

const b = block(styles);

function Contact({ data = null }) {
  const { textBlock, img } = data;

  const innerRef = useRef(null);

  const IMGElement =
    img.data !== null ? (
      <IMG className={`${b("img")}`} image={img} layout="responsive" />
    ) : (
      <Typewriter />
    );

  return (
    <section className={`${b()} ui-bg--bg-secondary ui-section-padding`}>
      <Inner ref={innerRef}>
        <Grid>
          {/* Text block */}
          <div className={b("text-block-wrapper")}>
            <TextBlock data={textBlock} />
          </div>

          {/* IMG */}
          <div className={`${b("img-wrapper")} ui-relative`}>{IMGElement}</div>
        </Grid>
      </Inner>
    </section>
  );
}

export default Contact;
