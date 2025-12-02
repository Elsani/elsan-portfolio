// app/layout.js
export const metadata = {
  title: "Elsan Memeti - Web Developer",
  description: "Portfolio i Elsan Memetit, Web Developer & IT.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          background: "#0f172a",
          color: "#e5e7eb",
        }}
      >
        <header
          style={{
            borderBottom: "1px solid #1f2937",
            padding: "1rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            top: 0,
            backdropFilter: "blur(10px)",
            background: "rgba(15,23,42,0.85)",
            zIndex: 10,
          }}
        >
          <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>Elsan.dev</div>
          <nav
            style={{ display: "flex", gap: "1.5rem", fontSize: "0.95rem" }}
          >
            <a href="/" style={{ textDecoration: "none", color: "#e5e7eb" }}>
              Home
            </a>
            <a
              href="/projects"
              style={{ textDecoration: "none", color: "#e5e7eb" }}
            >
              Projects
            </a>
            <a
              href="/contact"
              style={{
                textDecoration: "none",
                color: "#0f172a",
                background: "#38bdf8",
                padding: "0.4rem 0.9rem",
                borderRadius: "9999px",
                fontWeight: 500,
              }}
            >
              Contact
            </a>
          </nav>
        </header>

        <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem" }}>
          {children}
        </main>

        <footer
          style={{
            borderTop: "1px solid #1f2937",
            padding: "1rem 2rem",
            fontSize: "0.8rem",
            textAlign: "center",
            color: "#9ca3af",
          }}
        >
          © {new Date().getFullYear()} Elsan Memeti – Web Developer
        </footer>
      </body>
    </html>
  );
}
