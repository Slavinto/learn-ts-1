import type { Product } from ".";

export type Products = {
    products: Product[] | null;
    error?: string;
};

export type FetcherOptions = {
    gqlQuery: string;
    apiUrl: string;
};

export type FetcherConfig = {
    apiUrl: string;
    fetcher: <T>(options: FetcherOptions) => Promise<FetcherResult<T>>;
};

export type FetcherResult<T> = {
    data: T | FetcherResultFailed;
};

export type FetcherResultFailed = {
    edges: null;
    pageInfo: null;
    error?: string;
};
