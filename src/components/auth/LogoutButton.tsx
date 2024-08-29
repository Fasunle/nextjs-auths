"use client";

import { signOut, useSession } from "next-auth/react";

const LogoutButton = ({ style = {} }) => {
  const session = useSession();
  if (!session?.data?.user) return null;

  return (
    <button
      onClick={() => signOut()}
      style={{ ...style, float: "right", backgroundColor: "red" }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
