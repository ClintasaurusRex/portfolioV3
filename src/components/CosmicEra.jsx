import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const CosmicEra = ({ eraData }) => {
  if (!eraData) return null;

  return (
    <motion.div
      key={eraData.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{ width: "100%", maxWidth: "72rem", margin: "0 auto" }}
    >
      {/* Era Header */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "0.75rem",
            color: eraData.color,
          }}
        >
          {eraData.title}
        </motion.h1>

        <motion.p
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: "1.25rem",
            marginBottom: "1rem",
            color: eraData.secondaryColor,
          }}
        >
          {eraData.subtitle}
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            height: "4px",
            width: "6rem",
            margin: "0 auto",
            background: `linear-gradient(to right, transparent, ${eraData.color}, transparent)`,
          }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            marginTop: "2rem",
            maxWidth: "36rem",
            margin: "2rem auto 0",
            color: "rgba(209, 213, 219, 1)",
          }}
        >
          {eraData.description}
        </motion.p>
      </div>

      {/* Cosmic Objects Animation */}
      <div style={{ position: "relative", width: "100%", height: "6rem", marginBottom: "3rem" }}>
        {eraData.celestialObjects &&
          eraData.celestialObjects.map((object, index) => (
            <motion.div
              key={index}
              style={{
                position: "absolute",
                left: `${object.position.x}%`,
                top: `${object.position.y}%`,
                width:
                  object.size === "large"
                    ? "80px"
                    : object.size === "medium"
                    ? "50px"
                    : object.size === "small"
                    ? "30px"
                    : "15px",
                height:
                  object.size === "large"
                    ? "80px"
                    : object.size === "medium"
                    ? "50px"
                    : object.size === "small"
                    ? "30px"
                    : "15px",
                borderRadius: "50%",
                background:
                  object.type === "energy-burst"
                    ? `radial-gradient(circle, ${object.color} 0%, transparent 70%)`
                    : object.color,
                boxShadow: `0 0 20px ${object.color}80`,
              }}
              animate={
                object.orbit
                  ? {
                      x: [0, 20, 0, -20, 0],
                      y: [0, 20, 0, -20, 0],
                    }
                  : {
                      scale: [1, 1.1, 1],
                      opacity: [0.8, 1, 0.8],
                    }
              }
              transition={
                object.orbit
                  ? {
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }
                  : {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
            />
          ))}
      </div>

      {/* Projects Grid */}
      {eraData.projects && eraData.projects.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "2rem",
          }}
        >
          {eraData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} eraColor={eraData.color} index={index} />
          ))}
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            color: "rgba(156, 163, 175, 1)",
            fontStyle: "italic",
          }}
        >
          This era represents your beginning. Projects will appear in later eras.
        </div>
      )}
    </motion.div>
  );
};

export default CosmicEra;
