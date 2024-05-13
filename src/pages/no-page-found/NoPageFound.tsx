import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";

export function NoPageFound() {
  return (
    <div className="flex h-[97vh] w-full items-center justify-center">
      <div>
        <h1 className="text-red-500 text-center mb-[5px]">No Page Found</h1>
        <button>
          <Link to={"/"}>
            <Button title="Go to back home" />
          </Link>
        </button>
      </div>
    </div>
  );
}
