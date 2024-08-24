import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";
import { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  code: {
    backgroundColor: "aliceblue",
    fontFamily: "monospace",
    accentColor: "Background",
    padding: 5,
    textAlign: "start",
    maxWidth: 600,
    overflowY: "auto"
  },
  username: {
    fontSize: "18px",
    fontFamily: "cursive",
    padding: 2
  },
  email: {
    fontSize: "14px",
    fontFamily: "serif",
    padding: 3
  },

};

export default async function ProfileServer() {
  const userSession = await getSession();
  const user = userSession?.user || null;
  const profileSize = 250;

  return (
    user && (
      <>
        <Image
          width={profileSize}
          height={profileSize}
          src={user.picture}
          alt={user.name}
        />
        <h2 style={styles.username}>{user.name}</h2>
        <p style={styles.email}>{user.email}</p>
        <code style={styles.code}>
          {JSON.stringify(userSession, null, "\n")}
        </code>
      </>
    )
  );
}
