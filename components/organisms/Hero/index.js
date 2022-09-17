import block from "bem-css-modules";
import { useCallback, useState } from "react";
import { useInView } from "react-intersection-observer";

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
  const { overlay, imgDesktop, imgMobile, title, subtitle } = data;

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
            <span
              className={`${b(
                "subtitle"
              )} t-typo-caption ui-block ui-color--t-secondary`}
            >
              {subtitle}
            </span>

            {/* Title */}
            <div
              className={`${b("title")} t-typo-h1`}
              dangerouslySetInnerHTML={{ __html: title }}
            ></div>
          </div>
        </Grid>
      </Inner>
    </section>
  );
}

export default Hero;
