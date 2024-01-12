import { ProductConnection } from "../schemas/schema";
import { gqlProductsQuery, normalize } from "../utils";
import type { FetcherConfig, Products } from "@/framework/common/types";

const getAllProducts = async (config: FetcherConfig): Promise<Products> => {
    try {
        const { apiUrl, fetcher } = config;
        const productOptions = {
            gqlQuery: gqlProductsQuery,
            apiUrl,
        };
        const { data } = await fetcher<ProductConnection>(productOptions);

        if (!data.edges)
            throw new Error(
                "Something went wrong. No product information received from database."
            );

        const products = data.edges.map((edge) => normalize(edge.node));
        return { products };
    } catch (error) {
        const errMsg = JSON.stringify(
            error instanceof Error ? error.message : error
        );
        console.error(errMsg);
        return {
            products: null,
            error: errMsg,
        };
    }
};

export default getAllProducts;
