if (
  !process.env.OKTA_CLIENT_ID ||
  !process.env.OKTA_CLIENT_SECRET ||
  !process.env.YASH_OKTA_OAUTH2_ISSUER
) {
  throw new Error("Required Okta environment variables are missing.");
}
import NextAuth from "next-auth";
import { authOptions } from "@/auth.config";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
