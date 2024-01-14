import type {
    Product as GqlProduct,
    ImageConnection,
    Image,
    MoneyV2,
} from "../schemas/schema";

import type { Product, ProductPrice } from "@/framework/common/types/products";

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

function normalizeProductPrice({
    amount,
    currencyCode,
}: MoneyV2): ProductPrice {
    return {
        value: +amount,
        currencyCode,
    };
}

export function normalize(inputProductObject: GqlProduct): Product {
    const {
        id,
        title: name,
        handle,
        vendor,
        description,
        images,
        priceRange,
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
        price: normalizeProductPrice(priceRange.minVariantPrice),
        ...other,
    };
    return normalizedProductObject;
}
