import { CurrencyCode } from "@/framework/shopify/schemas/schema";

export interface ProductImage {
    src: string;
    alt?: string;
}

export interface ProductPrice {
    value: number;
    currencyCode: CurrencyCode;
}

export interface Product {
    id: string;
    name: string;
    price: ProductPrice;
    description: string;
    path: string;
    slug: string;
    images: ProductImage[];
}
