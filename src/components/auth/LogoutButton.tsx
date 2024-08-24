"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

const LogoutButton = ({ style = {} }) => {
  const session = useUser();
  if (!session?.user) return null;

  return (
    <a
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      href="/api/auth/logout"
      style={{ ...style, float: "right", backgroundColor: "red" }}
    >
      Logout
    </a>
  );
};

export default LogoutButton;
