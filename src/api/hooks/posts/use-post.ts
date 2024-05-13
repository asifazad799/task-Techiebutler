import { useEffect, useState } from "react";
import { API } from "../../config";

export function usePost({ id }) {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState<any>({});

  const getPost = async (id: number | null) => {
    if (id) {
      setLoading((prev) => !prev);
      const { data } = await API.get(`/posts/${id}`);
      setLoading((prev) => !prev);
      setPost(data);
    }
    return {};
  };

  useEffect(() => {
    getPost(id);
  }, [id]);

  return { post, loading };
}
