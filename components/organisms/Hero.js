import { getStrapiMedia } from "../../lib/media";
import IMG from "../atoms/IMG";

import styles from "../../styles/organisms/Hero.module.scss";

function Hero({ data }) {
  // const { hero } = homepage.data.attributes;
  const { img } = data;
  const imageUrl = getStrapiMedia(img);

  return (
    <section className={styles.hero}>
      <IMG image={img} />
    </section>
  );
}

export default Hero;
