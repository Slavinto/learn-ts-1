import { Product } from "@/framework/shopify/schemas/schema";
import React from "react";
type ProductInfo = 

type Props = {
    productInfo: Product;
    // productInfo: string;
};

const ProductCard = (props: Props) => {
    console.log({ props });
    return <div>{}</div>;
};

export default ProductCard;
