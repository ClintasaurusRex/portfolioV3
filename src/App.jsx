import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

// Import components
import CosmicBackground from "./components/CosmicBackground";
import CosmicEra from "./components/CosmicEra";

// Import data
import cosmicData from "./data/cosmicData";

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
    <div className="relative min-h-screen overflow-x-hidden font-sans">
      {/* Dynamic cosmic background */}
      <CosmicBackground era={currentEra} />

      {/* Main navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 py-6">
        <div className="flex flex-wrap justify-center space-x-2 backdrop-blur-sm bg-black bg-opacity-30 p-2 rounded-full">
          {eras.map((era) => (
            <button
              key={era.id}
              onClick={() => setCurrentEra(era.id)}
              className={`px-4 py-2 rounded-full transition-all duration-500 ${
                currentEra === era.id
                  ? "text-black"
                  : "bg-transparent text-gray-400 hover:text-white"
              }`}
              style={{
                backgroundColor: currentEra === era.id ? era.color : "transparent",
                boxShadow: currentEra === era.id ? `0 0 15px ${era.color}50` : "none",
              }}
            >
              {era.title}
            </button>
          ))}
        </div>
      </nav>

      {/* Main content area */}
      <main className="relative z-10 container mx-auto pt-32 px-4 pb-24">
        <AnimatePresence mode="wait">
          <CosmicEra key={currentEra} eraData={currentEraData} />
        </AnimatePresence>
      </main>

      {/* Contact button */}
      <motion.div className="fixed bottom-10 right-10 z-30" whileHover={{ scale: 1.1 }}>
        <button
          className="bg-white text-black font-bold px-5 py-3 rounded-full shadow-lg flex items-center space-x-2"
          style={{
            boxShadow: `0 0 20px ${currentEraData?.color || "#FFFFFF"}`,
          }}
        >
          <span>Contact Me</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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
