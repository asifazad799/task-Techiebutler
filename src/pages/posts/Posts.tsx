import React, { useMemo, useState } from "react";

import { usePosts } from "../../api";

import { PaginationParams } from "../../types";

export function Posts() {
  const [pagination, setPagination] = useState<PaginationParams>({
    _limit: 10,
    _start: 0,
  });
  const { posts, loading } = usePosts({ params: pagination });

  const handleLoadMore = () => {
    setPagination((prev) => ({
      _limit: prev._limit,
      _start: prev._start + prev._limit,
    }));
  };

  return (
    <div className="">
      <button className="p-3 rounded-md bg-gray-400" onClick={handleLoadMore}>
        load more
      </button>
    </div>
  );
}
