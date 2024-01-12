import type { InferGetStaticPropsType } from "next";
import getAllProducts from "@/framework/shopify/products/get-all-products";
import { getConfig } from "@/framework/shopify/api/config";
import Layout from "@/components/common/Layout/Layout.component";
import ProductCard from "@/components/Product/ProductCard.component";

export async function getStaticProps() {
    const productConfig = getConfig();
    const { products } = await getAllProducts(productConfig);
    // console.log({ products });
    return products
        ? {
              props: {
                  products,
              },
              revalidate: 4 * 60 * 60,
          }
        : {
              props: {
                  products: null,
              },
          };
}
export default function Home({
    products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    if (!products) return <h1>No products available</h1>;

    return (
        <div>
            {products.map((e) => (
                <ProductCard key={e.id} productInfo={e} />
            ))}
        </div>
    );
}
Home.Layout = Layout;
