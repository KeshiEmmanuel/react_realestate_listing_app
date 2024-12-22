import { AxiosInstance, AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface FetchResponse<T> {
    hits: T[];
}

function useData<T>(
    endpoint: string,
    apiClient: AxiosInstance,
    deps?: any[],
    responseConfig?: AxiosRequestConfig
) {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(
        () => {
            const controller = new AbortController();

            apiClient
                .get<FetchResponse<T>>(endpoint, {
                    signal: controller.signal,
                    ...responseConfig,
                })
                .then((response) => {
                    setData(response.data.hits);
                    setIsLoading(false);
                })
                .catch((error) => {
                    if (error instanceof CanceledError) return;
                    setError(error.message);
                    setIsLoading(false);
                });
        },
        deps ? [...deps] : []
    );

    return { data, error, isLoading };
}

export default useData;
