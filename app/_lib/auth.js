import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
    providers: [ // for what providers you will add like google, facebook, github
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        })
    ],
    callbacks: {
        authorized({ auth, request }) {
            return !!auth?.user
        },
        async signIn({ user, account, profile }) { // signIn function get access at user, account and profile, and you can use them
            try {
                const existingGuest = await getGuest(user.email);
                if (!existingGuest) // very important to write await below
                    await createGuest({ email: user.email, fullName: user.name }); // to add them in supabase guests table
                return true;
            }
            catch {
                return false; // error handling
            }
        },
        async session({ session, user }) {
            const guest = await getGuest(session.user.email);
            session.user.guestId = guest.id;
            return session;
        }
    },
    pages: {
        signIn: "/login"
    },
}

export const { auth,
    signIn,
    signOut,
    handlers: { GET, POST }
} = NextAuth(authConfig); // import GET & POST function in [...nextauth].js file