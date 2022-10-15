import Image from "next/image";
import { getStrapiMedia } from "../../../lib/media";

function Gallery({ data }) {
  const { data: imgs = null } = data;

  if (!imgs) return;

  const generateIMGS = () => {
    return imgs.map((img) => {
      const { id, attributes } = img;
      const { alternativeText = "", width, height } = attributes;

      return (
        <Image
          key={id}
          width={width}
          height={height}
          layout="responsive"
          src={getStrapiMedia(img)}
          alt={alternativeText}
        />
      );
    });
  };

  return generateIMGS();
}

export default Gallery;
