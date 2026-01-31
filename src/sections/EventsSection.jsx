import { useState } from "react";
import EventOverlay from "../components/EventOverlay";
import EventCard from "../components/EventCard";

/* ================= EVENT DATA ================= */

const technicalEvents = [
  { title: "Competitive Coding", image: "./events/coding.jpg", description: "", rules: "", register: "" },
  { title: "Hackathon", image: "./events/hackathon.jpg", description: "", rules: "", register: "" },
  { title: "Robo Race", image: "./events/roborace.jpg", description: "", rules: "", register: "" },
  { title: "Paper Presentation", image: "./events/paper.jpg", description: "", rules: "", register: "" },
  { title: "Debug the Code", image: "./events/debug.jpg", description: "", rules: "", register: "" },
];

const nonTechnicalEvents = [
  { title: "IPL Auction", image: "./events/ipl.jpg", description: "", rules: "", register: "" },
  { title: "Treasure Hunt", image: "./events/treasure.jpg", description: "", rules: "", register: "" },
  { title: "Photography", image: "./events/photo.jpg", description: "", rules: "", register: "" },
  { title: "Connections", image: "./events/connections.jpg", description: "", rules: "", register: "" },
  { title: "Gaming Arena", image: "./events/gaming.jpg", description: "", rules: "", register: "" },
];

/* ================= MAIN ================= */

export default function EventsSection() {
  const [activeEvent, setActiveEvent] = useState(null);

  return (
    <>
      <section
        id="events"
        style={{
          background: "#050505",
          padding: "80px 8vw",
          color: "white",
        }}
      >
        <SectionTitle text="TECHNICAL EVENTS" />
        <EventGrid events={technicalEvents} setActiveEvent={setActiveEvent} />

        <SectionTitle text="NON-TECHNICAL EVENTS" marginTop />
        <EventGrid events={nonTechnicalEvents} setActiveEvent={setActiveEvent} />
      </section>

      {activeEvent && (
        <EventOverlay
          event={activeEvent}
          onClose={() => setActiveEvent(null)}
        />
      )}
    </>
  );
}

/* ================= GRID ================= */

function EventGrid({ events, setActiveEvent }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "30px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {events.map((e, i) => (
        <EventCard
          key={i}
          title={e.title}
          image={e.image}
          onClick={() => setActiveEvent(e)}
        />
      ))}
    </div>
  );
}

/* ================= TITLE ================= */

function SectionTitle({ text, marginTop }) {
  return (
    <h1
      style={{
        color: "red",
        fontSize: "50px",
        textAlign: "center",
        marginBottom: "60px",
        marginTop: marginTop ? "120px" : "0px",
      }}
    >
      {text}
    </h1>
  );
}
