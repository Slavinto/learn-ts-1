// import "@/styles/style.scss";
import "@/styles/main.css";
import type { AppProps } from "next/app";
import type { FCWithChildren } from "@/components/types/component.types";

const NoLayoutComponent: FCWithChildren = ({ children }) => <>{children}</>;

export default function App({
    Component,
    pageProps,
}: AppProps & { Component: { Layout: FCWithChildren } }) {
    const Layout = Component?.Layout ?? NoLayoutComponent;

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
