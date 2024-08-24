import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/",
  },
  callbacks: {
    authorized: ({ token, req }) => {
      const name = req.cookies.get("name") || "";
      return !!token || name.toString() === "appSession";
    },    
  },
});

export const config = {
  matcher: ["/admin"],
};
