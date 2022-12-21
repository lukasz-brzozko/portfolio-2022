import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  let url = media.data?.attributes.url;

  if (url === undefined) {
    url = media.attributes.url;
  }

  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}
