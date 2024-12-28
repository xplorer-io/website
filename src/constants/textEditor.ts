export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

export const modules = {
  toolbar: [
    [{ header: 1 }, { header: 2 }, { header: [3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }, { align: [] }],
    ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { list: "check" },
      { indent: "-1" },
      { indent: "+1" },
      { script: "sub" },
      { script: "super" },
    ],
    ["link", "image", "video", "formula"],
    ["clean"],
  ],
};

export const EDITOR_PLACEHOLDER = "Write Something here....";
