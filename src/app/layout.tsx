import React from "react";
import { Providers } from "@/app/providers";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { font_body, font_heading } from "./fonts";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth.config";

export const metadata: Metadata = {
  title: "Xplorers - Learn share and grow",
  description: "Xplorers is a group of talented tech nerds",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html
      lang="en"
      className={`${font_body.variable} ${font_heading.variable}`}
    >
      <body>
        <Providers session={session}>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
