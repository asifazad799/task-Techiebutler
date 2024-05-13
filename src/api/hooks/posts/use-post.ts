import { useEffect, useState } from "react";
import { API } from "../../config";

export function usePost({ id }: { id: number | null }) {
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
    if (id) getPost(id);
  }, [id]);

  return { post, loading };
}
