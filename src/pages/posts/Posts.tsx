import React, { useMemo, useState } from "react";

import { usePosts } from "../../api";

import { PaginationParams } from "../../types";

import { DefaultLayout } from "../../components";

export function Posts() {
  const [pagination, setPagination] = useState<PaginationParams>({
    _limit: 10,
    _start: 0,
  });
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

  return (
    <div className="flex justify-center items-center">
      <div className="w-[400px] z-50">
        <h2 className="text-[20px] font-semibold">Posts</h2>
        <div className="w-full h-[96vh] overflow-auto">
          {/* post list */}
          <div className="flex gap-[10px] my-1 mb-4 flex-col mx-1">
            {_posts?.map((post) => {
              //post card
              return (
                <div className="bg-gray-300 bg-opacity-5 h-[110px] w-full rounded-md"></div>
              );
            })}
          </div>
          <button
            className="p-3 rounded-md bg-gray-400"
            onClick={handleLoadMore}
          >
            load more
          </button>
        </div>
      </div>
    </div>
  );
}
