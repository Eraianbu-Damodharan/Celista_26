import { color } from "three/tsl";

export default function LocationSection() {
  return (
    <section 
    id="location"
    style={section}>
      <h1 style={title}>Our Location</h1>

      <div style={card}>
        {/* MAP */}
        <div style={mapWrap}>
          <iframe
            title="MSEC Location"
            src="https://www.google.com/maps?q=Meenakshi%20Sundararajan%20Engineering%20College&output=embed"
            style={map}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* DETAILS */}
        <div style={details}>
          <h2 style={college}>
            Meenakshi Sundararajan Engineering College
          </h2>

          <p style={line}>
            📍 363, Arcot Rd, Kodambakkam, Chennai,  
            Tamil Nadu 600024
          </p>

          <p style={line}>
            ✉️ celista2k26@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================================================= */
/* STYLES */
/* ================================================= */

const section = {
  padding: "120px 8vw",
  background: "#000",
  color: "red",
  zIndex: 5,
};

const title = {
  textAlign: "center",
  fontSize: "48px",
  marginBottom: "60px",
};

const card = {
  display: "flex",
  gap: "40px",
  background: "linear-gradient(135deg,#050505,#0a0a0a)",
  borderRadius: "24px",
  padding: "40px",
  border: "1px solid rgb(173, 18, 18)",
  boxShadow: "0 0 40px rgba(157, 20, 20, 0.6)",
};

const mapWrap = {
  flex: 1,
  borderRadius: "18px",
  overflow: "hidden",
};

const map = {
  width: "100%",
  height: "300px",
  border: "none",
};

const details = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const college = {
  fontSize: "28px",
  marginBottom: "20px",
    color: "#e8e6e6",
};

const line = {
  fontSize: "18px",
  color: "#e8e6e6",
  marginBottom: "12px",
};
