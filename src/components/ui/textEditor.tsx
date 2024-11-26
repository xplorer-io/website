"use client";
import React, { Children, useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import {
  formats,
  modules,
  EDITOR_PLACEHOLDER,
} from "@/localisation/textEditor";

interface TextEditorProps {
  onEditorChange: (content: string) => void;
  initialValue?: string;
  placeholder?: string;
  className?: string;
  formats?: string[];
  modules?: string[];
}
const TextEditor: React.FC<TextEditorProps> = ({
  onEditorChange,
  initialValue = "",
}) => {
  const [editorContent, setEditorContent] = useState<string>(initialValue);

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
    onEditorChange(content);
  };

  return (
    <div role="text-box" aria-label="Rich text editor">
      <ReactQuill
        value={editorContent}
        onChange={handleEditorChange}
        placeholder={EDITOR_PLACEHOLDER}
        modules={modules}
        formats={formats}
        className="quill-editor"
      />
    </div>
  );
};
export default TextEditor;
