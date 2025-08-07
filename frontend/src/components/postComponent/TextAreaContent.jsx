import React from "react";
import { Editor } from "primereact/editor";

export default function TextAreaContent() {
  return (
    <div>
      <Editor style={{ height: "320px" }} />
      <div className="flex gap-5 mt-5">
        <button>Save</button>
        <button>Delete</button>
        <button>Publish</button>
      </div>
    </div>
  );
}
