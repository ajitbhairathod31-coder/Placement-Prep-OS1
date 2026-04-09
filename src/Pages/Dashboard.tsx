export default function Dashboard() {
  const cards = [
    { title: "Readiness Score", value: "60%" },
    { title: "Current Streak", value: "5 days" },
    { title: "Today's Tasks", value: "3" },
    { title: "Roadmap Progress", value: "40%" },
    { title: "Applications", value: "10" },
    { title: "Resume Score", value: "70%" },
  ];

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Dashboard</h1>
      <p>Welcome to Placement Prep OS.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              background: "#ffffff",
              borderRadius: "12px",
              padding: "16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <p style={{ margin: 0, color: "#6b7280" }}>{card.title}</p>
            <h2 style={{ margin: "10px 0 0 0" }}>{card.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
