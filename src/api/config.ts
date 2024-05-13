import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const API = axios.create({ baseURL: baseUrl });
