import React, { useCallback, useMemo, useState } from "react";

import { usePost, usePosts } from "../../api";

import { PaginationParams } from "../../types";

import { PostCard } from "../../components";
import { PostDetails } from "../../components/post/PostDetails";

export function Posts() {
  const [pagination, setPagination] = useState<PaginationParams>({
    _limit: 10,
    _start: 0,
  });
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null); // Track selected post ID

  const { posts, loading } = usePosts({ params: pagination });

  const _posts = useMemo(() => {
    // heavy computation goes here
    // start of applying this only to the new data
    let newData = posts?.allPosts[1];
    // end of applying this only to the new data

    return posts?.allPosts?.length ? [...posts?.allPosts[0], ...newData] : [];
  }, [posts]);

  const handleLoadMore = () => {
    setPagination((prev) => ({
      _limit: prev._limit,
      _start: prev._start + prev._limit,
    }));
  };

  const handlePostDetails = useCallback((id: number) => {
    setSelectedPostId(id);
  }, []);

  const handleClosePostDetails = useCallback(() => {
    setSelectedPostId(null);
  }, []);

  return (
    <>
      <div className="flex justify-center items-start gap-3">
        <div className="w-[400px] z-50">
          <h2 className="text-[20px] font-semibold">Posts</h2>
          <div className="w-full h-[96vh] overflow-auto mb-3 px-1">
            {/* post list */}
            <div className="flex gap-[10px] my-1 mb-4 flex-col">
              {_posts?.map((post) => {
                //post card
                return (
                  <PostCard
                    key={post?.id}
                    post={post}
                    getPost={handlePostDetails}
                  />
                );
              })}
            </div>
            <button
              className="p-2 px-3 rounded-md bg-gray-400 mt-3 text-[14px] mb-3 w-full"
              onClick={handleLoadMore}
            >
              load more
            </button>
          </div>
        </div>
        {selectedPostId && (
          <div className="w-[200px]">
            <PostDetails
              postId={selectedPostId}
              onClose={handleClosePostDetails}
            />
          </div>
        )}
      </div>
    </>
  );
}
