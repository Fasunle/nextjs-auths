"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

const LoginButton = ({ style = {} }) => {
  const session = useUser();
  if(session?.user) return null;

  return (
    <a
      href="/api/auth/login"
      style={{...style, float: "right"}}
    >
      Login
    </a>
  );
}

export default LoginButton;