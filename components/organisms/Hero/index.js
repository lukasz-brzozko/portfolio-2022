import block from "bem-css-modules";
import { motion, useScroll } from "framer-motion";
import { useContext, useState } from "react";

import { VARIANTS, VARIANTS_NAMES } from "../../../constants/animations";
import { VIEWPORT } from "../../../constants/section";
import { HeaderContext } from "../../../contexts/HeaderContext";
import IMG from "../../atoms/IMG";
import Overlay from "../../atoms/Overlay";
import Grid from "../../layout/Grid";
import Inner from "../../layout/Inner";

import styles from "./Hero.module.scss";

const b = block(styles);

const CONSTANTS = {
  scrollTranslateRatio: 0.1,
};

function Hero({ data }) {
  const {
    overlay,
    imgDesktop,
    imgMobile,
    titleLineOne,
    titleLineTwo,
    titleLineThree,
    subtitle,
  } = data;

  const [imgYPosition, setImgYPosition] = useState(0);

  const { setActiveSectionID } = useContext(HeaderContext);

  const { scrollY } = useScroll();

  const handleViewportEnter = (e) => {
    scrollY.onChange((latest) => {
      const transition = `${latest * CONSTANTS.scrollTranslateRatio}px`;

      setImgYPosition(transition);
    });
  };

  const handleViewportLeave = (e) => {
    scrollY.clearListeners();
  };

  return (
    <motion.section
      className={b()}
      onViewportEnter={() => setActiveSectionID(0)}
      viewport={VIEWPORT}
    >
      <motion.div
        onViewportEnter={handleViewportEnter}
        onViewportLeave={handleViewportLeave}
        className={b("img-container")}
        style={{ "--position-y": imgYPosition }}
      >
        {/* Desktop IMG */}
        <IMG
          className={`${b("img", { desktop: true })}`}
          image={imgDesktop}
          priority={true}
        />

        {/* Mobile IMG */}
        <IMG
          className={`${b("img", { mobile: true })}`}
          image={imgMobile}
          priority={true}
        />
      </motion.div>

      {/* Overlay */}
      <Overlay data={overlay} />

      <Inner className="ui-relative">
        <Grid>
          <div className={b("text-block")}>
            {/* Subtitle */}
            <motion.div
              custom={0}
              initial={VARIANTS_NAMES.hidden}
              animate={VARIANTS_NAMES.visible}
              variants={VARIANTS}
              className={`${b(
                "subtitle"
              )} t-typo-caption ui-block ui-color--t-secondary`}
            >
              {subtitle}
            </motion.div>

            {/* Title */}
            <motion.div
              variants={VARIANTS}
              initial={VARIANTS_NAMES.hidden}
              animate={VARIANTS_NAMES.visible}
              className={`${b("title")} t-typo-h1`}
            >
              <motion.span custom={1} variants={VARIANTS} className="ui-block">
                {titleLineOne}
              </motion.span>
              <motion.h1
                custom={2}
                variants={VARIANTS}
                className="ui-color--secondary"
              >
                {titleLineTwo}
              </motion.h1>
              <motion.h2 custom={3} variants={VARIANTS} className="t-typo-h2">
                {titleLineThree}
              </motion.h2>
            </motion.div>
          </div>
        </Grid>
      </Inner>
    </motion.section>
  );
}

export default Hero;
