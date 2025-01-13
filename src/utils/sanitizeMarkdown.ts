import { marked } from "marked";

export function sanitizeMarkdown(content: string): string {
  return marked.parse(content, { async: false }) as string;
}
