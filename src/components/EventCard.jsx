import PixelTransition from "./reactbits/PixelTransition";

export default function EventCard({ title, image, onClick }) {
  return (
    <PixelTransition
      className="event-pixel-card"
      gridSize={12}
      pixelColor="red"
      animationStepDuration={0.22}
      once={false}

      /* ================= NORMAL STATE (poster) ================= */
      firstContent={
        <div
          onClick={onClick}
          style={{
            width: "100%",
            height: "100%",
            cursor: "pointer",
            borderRadius: "18px",
            overflow: "hidden",
          }}
        >
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      }

      /* ================= HOVER STATE (text overlay) ================= */
      secondContent={
        <div
          onClick={onClick}
          style={{
            width: "100%",
            height: "100%",
            background: "#0b0b0b",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "1.5px solid red",
            borderRadius: "18px",
            cursor: "pointer",
            position: "relative",
          }}
        >
          <h2
            style={{
              color: "red",
              fontSize: "22px",
              textAlign: "center",
            }}
          >
            {title}
          </h2>

          {/* small corner text */}
          <span
            style={{
              position: "absolute",
              bottom: "10px",
              right: "14px",
              fontSize: "12px",
              color: "#aaa",
              opacity: 0.8,
            }}
          >
            click to view →
          </span>
        </div>
      }
    />
  );
}
