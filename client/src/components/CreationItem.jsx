import React, { useState } from "react";
import Markdown from "react-markdown";

function CreationItem({ Item }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer"
    >
      <div className="flex justify-between items-center gap-4">
        <div>
          <h2>{Item.prompt}</h2>
          <p>
            {Item.type}-{new Date(Item.created_at).toLocaleDateString()}
          </p>
        </div>
        <button className="bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] px-4 py-1 rounded-full">
          {Item.type}
        </button>
      </div>
      {expanded && (
        <div>
          {Item.type === "image" ? (
            <div>
              <img
                src={Item.content}
                alt="Image"
                className="mt-3 w-full max-w-md"
              />
            </div>
          ) : (
            <div className="mt-3 h-full overflow-y-scroll text-sm text-slate-700">
              <div className="reset-tw">
                <Markdown>{Item.content}</Markdown>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CreationItem;
