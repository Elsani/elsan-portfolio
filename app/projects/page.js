// app/projects/page.js
const projects = [
  {
    title: "Spring crude demo",
    tech: ["Spring Boot", "Java OOP", "CSS"],
    description:
      "Spring Boot CRUD application, and Cloud vendor",
    link: "https://github.com/Elsani/spring-crud-demo",
  },
  {
    title: "Netflix-Clone",
    tech: ["React.js", "Node.js", "CSS"],
    description:
      "Netflix Clone web application. with dashboard",
    link: "https://github.com/Elsani/netflix-clone/tree/main/netflix-clon",
  },
  {
    title: "HR & Employee Management",
    tech: ["Java", "Spring Boot", "MySQL"],
    description:
      "An employee and working-hours management system built as part of my bachelor thesis project.",
    link: "https://github.com/Elsani/EmployeeManagment",
  },
    {
    title: "URL-shortener web application",
    tech: ["Java", "Spring Boot", "MySQL"],
    description:
      "The URL shortener allows you to create shortened links, making them easier to share.",
    link: "https://github.com/Elsani/URL-Shortener-Project",
  },
    {
    title: "Fitness Gym website",
    tech: ["Javascript", "Vue.js", "CSS"],
    description:
      "AFitness gym website – a frontend project designed for companies that operate fitness centers.",
    link: "https://github.com/Elsani/FitnesGym",
  },
    {
    title: "Raiffeisen Bank Database",
    tech: ["MySQL"],
    description:
      "An example of designing and building a MySQL database for Raiffeisen Bank.",
    link: "https://github.com/Elsani/Raiffeisen-Bank-Mysql",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Projects</h1>
      <p style={{ color: "#9ca3af", marginBottom: "2rem" }}>
        A set of projects where I contributed to both frontend and backend development, 
        including API integration and modern web architecture.
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
              <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                color: "white",
                textDecoration: "underline",
                marginTop: "1rem",
                display: "inline-block",
              }}
            >&nbsp
              <b>Open GitHub → </b>
            </a>
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
