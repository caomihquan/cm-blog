import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId:process.env.GOOGLE_CLIENT_ID || "GOOGLE_CLIENT_ID",
      clientSecret:process.env.GOOGLE_CLIENT_SECRET || "GOOGLE_CLIENT_SECRET",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }:any) {
      console.log("signIn", user , account,profile);
      try {
        //const existingGuest = await getGuest(user.email);

        // if (!existingGuest)
        //   await createGuest({ email: user.email, fullName: user.name });

        return true;
      } catch {
        return false;
      }
    },
    async session({session, token, user }:any) {
      console.log("auth", user , session);
      // const guest = await getGuest(session.user.email);
      // session.user.guestId = guest.id;
      session.accessToken = token.accessToken
      session.user.id = "123"
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST, authConfig };

