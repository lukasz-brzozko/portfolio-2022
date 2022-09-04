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

      <div className={b("text-block")}>
        <span className={b("subtitle")}>{subtitle}</span>
        <h1 className={b("title")}>{title}</h1>
      </div>
    </section>
  );
}

export default Hero;
