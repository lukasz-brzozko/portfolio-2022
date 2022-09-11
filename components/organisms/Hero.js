import block from "bem-css-modules";
import { useEffect, useState } from "react";

import IMG from "../atoms/IMG";
import Overlay from "../atoms/Overlay";

import styles from "../../styles/organisms/Hero.module.scss";

const b = block(styles);

const CONSTANTS = {
  scrollTranslateRatio: 0.2,
};

function Hero({ data }) {
  const { overlay, imgDesktop, imgMobile, title, subtitle } = data;

  const [imgYPosition, setImgYPosition] = useState(0);

  const handleScroll = (e) => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > window.innerHeight) return;

    const imgTransition = window.scrollY * CONSTANTS.scrollTranslateRatio;

    setImgYPosition(`${imgTransition}px`);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={b()}>
      <div
        className={b("img-container")}
        style={{ "--position-y": imgYPosition }}
      >
        {/* Desktop IMG */}
        <IMG className={`${b("img", { desktop: true })}`} image={imgDesktop} />

        {/* Mobile IMG */}
        <IMG className={`${b("img", { mobile: true })}`} image={imgMobile} />
      </div>

      <Overlay data={overlay} />

      <div className="inner ui-relative">
        <div className="grid">
          <div className={b("text-block")}>
            <span
              className={`${b(
                "subtitle"
              )} t-typo-caption ui-block ui-color--t-medium`}
            >
              {subtitle}
            </span>
            <div
              dangerouslySetInnerHTML={{ __html: title }}
              className={`${b("title")} t-typo-h1`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
