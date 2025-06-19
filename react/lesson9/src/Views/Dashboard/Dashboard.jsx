import React from "react";

const dashboardStyle = {
 fontFamily: "Segoe UI, sans-serif",
 background: "#f4f6fb",
 minHeight: "100vh",
 padding: "40px",
};

const cardGridStyle = {
 display: "grid",
 gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
 gap: "24px",
 marginTop: "32px",
};

const cardStyle = {
 background: "#fff",
 borderRadius: "16px",
 boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
 padding: "32px 24px",
 display: "flex",
 flexDirection: "column",
 alignItems: "center",
 transition: "transform 0.2s",
};

const iconStyle = {
 width: "48px",
 height: "48px",
 marginBottom: "16px",
};

const titleStyle = {
 fontSize: "1.2rem",
 fontWeight: 600,
 marginBottom: "8px",
 color: "#22223b",
};

const valueStyle = {
 fontSize: "2rem",
 fontWeight: 700,
 color: "#4a4e69",
};

const Dashboard = () => {
 return (
  <div style={dashboardStyle}>
   <h1 style={{ fontWeight: 700, color: "#22223b" }}>Dashboard</h1>
   <div style={cardGridStyle}>
    {/* Users Card */}
    <div style={cardStyle}>
     <svg style={iconStyle} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="16" r="10" fill="#4a90e2" />
      <rect x="8" y="30" width="32" height="12" rx="6" fill="#dbeafe" />
     </svg>
     <div style={titleStyle}>Users</div>
     <div style={valueStyle}>1,245</div>
    </div>
    {/* Revenue Card */}
    <div style={cardStyle}>
     <svg style={iconStyle} viewBox="0 0 48 48" fill="none">
      <rect x="8" y="16" width="32" height="20" rx="6" fill="#34d399" />
      <path d="M16 28h16" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 22h16" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
     </svg>
     <div style={titleStyle}>Revenue</div>
     <div style={valueStyle}>$8,900</div>
    </div>
    {/* Orders Card */}
    <div style={cardStyle}>
     <svg style={iconStyle} viewBox="0 0 48 48" fill="none">
      <rect x="10" y="14" width="28" height="20" rx="6" fill="#fbbf24" />
      <circle cx="24" cy="24" r="6" fill="#fff" />
      <path d="M24 18v12" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
     </svg>
     <div style={titleStyle}>Orders</div>
     <div style={valueStyle}>320</div>
    </div>
    {/* Messages Card */}
    <div style={cardStyle}>
     <svg style={iconStyle} viewBox="0 0 48 48" fill="none">
      <rect x="8" y="12" width="32" height="24" rx="8" fill="#a78bfa" />
      <path d="M16 24h16" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 28h10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
     </svg>
     <div style={titleStyle}>Messages</div>
     <div style={valueStyle}>87</div>
    </div>
   </div>
  </div>
 );
};

export default Dashboard;