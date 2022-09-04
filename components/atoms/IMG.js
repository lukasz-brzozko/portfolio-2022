import Image from "next/image";
import { getStrapiMedia } from "../../lib/media";

function IMG({ image, objectFit }) {
  const { alternativeText, width, height } = image.data.attributes;

  return (
    <Image
      layout="fill"
      // width={width}
      // height={height}
      objectFit={objectFit || "cover"}
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  );
}

export default IMG;
