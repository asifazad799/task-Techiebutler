import React from "react";
import { Link } from "react-router-dom";

export function NoPageFound() {
  return (
    <div className="flex h-[97vh] w-full items-center justify-center">
      <div>
        <h1 className="text-red-500 text-center mb-[5px]">No Page Found</h1>
        <button>
          <Link to={"/"}>
            <button className="bg-gray-300 p-3 rounded-md">
              <h2>Go to back home</h2>
            </button>
          </Link>
        </button>
      </div>
    </div>
  );
}
