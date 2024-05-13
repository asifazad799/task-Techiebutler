import React, { useEffect } from "react";

import { usePost } from "../../api";

type Props = {
  postId: number;
  onClose: () => void;
};

export function PostDetails({ postId, onClose }: Props) {
  const { post, loading } = usePost({ id: postId });

  useEffect(() => {
    console.log("PostDetails re-rendered due to props change");
  }, [postId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!post) {
    return <p>No post found</p>;
  }

  return (
    <>
      <h2 className="text-[20px] font-semibold">Post Details</h2>
      <div className="bg-gray-300 bg-opacity-5 min-h-[110px] w-[319px] rounded-md p-4">
        <p className="text-[15px]">
          <strong>ID:</strong> {post.id}
        </p>
        <p className="text-[15px]">
          <strong>Title:</strong> {post.title}
        </p>
        <p className="text-[15px]">
          <strong>Body:</strong> {post.body}
        </p>
        <button
          className="p-2 px-3 rounded-md bg-gray-400 mt-3 text-[14px]"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </>
  );
}