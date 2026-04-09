const applications = [
  { company: "Google", role: "SDE Intern", status: "Applied", date: "2026-04-01" },
  { company: "Amazon", role: "SDE", status: "Interview", date: "2026-04-03" },
  { company: "Flipkart", role: "Frontend Intern", status: "OA", date: "2026-04-05" },
];

export default function Applications() {
  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Applications</h1>
      <p>Track all your job applications here.</p>

      <div style={{ marginTop: "20px", display: "grid", gap: "12px" }}>
        {applications.map((app, index) => (
          <div
            key={index}
            style={{
              background: "#ffffff",
              borderRadius: "12px",
              padding: "16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ margin: "0 0 8px 0" }}>
              {app.company} - {app.role}
            </h3>
            <p style={{ margin: "4px 0" }}>
              <strong>Status:</strong> {app.status}
            </p>
            <p style={{ margin: "4px 0" }}>
              <strong>Applied Date:</strong> {app.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
