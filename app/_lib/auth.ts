import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createAuthor, getAuthor } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId:process.env.AUTH_GOOGLE_ID || "GOOGLE_CLIENT_ID",
      clientSecret:process.env.AUTH_GOOGLE_SECRET || "GOOGLE_CLIENT_SECRET",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }:any) {
      console.log("signIn", user , account,profile);
      try {
        const existingGuest = await getAuthor(user.email);
        if (!existingGuest)
          await createAuthor({ email: user.email, name: user.name,image: user.image });
        return true;
      } catch {
        return false;
      }
    },
    async session({session, user }:any) {
      console.log("auth", user , session);
      const guest = await getAuthor(session.user.email);
      session.user.authorId = guest.id;
      session.user.image = guest.image;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST, authConfig };

