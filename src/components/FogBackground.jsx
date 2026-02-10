import fog from "../assets/fog.png";

export default function FogBackground() {
  return (
    <div
      className="fog-bg"
      style={{
        backgroundImage: `url(${fog})`,
        zIndex: 10,
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        pointerEvents: "none",
        opacity: 0.3,
      }}
    />
  );
}
