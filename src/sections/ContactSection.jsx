export default function ContactSection() {
  const sectionStyle = {
    background: "#000",
    padding: "120px 8vw",
    color: "white",
    zIndex: 5,
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "60px",
    color: "red",
    marginBottom: "70px",
    letterSpacing: "4px",
  };

  const cardStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "60px",
    justifyContent: "center",

    background: "rgba(0,0,0,0.9)",
    border: "2px solid rgba(255,0,0,0.6)",
    borderRadius: "26px",

    padding: "60px",

    backdropFilter: "blur(10px)",
    boxShadow: "0 0 35px rgba(255,0,0,0.25)",
  };

  const columnStyle = {
    flex: 1,
    minWidth: "280px",
    textAlign: "center",
  };

  const subTitleStyle = {
    fontSize: "28px",
    color: "white",
    marginBottom: "30px",
  };

  const itemStyle = {
    display: "block",
    marginBottom: "18px",
    padding: "16px",
    borderRadius: "12px",

    background: "rgba(255,0,0,0.08)",
    border: "1px solid rgba(255,0,0,0.4)",

    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    cursor: "pointer",
    transition: "0.3s",
  };

  return (
    <section 
    
    id="contact"
    style={sectionStyle}>
      {/* TITLE */}
      <h1 style={titleStyle}>Contact Us</h1>

      {/* MAIN CARD */}
      <div style={cardStyle}>

        {/* STAFF */}
        <div style={columnStyle}>
          <h2 style={subTitleStyle}>Staff Coordinators</h2>

          <ContactItem number="+91 " style={itemStyle} />
          <ContactItem number="+91 " style={itemStyle} />
        </div>

        {/* STUDENT */}
        <div style={columnStyle}>
          <h2 style={subTitleStyle}>Student Coordinators</h2>

          <ContactItem number="+91 " style={itemStyle} />
          <ContactItem number="+91 " style={itemStyle} />
        </div>

      </div>
    </section>
  );
}


/* ================= PHONE ITEM ================= */

function ContactItem({ number, style }) {
  return (
    <a
      style={style}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,0,0,0.18)";
        e.currentTarget.style.boxShadow = "0 0 14px rgba(255,0,0,0.6)";
        e.currentTarget.style.transform = "scale(1.04)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,0,0,0.08)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      📞 {number}
    </a>
  );
}
