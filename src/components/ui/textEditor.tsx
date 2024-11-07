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

  const handleEditorChange = React.useCallback(
    (content: string) => {
      try {
        setEditorContent(content);
        onEditorChange(content);
      } catch (error) {
        console.log("Failed to update editor content", error);
      }
    },
    [onEditorChange],
  );

  const EditorErrorBoundary: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    const [hasError, setHasError] = React.useState(false);
    if (hasError) {
      return (
        <div role="alert">
          Something went wrong with the editor. Please try again.
        </div>
      );
    }
    return children;
  };
  return (
    <EditorErrorBoundary>
      <div role="text-box" aria-label="Rich text editor">
        <ReactQuill
          value={editorContent}
          onChange={handleEditorChange}
          placeholder={EDITOR_PLACEHOLDER}
          modules={modules}
          formats={formats}
        />
      </div>
    </EditorErrorBoundary>
  );
};
export default TextEditor;
