import React, { useCallback, useMemo, useState } from "react";

import { usePosts } from "../../api";

import { PaginationParams } from "../../types";

import "./posts.css";

import { Button, PostCard, PostDetails } from "../../components";

export function Posts() {
  const [pagination, setPagination] = useState<PaginationParams>({
    _limit: 10,
    _start: 0,
  });
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null); // Track selected post ID

  const { posts, loading } = usePosts({ params: pagination });

  const _posts = useMemo(() => {
    // heavy computation goes here
    // start of applying changes, this only to the new data since the old data is already in the cache
    let newData = posts?.allPosts[1];
    // end of applying changes

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
    <div className="overflow-auto w-full">
      <div className="flex justify-center items-start gap-3 posts-container">
        <div className="w-[420px] z-50 flex-shrink-0">
          <h2 className="text-[20px] font-semibold">Posts</h2>
          <div className=" h-[96vh] overflow-auto mb-3 px-1">
            {/* post list */}
            <div className="flex gap-[10px] my-1 mb-4 flex-col">
              {_posts?.map((post) => {
                // post card
                return (
                  <PostCard
                    key={post?.id}
                    post={post}
                    getPost={handlePostDetails}
                  />
                );
              })}
            </div>
            <Button
              className="mb-3 w-full"
              title="load more"
              handleClick={handleLoadMore}
            />
          </div>
        </div>
        {selectedPostId && (
          <div className="w-[400px] flex-shrink-0">
            <PostDetails
              postId={selectedPostId}
              onClose={handleClosePostDetails}
            />
          </div>
        )}
      </div>
    </div>
  );
}
