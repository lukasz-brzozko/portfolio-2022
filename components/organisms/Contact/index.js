import block from "bem-css-modules";
import { motion } from "framer-motion";
import { useContext, useRef } from "react";

import { VARIANTS, VARIANTS_NAMES } from "../../../constants/animations";
import { VIEWPORT } from "../../../constants/section";
import { TEXT_VIEWPORT } from "../../../constants/text";
import { HeaderContext } from "../../../contexts/HeaderContext";
import IMG from "../../atoms/IMG";
import Grid from "../../layout/Grid";
import Inner from "../../layout/Inner";
import TextBlock from "../../molecules/TextBlock";
import Typewriter from "../../svgs/Typewriter";

import styles from "./Contact.module.scss";

const b = block(styles);

function Contact({ data = null }) {
  const { textBlock, img, email } = data;

  const { setActiveSectionID } = useContext(HeaderContext);

  const innerRef = useRef(null);

  const IMGElement =
    img.data !== null ? (
      <IMG className={`${b("img")}`} image={img} layout="responsive" />
    ) : (
      <Typewriter />
    );

  return (
    <motion.section
      id="contact"
      className={`${b()} ui-bg--bg-secondary ui-section-padding`}
      onViewportEnter={() => setActiveSectionID(3)}
      viewport={VIEWPORT}
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
              viewport={TEXT_VIEWPORT}
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
    </motion.section>
  );
}

export default Contact;
