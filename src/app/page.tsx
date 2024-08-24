import { Login, Logout } from "@/components/auth";
import ProfileClient from "@/components/user-profile";
import { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  auth: {
    marginInline: "10px",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    color: "white",
    backgroundColor: "blue",
  },
  heading: {
    textAlign: "center",
    fontSize: "25px",
    lineHeight: 1.6,
    fontWeight: 500,
  },
  subheading: {
    textAlign: "center",
    fontSize: "20px",
    lineHeight: 1.2,
    fontWeight: 400,
  },
  profileWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "1.3rem",
    alignItems: "center",
  },
};

export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6" style={styles.heading}>
          Welcome to Our Next.js App
        </h1>
        <p className="mb-4" style={styles.subheading}>
          This is a simple home page with login and logout features.
        </p>
        <div className="space-x-4" style={{ marginTop: "40px" }}>
          <Login style={styles.auth} />
          <Logout style={styles.auth} />

          <div style={styles.profileWrapper}>
            <ProfileClient />
          </div>
        </div>
      </div>
    </main>
  );
}
