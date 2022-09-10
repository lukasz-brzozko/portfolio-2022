import block from "bem-css-modules";
import { getStrapiMedia } from "../../lib/media";
import IMG from "../atoms/IMG";

import styles from "../../styles/organisms/Hero.module.scss";

const b = block(styles);

function Hero({ data }) {
  // const { hero } = homepage.data.attributes;
  const { img, title, subtitle } = data;
  const imageUrl = getStrapiMedia(img);

  return (
    <section className={b()}>
      <IMG image={img} />

      <div className="inner">
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
