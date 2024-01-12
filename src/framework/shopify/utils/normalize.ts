import type {
    Product as GqlProduct,
    ImageConnection,
    Image,
} from "../schemas/schema";

import { Product } from "@/framework/common/types/products";

function normalizeProductImages(edgesArray: ImageConnection): Image[] {
    const { edges: images } = edgesArray;
    const output = images.map((img) => {
        return {
            src: `/images/${img.node.originalSrc}`,
            originalSrc: "/",
            transformedSrc: "/",
        };
    });
    return output;
}

export function normalize(inputProductObject: GqlProduct): Product {
    const {
        id,
        title: name,
        handle,
        vendor,
        description,
        images,
        ...other
    } = inputProductObject;

    const normalizedProductObject = {
        id,
        name,
        vendor,
        description,
        path: `/${handle}`,
        slug: handle?.replace(/^\/+|\/+$/g, ""),
        images: normalizeProductImages(images),
        ...other,
    };
    return normalizedProductObject;
}
