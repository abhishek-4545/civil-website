
import React from "react";
import AboutUsSection from "./components/AboutUsSection";
import { useNavigate } from "react-router-dom";

function AboutUsPage() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        style={{
          margin: "16px 0",
          padding: "8px 16px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Back
      </button>
      <AboutUsSection />
    </div>
  );
}

export default AboutUsPage;
