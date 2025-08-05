
import React from "react";
import ServicesSection from "./components/ServicesSection";
import { useNavigate } from "react-router-dom";

function ServicesPage() {
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
      <ServicesSection />
    </div>
  );
}

export default ServicesPage;
