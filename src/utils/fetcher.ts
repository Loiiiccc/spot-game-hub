import { Fetcher } from 'swr';
import axios from 'axios';

const key = "de2dca98d47449aba094f5244f022624";
export const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {  key: key }
})

const fetcher =  (url: string) => axiosInstance.get(url).then((res) => res.data);

export default fetcher;