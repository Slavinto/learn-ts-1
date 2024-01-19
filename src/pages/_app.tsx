import "@/styles/style.scss";
import type { AppProps } from "next/app";
import type { FCWithChildren } from "@/components/types/component.types";
import { ReactNode } from "react";
import { UIProvider } from "@/components/ui/context";

const NoLayoutComponent: FCWithChildren<Props> = ({ children }) => (
    <div className='root _wrapper'>{children}</div>
);

type Props = {
    children: ReactNode;
};

export default function App({
    Component,
    pageProps,
}: AppProps & { Component: { Layout: FCWithChildren<Props> } }) {
    const Layout = Component?.Layout ?? NoLayoutComponent;

    return (
        <div className='root _wrapper'>
            <UIProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </UIProvider>
        </div>
    );
}
