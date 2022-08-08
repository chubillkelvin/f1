import axios from "axios";

export const fetcher = async <T>(url: string) => (await axios.get<T>(url)).data;
