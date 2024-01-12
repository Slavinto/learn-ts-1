import {
    FetcherOptions,
    FetcherResult,
    FetcherResultFailed,
} from "@/framework/common/types";

export const fetchAPI = async <T>(
    options: FetcherOptions
    // graphqlQuery: string,
    // apiUrl: string
): Promise<FetcherResult<T>> => {
    try {
        const result = await fetch(options.apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: options.gqlQuery }),
        });
        const { data, errors } = await result.json();

        if (errors) {
            throw new Error(JSON.stringify(errors));
        }

        return {
            data: {
                edges: data.products.edges,
                pageInfo: data.products.pageInfo,
            },
        };
    } catch (error) {
        const errMsg = JSON.stringify(
            error instanceof Error ? error.message : error
        );
        console.error(errMsg);
        return {
            data: {
                edges: null,
                pageInfo: null,
                error: errMsg,
            },
        };
    }
};
