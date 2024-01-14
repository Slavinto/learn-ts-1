import { Product } from "@/framework/common/types/products";
import { ProductCard } from "@/components";
import React from "react";

type Props = {
    products: Product[];
};

const Marquee = (props: Props) => {
    const { products } = props;
    return (
        <div className='marquee _container'>
            {products.map((e) => (
                <ProductCard
                    key={e.id}
                    componentLayout='slim'
                    productInfo={e}
                />
            ))}
        </div>
    );
};

export default Marquee;
