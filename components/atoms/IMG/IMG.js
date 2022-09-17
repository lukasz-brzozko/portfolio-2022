import block from "bem-css-modules";

import Image from "next/image";
import { getStrapiMedia } from "../../../lib/media";

function IMG({ image, objectFit, className }) {
  const { alternativeText, width, height } = image.data.attributes;

  return (
    <Image
      className={`${className || null}`}
      layout="fill"
      objectFit={objectFit || "cover"}
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  );
}

export default IMG;
