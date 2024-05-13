import React, { useEffect } from "react";

export const PostCard = React.memo(({ post, getPost }: any) => {
  console.log("changing");

  return (
    <div className="bg-gray-300 bg-opacity-5 min-h-[110px] w-full rounded-md p-4">
      <p className="text-[15px]">{`Id : ${post?.id}`}</p>
      <p className="text-[15px]">{`Title : ${post?.title}`}</p>
      <button
        className="p-2 px-3 rounded-md bg-gray-400 mt-3 text-[14px]"
        onClick={() => {
          getPost(post?.id);
        }}
      >
        View details
      </button>
    </div>
  );
});
