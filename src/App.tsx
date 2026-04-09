import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Roadmap from "./pages/Roadmap";
import Resume from "./pages/Resume";
import Applications from "./pages/Applications";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
        <div
          style={{
            width: "220px",
            background: "#111827",
            color: "#ffffff",
            padding: "20px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Prep OS</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "24px" }}>
            <Link to="/" style={linkStyle}>
              Dashboard
            </Link>
            <Link to="/roadmap" style={linkStyle}>
              Roadmap
            </Link>
            <Link to="/resume" style={linkStyle}>
              Resume
            </Link>
            <Link to="/applications" style={linkStyle}>
              Applications
            </Link>
          </div>
        </div>

        <div style={{ flex: 1, background: "#f3f4f6", padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/applications" element={<Applications />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

const linkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  padding: "10px 12px",
  background: "#1f2937",
  borderRadius: "8px",
};
