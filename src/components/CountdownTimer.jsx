import { useEffect, useState } from "react";

export default function CountdownTimer() {
  // ⭐ SET YOUR SYMPOSIUM DATE HERE
  const target = new Date("2026-03-10T09:00:00").getTime();

  const [time, setTime] = useState(getTime());

  function getTime() {
    const now = new Date().getTime();
    const diff = target - now;

    // ⭐ freeze at 0 after completion
    if (diff <= 0) {
      return { d: 0, h: 0, m: 0, s: 0 };
    }

    return {
      d: Math.floor(diff / (1000 * 60 * 60 * 24)),
      h: Math.floor((diff / (1000 * 60 * 60)) % 24),
      m: Math.floor((diff / (1000 * 60)) % 60),
      s: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={wrapper}>
      <TimeBlock value={time.d} label="Days" />
      <TimeBlock value={time.h} label="Hours" />
      <TimeBlock value={time.m} label="Minutes" />
      <TimeBlock value={time.s} label="Seconds" />
    </div>
  );
}

/* ================================================= */
/* BLOCK */
/* ================================================= */

function TimeBlock({ value, label }) {
  return (
    <div style={block}>
      <div style={number}>{String(value).padStart(2, "0")}</div>
      <div style={text}>{label}</div>
    </div>
  );
}

/* ================================================= */
/* STYLES */
/* ================================================= */

const wrapper = {
  position: "fixed",
  top: "25px",
  left: "25px",

  display: "flex",
  gap: "14px",

  zIndex: 9999, // always visible

  fontFamily: "Orbitron, sans-serif",
};

const block = {
  background: "rgba(0,0,0,0.75)",
  border: "1px solid red",

  padding: "12px 14px",
  borderRadius: "12px",

  textAlign: "center",
  minWidth: "70px",

  backdropFilter: "blur(8px)",
};

const number = {
  fontSize: "22px",
  fontWeight: "bold",
  color: "white",
};

const text = {
  fontSize: "11px",
  color: "red",
  marginTop: "4px",
  letterSpacing: "1px",
};
