import axios, {AxiosRequestConfig} from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}
const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "cf97d9533c3a4487a6844bd937e20ce0"
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data);
    }


}

export default APIClient;