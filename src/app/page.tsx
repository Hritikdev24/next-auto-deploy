import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "40px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontSize: "2rem",
          color: "#333",
          marginBottom: "30px",
        }}
      >
        Navigation
      </h1>

      {/* Navigation Links */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Link
          href="/about"
          style={{
            textDecoration: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            backgroundColor: "#0070f3",
            color: "#fff",
            fontWeight: "bold",
            transition: "background-color 0.3s",
          }}
        >
          About
        </Link>

        <Link
          href="/home"
          style={{
            textDecoration: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            backgroundColor: "#0070f3",
            color: "#fff",
            fontWeight: "bold",
            transition: "background-color 0.3s",
          }}
        >
          Home
        </Link>
      </div>
    </div>
  );
}
