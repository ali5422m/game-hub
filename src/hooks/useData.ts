
import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";


interface FetchResponse {
    count: number;
    results: T[];
}

const useData = (endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);



    useEffect(() => {
        const controller = new AbortController();

        setLoading(true)
        apiClient
            .get<FetchResponse>(endpoint,{signal: controller.signal})
            .then(({data}) => {
                setData(data.results);
                setLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return  () => controller.abort();

    }, [])
    return { data, error, isLoading };

}

export default useData;