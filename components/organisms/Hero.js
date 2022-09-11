import block from "bem-css-modules";

import IMG from "../atoms/IMG";

import styles from "../../styles/organisms/Hero.module.scss";

const b = block(styles);

function Hero({ data }) {
  const { addOverlay, imgDesktop, imgMobile, overlayColor, title, subtitle } =
    data;
  console.log(data);
  return (
    <section className={b()}>
      <IMG className={`${b("img", { desktop: true })}`} image={imgDesktop} />
      <IMG className={`${b("img", { mobile: true })}`} image={imgMobile} />

      <div className={b("overlay")} style={{ "--color": overlayColor }}></div>

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
