import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, eraColor, index }) => {
  return (
    <motion.div
      className="cosmic-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.03,
        boxShadow: `0 0 20px ${eraColor}50`,
      }}
      style={{ borderColor: "transparent" }}
    >
      {/* Project Image */}
      <div
        style={{
          width: "100%",
          height: "160px",
          marginBottom: "1rem",
          position: "relative",
          overflow: "hidden",
          borderRadius: "0.375rem",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#1F2937",
            backgroundImage: project.image ? `url('/images/${project.image}')` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Fallback if no image is provided */}
          {!project.image && (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ fontSize: "2.5rem", color: "#4B5563" }}>✨</div>
            </div>
          )}
        </div>

        {/* Cosmic overlay effect */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0,
            borderRadius: "0.375rem",
            background: `radial-gradient(circle, ${eraColor} 0%, transparent 70%)`,
          }}
          whileHover={{ opacity: 0.3 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Project Content */}
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "bold",
          marginBottom: "0.5rem",
          color: eraColor,
        }}
      >
        {project.name}
      </h3>

      <p
        style={{
          color: "rgba(209, 213, 219, 1)",
          marginBottom: "1rem",
          fontSize: "0.875rem",
        }}
      >
        {project.description}
      </p>

      {/* Tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginTop: "auto",
        }}
      >
        {project.tags &&
          project.tags.map((tag, i) => (
            <span
              key={i}
              style={{
                padding: "0.25rem 0.5rem",
                fontSize: "0.75rem",
                borderRadius: "9999px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                border: "1px solid",
                borderColor: `${eraColor}50`,
              }}
            >
              {tag}
            </span>
          ))}
      </div>

      {/* View project link */}
      <motion.a
        href={project.link}
        style={{
          marginTop: "1rem",
          display: "inline-flex",
          alignItems: "center",
          fontWeight: "500",
          color: eraColor,
          cursor: "pointer",
        }}
        whileHover={{ x: 5 }}
      >
        View Project
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: "1rem", width: "1rem", marginLeft: "0.25rem" }}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </motion.a>
    </motion.div>
  );
};

export default ProjectCard;
