import { useEffect, useRef } from "react";

export default function Shuffle({
  text,
  pause = 3000,        // ⭐ 3 seconds text visible
  shuffleSpeed = 120,  // ⭐ slower symbol speed
  cycles = 18          // ⭐ how many symbol frames
}) {
  const ref = useRef(null);
  const timerRef = useRef(null);

  const symbols = "!@#$%^&*()_+-=<>?/{}[]";

  /* ================= RANDOM SYMBOL STRING ================= */
  const randomSymbols = () =>
    text
      .split("")
      .map(c =>
        c === " "
          ? " "
          : symbols[Math.floor(Math.random() * symbols.length)]
      )
      .join("");

  /* ================= LOOP FUNCTION ================= */
  const runLoop = async () => {
    const el = ref.current;
    if (!el) return;

    // 🔴 slow shuffle burst
    for (let i = 0; i < cycles; i++) {
      el.textContent = randomSymbols();
      await new Promise(r => setTimeout(r, shuffleSpeed));
    }

    // ✅ show real text
    el.textContent = text;

    // ✅ wait 3s
    timerRef.current = setTimeout(runLoop, pause);
  };

  /* ================= START ================= */
  const startShuffle = () => {
    if (timerRef.current) return;
    runLoop();
  };

  /* ================= STOP ================= */
  const stopShuffle = () => {
    clearTimeout(timerRef.current);
    timerRef.current = null;
    if (ref.current) ref.current.textContent = text;
  };

  /* ================= SCROLL CONTROL ================= */
  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY <= 5;

      if (atTop) startShuffle();
      else stopShuffle();
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      stopShuffle();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [text]);

  return (
    <span
      ref={ref}
      style={{
        letterSpacing: "4px",
        whiteSpace: "pre"
      }}
    >
      {text}
    </span>
  );
}
