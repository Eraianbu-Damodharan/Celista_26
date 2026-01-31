import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function CreditsOverlay({ onClose }) {
  /* ================= TEAM DATA ================= */

  const teams = [
    { title: "Website Team", names: ["Name1","Name2","Name3","Name4","Name5"] },
    { title: "Organising Team", names: ["Name1","Name2","Name3","Name4","Name5"] },
    { title: "Editing Team", names: ["Name1","Name2","Name3","Name4","Name5"] },
    { title: "Design Team", names: ["Name1","Name2","Name3","Name4","Name5"] },
    { title: "Event Coordinators", names: ["Name1","Name2","Name3","Name4","Name5"] },
    { title: "Event Co-ordinators", names: ["Name1","Name2","Name3","Name4","Name5"] },
    { title: "Staff Coordinators", names: ["Name1","Name2","Name3","Name4","Name5"] },
  ];

  /*
    phase:
    0 = logo
    1..teams.length = teams
    last = thank you
  */

  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let time = 0;

    // logo 3s
    setTimeout(() => setPhase(1), 3000);

    // teams 5s each
    teams.forEach((_, i) => {
      time = 3000 + (i + 1) * 5000;
      setTimeout(() => setPhase(i + 2), time);
    });

  }, []);

  const isLogo = phase === 0;
  const isThankYou = phase === teams.length + 1;
  const currentTeam = teams[phase - 1];

  /* ================= UI ================= */

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        zIndex: 9999,
        color: "white",
        display: "flex",
        fontFamily: "Array, sans-serif",
      }}
    >
      {/* ================= LOGO FIRST ================= */}
      {isLogo && (
        <CenterBlock>
            <img
            src={logo}
            alt="Celista Logo"
            style={{
                width: "260px",
                height: "260px",
                objectFit: "contain",
                marginBottom: "25px",
            }}
            />

            <h2
            style={{
                fontSize: "42px",
                letterSpacing: "4px",
                color: "white",
            }}
            >
            Celista 2K26
            </h2>
        </CenterBlock>
        )}



      {/* ================= TEAM PAGES ================= */}
      {!isLogo && !isThankYou && (
        <>
          {/* LEFT CREDITS TEXT */}
          <div
            style={{
              width: "30%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 80,
              color: "#ddd",
            }}
          >
            Credits
          </div>

          {/* LINE */}
          <div
            style={{
              width: 2,
              background: "red",
              opacity: 0.6,
            }}
          />

          {/* RIGHT CONTENT */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "red", fontSize: 36, marginBottom: 30 }}>
              {currentTeam.title}
            </h2>

            {currentTeam.names.map((n, i) => (
              <p key={i} style={{ fontSize: 22, margin: 8 }}>
                {n}
              </p>
            ))}
          </div>
        </>
      )}

      {/* ================= THANK YOU ================= */}
      {isThankYou && (
        <CenterBlock>
          <h1 style={{ fontSize: 80, marginBottom: 40 }}>
            Thank You
          </h1>

          <button
            onClick={onClose}
            style={{
              padding: "14px 38px",
              background: "red",
              border: "none",
              borderRadius: 12,
              color: "white",
              fontSize: 18,
              cursor: "pointer",
            }}
          >
            Explore Events
          </button>
        </CenterBlock>
      )}
    </div>
  );
}

/* ================= HELPER ================= */

function CenterBlock({ children }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
}
