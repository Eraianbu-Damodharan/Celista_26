import fog from "../assets/fog.png";

export default function FogBackground() {
  return (
    <div
      className="fog-bg"
      style={{
        backgroundImage: `url(${fog})`,
      }}
    />
  );
}
