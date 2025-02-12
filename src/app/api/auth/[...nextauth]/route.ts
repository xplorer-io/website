import NextAuth from "next-auth";
import Okta from "next-auth/providers/okta";

export const authOptions = {
  providers: [
    Okta({
      clientId: process.env.OKTA_CLIENT_ID as string,
      clientSecret: process.env.OKTA_CLIENT_SECRET as string,
      issuer: process.env.YASH_OKTA_OAUTH2_ISSUER as string,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.AUTH_SECRET as string,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
