import block from "bem-css-modules";
import { useCallback, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

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
      damping: 12.5,
      mass: 0.75,
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

  const handleScroll = useCallback((e) => {
    const scrollPosition = window.scrollY;
    const imgTransition = window.scrollY * CONSTANTS.scrollTranslateRatio;

    setImgYPosition(`${imgTransition}px`);
  }, []);

  const { ref, entry } = useInView({
    onChange: (inView) => {
      if (inView) {
        return window.addEventListener("scroll", handleScroll, {
          passive: true,
        });
      }

      window.removeEventListener("scroll", handleScroll);
    },
  });

  return (
    <section className={b()} ref={ref}>
      <div
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
      </div>

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
