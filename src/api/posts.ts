import { API } from "./config";

export const getAllPosts = ({ params }) => API.get("/posts", { params });
