import React from "react";

export default function HR({ text }: { text: string }) {
  return (
    <div className="flex items-center py-2">
      <hr className="flex-grow" />
      <span className="px-5 text-primary/50 text-sm">{text}</span>
      <hr className="flex-grow" />
    </div>
  );
}
