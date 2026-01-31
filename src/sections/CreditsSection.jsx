import { useState } from "react";
import CreditsOverlay from "../components/CreditsOverlay";

export default function CreditsSection({ setShowTimer }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        style={{
          padding: "120px 0",
          textAlign: "center",
          background: "#000000",
        }}
      >
        <h1 style={{ fontSize: 52, marginBottom: 40,color:"red" }}>
          Meet The Crew
        </h1>

        <button
          onClick={() => {setShowTimer(false);setOpen(true);}}
          style={{
            padding: "18px 40px",
            fontSize: 20,
            borderRadius: 14,
            background: "rgba(120,0,0,0.85)",
            border: "none",
            color: "white",
            cursor: "pointer",
            boxShadow: "0 0 25px rgba(240, 2, 2, 0.6)",
          }}
        >
          View Our Team
        </button>
      </section>

      {open && <CreditsOverlay onClose={() => {setShowTimer(true);setOpen(false);}} />}
    </>
  );
}
