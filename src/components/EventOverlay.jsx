export default function EventOverlay({ event, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "black",
        zIndex: 999,
        padding: "80px 12%",
        color: "white",
        overflowY: "auto",
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "fixed",
          top: 100,
          right: 40,
          background: "none",
          border: "1px solid red",
          color: "red",
          padding: "10px 22px",
          borderRadius: "12px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        ✕ CLOSE
      </button>

      <h1 style={{ color: "red",textAlign: "center", fontSize: "64px" }}>{event.title}</h1>
      <p style={{ opacity: 0.6,textAlign: "center", marginTop: "10px" }}>{event.type} Event</p>

      <div style={{ marginTop: "50px", fontSize: "20px", lineHeight: 1.7 }}>
        <p><b>Description:</b> {event.description}</p>
        <p style={{ marginTop: "24px" }}><b>Rules:</b> {event.rules}</p>
        <p style={{ marginTop: "24px" }}><b>Registration:</b> {event.register}</p>
      </div>
    </div>
  );
}
