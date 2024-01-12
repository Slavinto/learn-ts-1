import { fetchAPI } from "../utils";
import type { FetcherConfig } from "@/framework/common/types";
import type { ProductConnection } from "../schemas/schema";

class Config<T> {
    private config: T;

    constructor(config: T) {
        this.config = config;
    }

    getConfig(): T {
        return this.config;
    }
}

const configObject = new Config<FetcherConfig>({
    apiUrl: "http://localhost:4000/graphql",
    fetcher: fetchAPI,
});

export function getConfig(): FetcherConfig {
    return configObject.getConfig();
}
