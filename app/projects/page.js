// app/projects/page.js
const projects = [
  {
    title: "Taxi Booking Web App",
    tech: ["React", "Node.js", "MongoDB"],
    description:
      "Aplikacion web për rezervim taxi me dashboard për admin dhe email notifications.",
    link: "#",
  },
  {
    title: "Trading Dashboard XAU/USD",
    tech: ["Next.js", "REST API", "Chart.js"],
    description:
      "Dashboard për monitorim të sinjaleve të tradingut dhe analizë të performancës.",
    link: "#",
  },
  {
    title: "HR & Employee Management",
    tech: ["Java", "Spring Boot", "MySQL"],
    description:
      "Sistem për menaxhimin e punonjësve dhe orëve të punës si pjesë e diplomës.",
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Projects</h1>
      <p style={{ color: "#9ca3af", marginBottom: "2rem" }}>
        Disa nga projektet ku jam fokusuar në backend & frontend development.
      </p>

      <div
        style={{
          display: "grid",
          gap: "1.5rem",
        }}
      >
        {projects.map((project) => (
          <article
            key={project.title}
            style={{
              padding: "1.5rem",
              borderRadius: "1rem",
              border: "1px solid #1f2937",
              background:
                "linear-gradient(135deg, rgba(55,65,81,0.3), rgba(15,23,42,0.9))",
            }}
          >
            <h2 style={{ fontSize: "1.3rem", marginBottom: "0.3rem" }}>
              {project.title}
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#9ca3af" }}>
              {project.description}
            </p>
            <div
              style={{
                marginTop: "0.7rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.35rem",
                fontSize: "0.8rem",
              }}
            >
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: "0.25rem 0.6rem",
                    borderRadius: "9999px",
                    border: "1px solid #374151",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
