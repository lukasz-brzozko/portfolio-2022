import block from "bem-css-modules";
import { motion, useScroll } from "framer-motion";
import { useState } from "react";

import IMG from "../../atoms/IMG";
import Overlay from "../../atoms/Overlay";
import Grid from "../../layout/Grid";
import Inner from "../../layout/Inner";

import styles from "./Hero.module.scss";

const b = block(styles);

const CONSTANTS = {
  scrollTranslateRatio: 0.1,
};

const VARIANTS_NAMES = {
  visible: "visible",
  hidden: "hidden",
};

const variants = {
  [VARIANTS_NAMES.visible]: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      staggerChildren: 0.1,
      type: "spring",
      damping: 10,
      mass: 0.7,
      stiffness: 180,
    },
  }),
  [VARIANTS_NAMES.hidden]: { y: 50, opacity: 0 },
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
    <section className={b()}>
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
              variants={variants}
              className={`${b(
                "subtitle"
              )} t-typo-caption ui-block ui-color--t-secondary`}
            >
              {subtitle}
            </motion.div>

            {/* Title */}
            <div className={`${b("title")} t-typo-h1`}>
              <motion.span
                custom={1}
                initial={VARIANTS_NAMES.hidden}
                animate={VARIANTS_NAMES.visible}
                variants={variants}
                className="ui-block"
              >
                {titleLineOne}
              </motion.span>
              <motion.h1
                custom={2}
                initial={VARIANTS_NAMES.hidden}
                animate={VARIANTS_NAMES.visible}
                variants={variants}
                className="ui-color--secondary"
              >
                {titleLineTwo}
              </motion.h1>
              <motion.h2
                custom={3}
                initial={VARIANTS_NAMES.hidden}
                animate={VARIANTS_NAMES.visible}
                variants={variants}
                className="t-typo-h2"
              >
                {titleLineThree}
              </motion.h2>
            </div>
          </div>
        </Grid>
      </Inner>
    </section>
  );
}

export default Hero;
