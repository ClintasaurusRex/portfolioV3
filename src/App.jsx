import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import components
import CosmicBackground from "./components/CosmicBackground";
import CosmicEra from "./components/CosmicEra";

// Import data
import cosmicData from "./data";

function App() {
  const [currentEra, setCurrentEra] = useState("big-bang");

  // Create an array of era data for easier navigation
  const eras = [
    cosmicData.bigBang,
    cosmicData.starFormation,
    cosmicData.planetarySystems,
    cosmicData.lifeEvolution,
    cosmicData.modernEra,
  ];

  // Find current era data
  const currentEraData = eras.find((era) => era.id === currentEra);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflowX: "hidden",
        fontFamily: "sans-serif",
      }}
    >
      {/* Dynamic cosmic background */}
      <CosmicBackground era={currentEra} />

      {/* Main navigation */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          display: "flex",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.5rem",
            backdropFilter: "blur(4px)",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            padding: "0.5rem",
            borderRadius: "9999px",
          }}
        >
          {eras.map((era) => (
            <button
              key={era.id}
              onClick={() => setCurrentEra(era.id)}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
                border: "none",
                backgroundColor: currentEra === era.id ? era.color : "transparent",
                color: currentEra === era.id ? "black" : "rgba(156, 163, 175, 1)",
                boxShadow: currentEra === era.id ? `0 0 15px ${era.color}50` : "none",
                cursor: "pointer",
                transition: "all 0.5s ease",
              }}
            >
              {era.title}
            </button>
          ))}
        </div>
      </nav>

      {/* Main content area */}
      <main
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "8rem",
          paddingBottom: "6rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <AnimatePresence mode="wait">
          <CosmicEra key={currentEra} eraData={currentEraData} />
        </AnimatePresence>
      </main>

      {/* Contact button */}
      <motion.div
        style={{
          position: "fixed",
          bottom: "2.5rem",
          right: "2.5rem",
          zIndex: 30,
        }}
        whileHover={{ scale: 1.1 }}
      >
        <button
          style={{
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold",
            padding: "0.75rem 1.25rem",
            borderRadius: "9999px",
            border: "none",
            boxShadow: `0 0 20px ${currentEraData?.color || "#FFFFFF"}`,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span>Contact Me</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </motion.div>
    </div>
  );
}

export default App;
