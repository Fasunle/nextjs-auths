"use client";

import { signIn, useSession } from "next-auth/react";

const LoginButton = ({ style = {} }) => {
  const session = useSession();
  console.log("🚀 ~ LoginButton ~ session:", session)
  const user = session?.data?.user || null;
  if (user) return null;

  return (
    <button onClick={() => signIn()} style={{ ...style, float: "right" }}>
      Login
    </button>
  );
};

export default LoginButton;
