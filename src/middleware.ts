export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    // only protect this route
    "/api/protected/:path*",
    "/pathway-to-success/:path*",
    "/xplorers-ai/:path*",
  ],
};
