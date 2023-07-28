import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "cf97d9533c3a4487a6844bd937e20ce0"
    }
})