// app/contact/page.js
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.currentTarget);
    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      setStatus("Mesazhi u dërgua ✅");
      e.currentTarget.reset();
    } else {
      setStatus("Diçka shkoi keq ❌");
    }
  }

  return (
    <div style={{ maxWidth: "520px" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Contact</h1>
      <p style={{ color: "#9ca3af", marginBottom: "1.5rem" }}>
        If you are looking for a Web Developer, feel free to reach out here:
      </p>

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: "1rem", fontSize: "0.95rem" }}
      >
        <div>
          <label>Name</label>
          <input
            name="name"
            required
            style={{
              width: "100%",
              marginTop: "0.3rem",
              padding: "0.6rem 0.8rem",
              borderRadius: "0.6rem",
              border: "1px solid #374151",
              background: "#020617",
              color: "#e5e7eb",
            }}
          />
        </div>
        <div>
          <label>Email Address</label>
          <input
            name="email"
            type="email"
            required
            style={{
              width: "100%",
              marginTop: "0.3rem",
              padding: "0.6rem 0.8rem",
              borderRadius: "0.6rem",
              border: "1px solid #374151",
              background: "#020617",
              color: "#e5e7eb",
            }}
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            name="message"
            rows={4}
            required
            style={{
              width: "100%",
              marginTop: "0.3rem",
              padding: "0.6rem 0.8rem",
              borderRadius: "0.6rem",
              border: "1px solid #374151",
              background: "#020617",
              color: "#e5e7eb",
              resize: "vertical",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            marginTop: "0.5rem",
            padding: "0.7rem 1.4rem",
            borderRadius: "9999px",
            border: "none",
            background: "#38bdf8",
            color: "#0f172a",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Send
        </button>

        {status && (
          <p style={{ fontSize: "0.9rem", color: "#9ca3af" }}>{status}</p>
        )}
      </form>
    </div>
  );
}
