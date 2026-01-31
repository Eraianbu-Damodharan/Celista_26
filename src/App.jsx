import { useState } from "react";
import ThreeCanvas from "./three/ThreeCanvas";
import InfoSection from "./sections/InfoSection";
import EventsSection from "./sections/EventsSection";
import CountdownTimer from "./components/CountdownTimer";
import LocationSection from "./sections/LocationSection";
import ContactSection from "./sections/ContactSection";
import CreditsSection from "./sections/CreditsSection";
import FAQSection from "./sections/FAQSection";
import FooterSection from "./sections/FooterSection";
import Shuffle from "./components/reactbits/Shuffle";


export default function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <>
      {/* ⭐ TIMER (controlled visibility) */}
      {showTimer && <CountdownTimer />}

      {/* ================= HERO ================= */}
      <section
        id="hero"
        style={{
          position: "relative",
          height: "228vh",
          background: "#000",
          overflow: "hidden",
        }}
      >
        <ThreeCanvas />

        {/* TEXT OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 5,
            pointerEvents: "none",
          }}
        >
          <h1
            style={{
              fontSize: "78px",
              fontWeight: 700,
              letterSpacing: "4px",
              color: "#bbbbbb",
            }}
          >
            <Shuffle
              text="CELISTA 2K26"
              pause={5000}
              shuffleSpeed={60}
              cycle={15}
            />

          </h1>

          <p
            style={{
              marginTop: "14px",
              fontSize: "24px",
              letterSpacing: "10px",
              color: "#bbbbbb",
            }}
          >
            A National Level Technical Symposium
          </p>
        </div>
      </section>

      {/* ================= INFO ================= */}
      <InfoSection />

      {/* ================= EVENTS ================= */}
      <EventsSection />

      {/* ================= LOCATION ================= */}
      <LocationSection />

      {/* ================= CONTACT ================= */}
      <ContactSection />

      {/* ================= CREDITS ================= */}
      <CreditsSection setShowTimer={setShowTimer} />
      {/* ================= FAQ ================= */}
      <FAQSection />
      {/* ================= FOOTER ================= */}
      <FooterSection />
    </>
  );
}
