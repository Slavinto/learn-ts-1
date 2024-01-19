import { Product } from "@/framework/common/types/products";
import { ProductCard } from "@/components";
import React from "react";
import FastMarquee from "react-fast-marquee";

type Props = {
    products: Product[];
};

const Marquee = (props: Props) => {
    const { products } = props;
    return (
        <div className='marquee__cards'>
            <FastMarquee>
                <div className='marquee _container'>
                    {products.map((e) => {
                        return (
                            <ProductCard
                                key={e.id}
                                componentLayout='slim'
                                productInfo={e}
                            />
                        );
                    })}
                    <ProductCard
                        componentLayout='slim'
                        productInfo={products[0]}
                    />
                </div>
            </FastMarquee>
        </div>
    );
};

export default Marquee;
