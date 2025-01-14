import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

export function sanitizeMarkdown(content: string): string {
  if (!content) return "";
  try {
    return DOMPurify.sanitize(
      marked.parse(content, { async: false }),
    ) as string;
  } catch (error) {
    console.error("Failed to parse markdown:", error);
    return "";
  }
}
