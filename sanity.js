import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: "anv40edd", // Укажи ID проекта из Sanity
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-01-01",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
