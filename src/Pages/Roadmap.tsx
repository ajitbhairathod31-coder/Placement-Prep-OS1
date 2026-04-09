const tasks = [
  { category: "DSA", title: "Arrays Basics", status: "Pending" },
  { category: "Aptitude", title: "Time and Work", status: "Completed" },
  { category: "Core", title: "DBMS Normalization", status: "Pending" },
  { category: "Projects", title: "Portfolio Website", status: "In Progress" },
  { category: "Resume", title: "Update Skills Section", status: "Pending" },
];

export default function Roadmap() {
  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Roadmap</h1>
      <p>Track your placement preparation tasks.</p>

      <div style={{ marginTop: "20px", display: "grid", gap: "12px" }}>
        {tasks.map((task, index) => (
          <div
            key={index}
            style={{
              background: "#ffffff",
              borderRadius: "12px",
              padding: "16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ margin: "0 0 8px 0" }}>{task.title}</h3>
            <p style={{ margin: "4px 0" }}>
              <strong>Category:</strong> {task.category}
            </p>
            <p style={{ margin: "4px 0" }}>
              <strong>Status:</strong> {task.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
