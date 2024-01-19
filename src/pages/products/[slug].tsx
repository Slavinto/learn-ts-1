import React from "react";
import { Layout } from "@/components";
import type {
    GetStaticPaths,
    InferGetStaticPropsType,
    GetStaticProps,
} from "next";
import getAllProductPaths from "@/framework/shopify/products/get-all-product-paths";
import { getConfig } from "@/framework/shopify/api/config";

type ProductSlugPath = {
    params: {
        slug: string;
    };
};

export const getStaticPaths = (async () => {
    try {
        const productConfig = getConfig();
        const { paths } = await getAllProductPaths(productConfig);
        if (!paths)
            throw new Error(
                "Something went wrong fetching product paths from database."
            );
        console.log(paths);
        return {
            paths,
            fallback: "blocking",
        };
    } catch (error) {
        const errMsg = JSON.stringify(
            error instanceof Error ? error.message : error
        );
        console.error(errMsg);
        return {
            paths: [
                {
                    params: {
                        slug: "",
                    },
                },
            ],
            error: errMsg,
            fallback: "blocking",
        };
    }
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }: ProductSlugPath) => {
    if (params === undefined)
        return {
            params: {
                slug: "",
            },
        };
    // console.log(context);

    // const { slug } = params;
    return {
        params,
    };
}) satisfies GetStaticProps<ProductSlugPath> | undefined;

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const ProductSlug = (props: Props) => {
    return <div>ProductSlug</div>;
};

ProductSlug.Layout = Layout;
export default ProductSlug;
