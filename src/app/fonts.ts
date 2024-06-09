import { Open_Sans, Work_Sans } from "next/font/google";

export const font_body = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const font_heading = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});
