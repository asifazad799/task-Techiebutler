import { useEffect, useState, useCallback } from "react";

import { API } from "../../config";

import { PaginationParams } from "../../../types";

type Props = {
  params: PaginationParams;
};

type Posts = {
  allPosts: any[];
  totalPosts: number;
};

export function usePosts({ params }: Props) {
  const [posts, setPosts] = useState<Posts>({ allPosts: [], totalPosts: 0 });
  const [loading, setLoading] = useState(false);

  const getPosts = useCallback(
    async ({ params }) => {
      setLoading((prev) => !prev);
      const { data, headers } = await API.get("/posts", { params });
      setPosts((prev) => ({
        ...prev,
        allPosts: [...data, ...prev.allPosts],
        totalPosts: headers["x-total-count"],
      }));
      setLoading((prev) => !prev);
    },
    [params]
  );

  useEffect(() => {
    getPosts({ params });
  }, [params]);

  return { posts, loading };
}
