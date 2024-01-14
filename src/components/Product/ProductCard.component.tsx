import type { Product } from "@/framework/common/types";
import Link from "next/link";
import { ProductImages } from "..";
import React from "react";

type Props = {
    productInfo: Product;
    componentLayout: "simple" | "slim";
};

const ProductCard = (props: Props) => {
    // console.log({ ...props.productInfo });
    const { id, name, slug, images, price } = props.productInfo;
    const componentLayout = props.componentLayout ?? "simple";
    return componentLayout === "simple" ? (
        <figure className='product-card'>
            <Link
                href={`/products/${slug}`}
                className='product-card__title _link'
            >
                <div>{name}</div>

                <p className='product-card__price'>
                    {price.value}
                    <span> {price.currencyCode}</span>
                </p>
                <ProductImages
                    images={images}
                    componentLayout={componentLayout}
                />
            </Link>
        </figure>
    ) : (
        <figure className='product-card _slim'>
            <Link
                href={`/products/${slug}`}
                className='product-card__title _link'
            >
                <div className='product-card__name'>{name}</div>

                <p className='product-card__price'>
                    {price.value}
                    <span> {price.currencyCode}</span>
                </p>
                <ProductImages
                    images={images}
                    componentLayout={componentLayout}
                />
            </Link>
        </figure>
    );
};

export default ProductCard;
