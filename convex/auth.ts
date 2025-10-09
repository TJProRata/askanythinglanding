import Google from "@auth/core/providers/google";
import { convexAuth } from "@convex-dev/auth/server";

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [
    Google({
      id: "google-gist",
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Google({
      id: "google-askanything",
      clientId: process.env.AUTH_GOOGLE_ID_ASKANYTHING,
      clientSecret: process.env.AUTH_GOOGLE_SECRET_ASKANYTHING,
    }),
  ],
});
