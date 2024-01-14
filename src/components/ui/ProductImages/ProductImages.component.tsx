import { ProductImage } from "@/framework/common/types";
import Image from "next/image";
import React from "react";

type Props = {
    images: ProductImage[];
    componentLayout: "simple" | "slim";
};

const ProductImages = (props: Props) => {
    const { images } = props;
    const { componentLayout } = props;
    const imgWidth = componentLayout === "simple" ? 400 : 200;
    const imgHeight = componentLayout === "simple" ? 400 : 200;
    return (
        <div className='product-images__wrapper'>
            <div className='product-images__container'>
                {images?.length > 0 ? (
                    images.map((i, idx) => {
                        // render only first foto
                        // if (idx > 0) return;
                        return (
                            <div
                                key={i.src}
                                className='product-image__container'
                            >
                                <Image
                                    src={i.src}
                                    width={imgWidth}
                                    height={imgHeight}
                                    quality={85}
                                    alt={i.alt || "product image"}
                                />
                            </div>
                        );
                    })
                ) : (
                    <Image
                        src={"/public/product-image-placeholder.svg"}
                        alt={"placeholder product image"}
                    />
                )}
            </div>
        </div>
    );
};

export default ProductImages;
