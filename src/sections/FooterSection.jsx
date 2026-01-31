import logo from "../assets/logo.png";

export default function FooterSection() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#050505",
        color: "white",
        padding: "70px 8vw 40px",
        borderTop: "1px solid rgba(255,0,0,0.25)",
        position: "relative",
      }}
    >
      {/* ================= TOP AREA ================= */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "60px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT — LOGO + TITLE */}
        <div style={{ maxWidth: 300 }}>
          <img
            src={logo}
            alt="logo"
            style={{
              width: 55,
              marginBottom: 14,
            }}
          />

          <h2
            style={{
              fontSize: 26,
              marginBottom: 8,
              color: "#ff2a2a",
            }}
          >
            Celista 2K26
          </h2>

          <p style={{ color: "#aaa", fontSize: 14 }}>
            A National Level Technical Symposium
          </p>
        </div>

        {/* RIGHT — CONTACT */}
        <div>
          <h3
            style={{
              marginBottom: 14,
              color: "#ff2a2a",
              fontSize: 18,
            }}
          >
            Contact Us
          </h3>

          <p style={{ color: "#ccc", marginBottom: 6 }}>
            📍 363, Arcot Rd, Kodambakkam, Chennai – 600024
          </p>

          <p style={{ color: "#ccc", marginBottom: 6 }}>
            📞 +91 9171692531
          </p>

          <p style={{ color: "#ccc" }}>
            ✉ celista.2k26@gmail.com
          </p>
        </div>
      </div>

      {/* ================= DIVIDER ================= */}
      <div
        style={{
          margin: "40px 0 20px",
          height: 1,
          background: "rgba(255,0,0,0.25)",
        }}
      />

      {/* ================= BOTTOM TEXT ================= */}
      <div
        style={{
          textAlign: "center",
          color: "#888",
          fontSize: 14,
          lineHeight: 1.8,
        }}
      >
        © 2026 Celista | AI&DS, Meenakshi Sundararajan Engineering College. All rights reserved.
        <br />
        Designed with <span style={{ color: "red" }}>♥</span> by the Celista team.
      </div>

{/* ================= SCROLL TO TOP BUTTON ================= */}
<button
  onClick={scrollTop}
  style={{
    position: "absolute",   // ⭐ changed (IMPORTANT)
    right: 30,
    bottom: 30,

    width: 48,
    height: 48,
    borderRadius: 12,
    border: "none",
    background: "#ff2a2a",
    color: "white",
    fontSize: 22,
    cursor: "pointer",
    boxShadow: "0 0 15px rgba(255,0,0,0.6)",
  }}
>
  ↑
</button>

    </footer>
  );
}
