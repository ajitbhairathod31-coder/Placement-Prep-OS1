const resumeSections = [
  { title: "Projects", value: "2 added" },
  { title: "Skills", value: "React, JavaScript, SQL" },
  { title: "Experience", value: "1 internship" },
  { title: "Achievements", value: "Hackathon Finalist" },
];

export default function Resume() {
  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Resume</h1>
      <p>Improve your resume step by step.</p>

      <div
        style={{
          background: "#ffffff",
          borderRadius: "12px",
          padding: "16px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          marginTop: "20px",
          marginBottom: "16px",
        }}
      >
        <h2 style={{ margin: 0 }}>Resume Score: 70%</h2>
      </div>

      <div style={{ display: "grid", gap: "12px" }}>
        {resumeSections.map((section) => (
          <div
            key={section.title}
            style={{
              background: "#ffffff",
              borderRadius: "12px",
              padding: "16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ margin: "0 0 8px 0" }}>{section.title}</h3>
            <p style={{ margin: 0 }}>{section.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
