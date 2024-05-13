import React from "react";

type Props = { handleClick?: () => void; title?: string; className?: string };

export function Button({ handleClick, title, className }: Props) {
  return (
    <button
      className={`p-2 px-3 rounded-md bg-gray-400 mt-3 text-[14px] ${className}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
