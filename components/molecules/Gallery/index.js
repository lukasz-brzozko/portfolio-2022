import block from "bem-css-modules";
import Image from "next/image";
import { getStrapiMedia } from "../../../lib/media";

import styles from "./Gallery.module.scss";

const b = block(styles);

function Gallery({ data }) {
  const { data: imgs = null } = data;

  if (!imgs) return;

  const convertImage = (w, h) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

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
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              convertImage(width, height)
            )}`}
          />
        </div>
      );
    });
  };

  return generateIMGS();
}

export default Gallery;
