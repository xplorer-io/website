import type { Metadata } from "next";
import "@/styles/globals.css";
import { font_body, font_heading } from "./fonts";

export const metadata: Metadata = {
  title: "Xplorers - Learn share and grow",
  description: "Xplorers is a group of talented tech nerds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${font_body.variable} ${font_heading.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
