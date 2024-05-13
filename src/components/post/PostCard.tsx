import React from "react";

import { Button } from "../common";

// React.memo is used to prevent re-renders
export const PostCard = React.memo(({ post, getPost }: any) => {
  // comment to check re-renders
  console.log("changing");

  return (
    <div className="bg-gray-300 bg-opacity-5 min-h-[110px] w-full rounded-md p-4">
      <p className="text-[15px]">{`Id : ${post?.id}`}</p>
      <p className="text-[15px]">{`Title : ${post?.title}`}</p>
      <Button
        title="View details"
        handleClick={() => {
          getPost(post?.id);
        }}
      />
    </div>
  );
});
