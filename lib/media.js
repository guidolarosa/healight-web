import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
    if (Array.isArray(media)) {
        const { url } = media[0].attributes;
        const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
        return imageUrl;
    } else {
        const { url } = media.data.attributes;
        const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
        return imageUrl;
    }
}