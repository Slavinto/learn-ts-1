import { FetcherConfig } from "@/framework/common/types";
import getAllProducts from "./get-all-products";

type ProductPath = {
    params: {
        slug: string;
    };
};

type ProductPaths = {
    paths: ProductPath[] | null;
    error: string | null;
};

const getAllProductPaths = async (
    config: FetcherConfig
): Promise<ProductPaths> => {
    try {
        const { products } = await getAllProducts(config);
        if (!products)
            throw new Error(
                "Something went wrong fetching products from database."
            );

        const slugArr = products.map((p) => p.slug);

        return {
            paths: slugArr.map((s) => ({ params: { slug: `/${s}` } })),
            error: null,
        };
    } catch (error) {
        const errMsg = JSON.stringify(
            error instanceof Error ? error.message : error
        );
        console.error(errMsg);
        return {
            paths: null,
            error: errMsg,
        };
    }
};

export default getAllProductPaths;
