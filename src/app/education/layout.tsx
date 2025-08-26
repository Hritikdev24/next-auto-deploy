import React from "react";

type LayoutProps = {
  children: React.ReactNode;
  students: React.ReactNode;
  teachers: React.ReactNode;
};

export default function Layout({ children, students, teacher }: LayoutProps) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f7fa",
        color: "#333",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          backgroundColor: "#1e293b",
          color: "#fff",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h2 style={{ marginBottom: "30px", fontSize: "20px" }}>Dashboard</h2>
          <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <a href="#" style={{ color: "#cbd5e1", textDecoration: "none" }}>
              Home
            </a>
            <a href="#" style={{ color: "#cbd5e1", textDecoration: "none" }}>
              Students
            </a>
            <a href="#" style={{ color: "#cbd5e1", textDecoration: "none" }}>
              Teachers
            </a>
            <a href="#" style={{ color: "#cbd5e1", textDecoration: "none" }}>
              Reviews
            </a>
            <a href="#" style={{ color: "#cbd5e1", textDecoration: "none" }}>
              Settings
            </a>
          </nav>
        </div>
        <div style={{ fontSize: "14px", color: "#94a3b8" }}>© 2025 School</div>
      </aside>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        {/* Header */}
        <header
          style={{
            backgroundColor: "#fff",
            padding: "15px 20px",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            marginBottom: "20px",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "24px" }}>Welcome 👋</h1>
          <p style={{ margin: "5px 0 0", fontSize: "14px", color: "#666" }}>
            Here’s the latest overview of your school performance.
          </p>
        </header>

        {/* Content Grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            flex: 1,
          }}
        >
          {/* Main children section */}
          <section
            style={{
              flex: "2 1 500px",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              minWidth: "300px",
            }}
          >
            {children}
            <div style={{ marginTop: "20px" }}>
              <h3 style={{ marginBottom: "10px" }}>Latest Announcements</h3>
              <ul style={{ lineHeight: "1.8" }}>
                <li>📌 Annual sports event starts from March 5th.</li>
                <li>📌 New library books have been added.</li>
                <li>📌 Parent-teacher meeting scheduled for next Friday.</li>
              </ul>
            </div>
          </section>

          {/* Side panels */}
          <div
            style={{
              flex: "1 1 300px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              minWidth: "250px",
            }}
          >
            <section
              style={{
                backgroundColor: "#fff",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>Top Students</h3>
              {students}
              <ul style={{ lineHeight: "1.6", fontSize: "14px" }}>
                <li>John Doe - Grade A+</li>
                <li>Sarah Lee - Grade A</li>
                <li>Michael Smith - Grade A</li>
              </ul>
            </section>

            <section
              style={{
                backgroundColor: "#fff",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>Teachers</h3>
              {teacher}
              <ul style={{ lineHeight: "1.6", fontSize: "14px" }}>
                <li>Mrs. Johnson - Mathematics</li>
                <li>Mr. Williams - Science</li>
                <li>Ms. Davis - English</li>
              </ul>
            </section>

            <section
              style={{
                backgroundColor: "#fff",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>User Reviews</h3>
              <p style={{ fontSize: "14px", marginBottom: "10px" }}>
                ⭐⭐⭐⭐☆ &quot The teachers are very supportive! - Alex
              </p>
              <p style={{ fontSize: "14px", marginBottom: "10px" }}>
                ⭐⭐⭐⭐⭐ - Best school experience so far. - Maria
              </p>
              <p style={{ fontSize: "14px" }}>
                ⭐⭐⭐⭐☆ - Great facilities and staff - David
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
