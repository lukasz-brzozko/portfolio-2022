import block from "bem-css-modules";

import Image from "next/image";
import { getStrapiMedia } from "../../../lib/media";

const FILL = "fill";

function IMG({
  image = null,
  objectFit = "cover",
  className = "",
  priority = false,
  layout = FILL,
}) {
  if (image === null) return;

  const { alternativeText = "", width, height } = image.data.attributes;
  const widthValue = layout === FILL ? null : width;
  const heightValue = layout === FILL ? null : height;

  return (
    <Image
      width={widthValue}
      height={heightValue}
      className={className}
      layout={layout}
      objectFit={objectFit}
      src={getStrapiMedia(image)}
      alt={alternativeText}
      priority={priority}
    />
  );
}

export default IMG;
