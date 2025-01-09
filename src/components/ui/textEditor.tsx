"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { formats, modules, EDITOR_PLACEHOLDER } from "@/constants/textEditor";

interface TextEditorProps {
  onEditorChange: (content: string) => void;
  initialValue?: string;
  placeholder?: string;
  readOnly?: boolean;
}
const TextEditor: React.FC<TextEditorProps> = (props) => {
  const {
    onEditorChange,
    initialValue = "",
    placeholder = EDITOR_PLACEHOLDER,
    readOnly = false,
  } = props;

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
        placeholder={placeholder}
        modules={modules}
        formats={formats}
        className="quill-editor"
        readOnly={readOnly}
      />
    </div>
  );
};
export default TextEditor;
