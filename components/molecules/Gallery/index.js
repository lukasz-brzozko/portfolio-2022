import block from "bem-css-modules";
import Image from "next/image";
import { getStrapiMedia } from "../../../lib/media";

import styles from "./Gallery.module.scss";

const b = block(styles);

function Gallery({ data }) {
  const { data: imgs = null } = data;

  if (!imgs) return;

  const generateIMGS = () => {
    return imgs.map((img) => {
      const { id, attributes } = img;
      const { alternativeText = "", width, height } = attributes;

      return (
        <div className={`${b("img")}`} key={id}>
          <Image
            width={width}
            height={height}
            layout="responsive"
            src={getStrapiMedia(img)}
            alt={alternativeText}
          />
        </div>
      );
    });
  };

  return generateIMGS();
}

export default Gallery;
