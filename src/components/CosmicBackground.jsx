import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CosmicBackground = ({ era }) => {
  const [stars, setStars] = useState([]);

  // Generate stars on component mount or era change
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      const starCount = 900;

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 5 + 1,
          twinkleDelay: Math.random() * -4,
        });
      }

      setStars(newStars);
    };

    generateStars();
  }, [era]); // Regenerate stars when era changes for a nice transition

  // Era-based gradient colors
  const eraColors = {
    "big-bang": "#FF5A5F",
    "star-formation": "#FFD166",
    "planetary-systems": "#06D6A0",
    "life-evolution": "#118AB2",
    "modern-era": "#7209B7",
  };

  const currentColor = eraColors[era] || eraColors["big-bang"];

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden"
      style={{
        background: `radial-gradient(circle, ${currentColor}22 0%, #000814 70%)`,
        transition: "background 1.5s ease-in-out",
      }}
    >
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
          }}
          transition={{
            duration: star.twinkleSpeed,
            repeat: Infinity,
            delay: star.twinkleDelay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Distant galaxies/nebulae as blurred color spots */}
      <div
        className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full opacity-10"
        style={{
          background: `radial-gradient(circle, ${currentColor} 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />

      <div
        className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full opacity-5"
        style={{
          background: `radial-gradient(circle, #FFD60A 0%, transparent 70%)`,
          filter: "blur(30px)",
        }}
      />

      {/* Add a subtle animation to create cosmic dust effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, transparent 95%, ${currentColor}05 100%)`,
          backgroundSize: "8px 8px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "100px 100px"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default CosmicBackground;
