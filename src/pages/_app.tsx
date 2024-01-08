import "@/styles/style.scss";
import type { AppProps } from "next/app";
import { Component } from "react";

type AppType = typeof App;

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
