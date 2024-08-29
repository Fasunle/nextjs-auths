"use client"
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

interface IAppProps {
  session?: Session | null;
}

export default function App({
  children,
}: PropsWithChildren<IAppProps>) {
  return (
    <SessionProvider>
      <UserProvider>{children}</UserProvider>
    </SessionProvider>
  );
}
