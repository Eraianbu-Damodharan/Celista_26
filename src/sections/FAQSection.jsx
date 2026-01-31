import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How can I register for the events?",
      a: "Registration is simple! Click on any event that interests you to view its details, then click the Register button to complete your registration through our online portal.",
    },
    {
      q: "Is there a registration fees?",
      a: "There are no registration fees for any events. Just register and participate to enjoy the events completely free of charge.",
    },
    {
      q: "Will certificate be provided?",
      a: "Yes, all participants will receive certificates of participation. Winners will receive special certificates acknowledging their achievement.",
    },
    {
      q: "Does the college provide transportation facilities for other college participants?",
      a: "No, the college does not provide any type of transportation facilities. It is easily accessible through public transportation.",
    },
    {
      q: "What are the nearest public transportation available?",
      a: "You can access the nearest Bus Stop: Liberty (Meenakshi College), Local Railway Station: Kodambakkam, Metro Station: Vadapalani.",
    },
  ];

  return (
    <section
      style={{
        padding: "120px 6vw",
        background: "#000",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* TITLE */}
      <h1
        style={{
          fontSize: "52px",
          marginBottom: "60px",
          color: "red",
        }}
      >
        Frequently Asked Questions
      </h1>

      {/* ACCORDION */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          borderRadius: "20px",
          border: "1px solid rgba(255,0,0,0.4)",
          overflow: "hidden",
          background: "#0b0b0b",
        }}
      >
        {faqs.map((item, index) => (
          <div key={index}>
            {/* QUESTION */}
            <div
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              style={{
                padding: "22px 28px",
                cursor: "pointer",
                textAlign: "left",
                fontSize: "18px",
                borderBottom: "1px solid rgba(255,0,0,0.25)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background:
                  openIndex === index
                    ? "rgba(255,0,0,0.08)"
                    : "transparent",
              }}
            >
              {item.q}

              <span style={{ fontSize: 22 }}>
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {/* ANSWER */}
            {openIndex === index && (
              <div
                style={{
                  padding: "20px 28px",
                  textAlign: "center",
                  color: "#ccc",
                  lineHeight: 1.7,
                  background: "#111",
                }}
              >
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
