import type { InferGetStaticPropsType } from "next";
import getAllProducts from "@/framework/shopify/products/get-all-products";
import { getConfig } from "@/framework/shopify/api/config";
import { Grid, Hero, Layout, Marquee, ProductCard } from "@/components/";

export async function getStaticProps() {
    const productConfig = getConfig();
    const { products } = await getAllProducts(productConfig);
    // console.log(products && products[0].images);
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
    // console.log({ products });
    const productImages = products.map((p) => p.images);

    return (
        <>
            <Hero header='Buy Now!' text={heroText} />
            <Grid layout='A'>
                {products.map((e) => (
                    <ProductCard
                        key={e.id}
                        componentLayout='simple'
                        productInfo={e}
                    />
                ))}
            </Grid>
            <Marquee products={products} />
            <Grid layout='B'>
                {products.map((e) => (
                    <ProductCard
                        key={e.id}
                        componentLayout='simple'
                        productInfo={e}
                    />
                ))}
            </Grid>
        </>
    );
}
Home.Layout = Layout;

const heroText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, repellendus dolorum tempore officiis cum illo totam enim hic illum quae dignissimos recusandae cupiditate? Tempore error magnam esse amet ea vero.";
