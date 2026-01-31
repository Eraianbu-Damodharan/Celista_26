import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  /* blur background after scroll */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = {
    cursor: "pointer",
    letterSpacing: "2px",
    fontSize: "15px",
    color: "white",
    textDecoration: "none",
    transition: "0.25s",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "70px",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        padding: "0 60px",
        zIndex: 9999,

        background: scrolled
          ? "rgba(0,0,0,0.85)"
          : "transparent",

        backdropFilter: scrolled ? "blur(10px)" : "none",

        borderBottom: scrolled
          ? "1px solid rgba(255,0,0,0.25)"
          : "none",

        transition: "0.3s",
      }}
    >
      {/* ================= LEFT BRAND ================= */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        {/* LOGO */}
        <img
          src={logo}
          alt="Celista Logo"
          style={{
            width: "60px",
            height: "60px",
            objectFit: "contain",
            alignItems: "center",
          }}
        />

        {/* TEXT */}
        <h2
          style={{
            color: "red",
            fontWeight: 800,
            letterSpacing: "3px",
            margin: 0,
          }}
        >
          CELISTA
        </h2>
      </div>

      {/* ================= LINKS ================= */}
      <div
        style={{
          display: "flex",
          gap: "40px",
        }}
      >
        <a href="#hero" style={linkStyle}>HOME</a>
        <a href="#about" style={linkStyle}>ABOUT</a>
        <a href="#events" style={linkStyle}>EVENTS</a>
        <a href="#location" style={linkStyle}>LOCATION</a>
        <a href="#contact" style={linkStyle}>CONTACTS</a>
      </div>
    </nav>
  );
}
