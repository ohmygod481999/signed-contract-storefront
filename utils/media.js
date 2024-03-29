import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
    const { url } = media.data.attributes;
    const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
    return imageUrl;
}

export function getStrapiMedias(medias) {
    return medias.data.map((media) => {
        const { url } = media.attributes;
        const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
        return imageUrl;
    });
}
