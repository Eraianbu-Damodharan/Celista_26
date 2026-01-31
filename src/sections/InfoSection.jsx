import { useState, useEffect } from "react";
import FogBackground from "../components/FogBackground";

export default function InfoSection() {
  const infos = [
    {
      title: "Meenakshi Sundararajan Engineering College",
      text:
        "Meenakshi Sundararajan Engineering College, founded in 2001 under IIET Society, is part of the esteemed KRS Group. Upholding a legacy of excellence, MSEC focuses on quality education, discipline, and holistic development, producing skilled engineers with strong ethics for industry and national growth.",
    },
    {
      title: "Department of Artificial Intelligence & Data Science",
      text:
        "The Department of Artificial Intelligence and Data Science, established in 2021 under Mrs. Mathangi Narayanan, is a center for innovation and excellence. With advanced labs, cutting-edge tools, and strong industry collaborations (Microsoft, Infosys, CTS, TCS), it equips students with essential skills to drive AI and data science advancements under expert faculty guidance.",
    },
    {
      title: "Celista Symposium",
      text:
        "Celista represents the celestial domain that extends beyond our reach just as the sphere of AI. Our symposium brings together young minds from various domains to faster collaboration and empowerment.",
    },
  ];

  return (
    <section
      style={{
        background: "#000",
        padding: "120px 8vw",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Fog */}
      <FogBackground />

      <div style={{ position: "relative", zIndex: 2 }}>
        <h1
          style={{
            fontSize: "64px",
            textAlign: "center",
            marginBottom: "80px",
            color: "red",
            fontWeight: "bold",
          }}
        >
          About Us
        </h1>

        {infos.map((item, index) => (
          <SpotlightCard key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </section>
  );
}

/* ===================================================
   ⭐ Premium Cursor Spotlight Card (clean + soft)
   =================================================== */
function SpotlightCard({ title, text }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  /* ⭐ remove glow on scroll (fix stuck bug) */
  useEffect(() => {
    const stopGlow = () => setHover(false);
    window.addEventListener("scroll", stopGlow);
    return () => window.removeEventListener("scroll", stopGlow);
  }, []);

  return (
    <div
      onMouseMove={handleMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        borderRadius: "22px",
        padding: "60px",
        marginBottom: "60px",

        border: "1px solid rgba(255,0,0,0.35)",

        /* ⭐ ONLY glow when hovering */
        background: hover
          ? `
            radial-gradient(
                ellipse 50% 100% at ${pos.x}px ${pos.y}px,
                rgba(255,0,0,0.18),
                transparent 100%
            ),
            linear-gradient(135deg,#0b0b0b,#111)
          `
          : "linear-gradient(135deg,#0b0b0b,#111)",

        transition: "background 0.12s ease",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          color: "red",
          marginBottom: "20px",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          fontSize: "18px",
          lineHeight: 1.9,
          color: "#ddd",
        }}
      >
        {text}
      </p>
    </div>
  );
}
