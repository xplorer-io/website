import { Providers } from "@/app/providers";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import "@/styles/globals.css";
import type { Metadata } from "next";
import React from "react";
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
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
