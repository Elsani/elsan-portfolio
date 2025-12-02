// app/page.js
import Image from "next/image";

export default function HomePage() {
  return (
    <div style={{ display: "grid", gap: "3rem" }}>
      {/* Hero */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,2fr) minmax(0,1.3fr)",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ fontSize: "0.9rem", color: "#38bdf8" }}>
            Web Developer · Next.js · Node.js
          </p>
          <h1
            style={{
              fontSize: "2.5rem",
              margin: "0.5rem 0 1rem",
              fontWeight: 700,
            }}
          >
            Un jam Elsan Memeti👋
          </h1>
          <p style={{ color: "#9ca3af", lineHeight: 1.6 }}>
            Jam Web Developer me fokus në <b></b>
            <strong>Front-end Development (React / Next.js)</strong> dhe <b></b>
            <strong>Backend me Node.js, Express dhe REST API <b></b></strong>
            si dhe arkitekturë moderne web. Kam eksperiencë me projekte reale,
            integrime API dhe clean code & Git workflow.
          </p>

          <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
            <a
              href="/projects"
              style={{
                padding: "0.7rem 1.4rem",
                background: "#38bdf8",
                borderRadius: "9999px",
                textDecoration: "none",
                color: "#0f172a",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
            >
              Shiko projektet
            </a>
            <a
              href="/contact"
              style={{
                padding: "0.7rem 1.4rem",
                borderRadius: "9999px",
                textDecoration: "none",
                color: "#e5e7eb",
                border: "1px solid #374151",
                fontSize: "0.95rem",
              }}
            >
              Kontakto mua
            </a>
          </div>
        </div>

        {/* Foto (opsionale) */}
        <div
          style={{
            justifySelf: "center",
            background:
              "radial-gradient(circle at top, #38bdf8, transparent 60%)",
            padding: "1px",
            borderRadius: "9999px",
          }}
        >
          <div
            style={{
              borderRadius: "9999px",
              overflow: "hidden",
              border: "1px solid #1f2937",
              width: 220,
              height: 220,
              position: "relative",
            }}
          >
            <Image
              src="/profile.jpg" // vendose një foto në /public me këtë emër
              alt="Elsan Memeti"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>Skills</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            fontSize: "0.9rem",
          }}
        >
          {[
            "JavaScript (ES6+)",
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "REST API",
            "MongoDB / MySQL",
            "HTML5",
            "CSS3 / Tailwind",
            "Git & GitHub",
            "Docker (bazë)",
          ].map((skill) => (
            <span
              key={skill}
              style={{
                padding: "0.35rem 0.75rem",
                borderRadius: "9999px",
                border: "1px solid #374151",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
