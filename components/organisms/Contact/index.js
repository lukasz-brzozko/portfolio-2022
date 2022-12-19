import block from "bem-css-modules";
import { motion } from "framer-motion";
import { useRef } from "react";

import { VARIANTS, VARIANTS_NAMES } from "../../../constants/animations";
import IMG from "../../atoms/IMG";
import Grid from "../../layout/Grid";
import Inner from "../../layout/Inner";
import TextBlock from "../../molecules/TextBlock";
import Typewriter from "../../svgs/Typewriter";

import styles from "./Contact.module.scss";

const b = block(styles);

function Contact({ data = null }) {
  const { textBlock, img, email } = data;

  const innerRef = useRef(null);

  const IMGElement =
    img.data !== null ? (
      <IMG className={`${b("img")}`} image={img} layout="responsive" />
    ) : (
      <Typewriter />
    );

  return (
    <section
      id="contact"
      className={`${b()} ui-bg--bg-secondary ui-section-padding`}
    >
      <Inner ref={innerRef}>
        <Grid>
          {/* Text block */}
          <div className={b("text-block-wrapper")}>
            <TextBlock data={textBlock} />

            <motion.a
              className={`${b("mail")} t-typo-h3`}
              initial={VARIANTS_NAMES.hidden}
              whileInView={VARIANTS_NAMES.visible}
              variants={VARIANTS}
              custom={2}
              viewport={{ once: false, margin: "0px 0px -20% 0px" }}
              href={`mailto:${email}`}
            >
              {email}
            </motion.a>
          </div>

          {/* IMG */}
          <div
            className={`${b("img-wrapper", {
              "custom-img": !!img.data,
            })} ui-relative`}
          >
            {IMGElement}
          </div>
        </Grid>
      </Inner>
    </section>
  );
}

export default Contact;
