import React from "react";

export function PostCard({ post }) {
  return (
    <div className="bg-gray-300 bg-opacity-5 min-h-[110px] w-full rounded-md p-4">
      <p className="text-[15px]">{`Id : ${post?.id}`}</p>
      <p className="text-[15px]">{`Title : ${post?.title}`}</p>
      <button className="p-2 rounded-md bg-gray-400 mt-3"> View details</button>
    </div>
  );
}
