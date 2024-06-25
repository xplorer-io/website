import type { Metadata } from "next";
import "@/styles/globals.css";
import { font_body, font_heading } from "./fonts";
import { Header } from "@/components/layout/header";
import React, {Suspense} from "react";
import {Providers} from "@/app/providers";

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
         {/*TODO custom Spinner needed*/}
        <Suspense fallback={<p>Loading ....</p>}>
          <Header />
          {children}
        </Suspense>
      </Providers>
      </body>
    </html>
  );
}
