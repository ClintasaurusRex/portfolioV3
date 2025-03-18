// src/data/cosmicData.js
const cosmicData = {
  // Introduction era
  bigBang: {
    id: "big-bang",
    title: "The Big Bang",
    subtitle: "The origin of my journey",
    description:
      "This is where my journey began. The initial spark of creativity and passion that led me down the path of web development and design.",
    color: "#FF5A5F",
    secondaryColor: "#FF8A8E",
    projects: [], // Usually empty as this is your intro
    celestialObjects: [
      {
        type: "energy-burst",
        size: "large",
        position: { x: 50, y: 50 },
        color: "#FF5A5F",
      },
    ],
  },

  // Early skills & foundation
  starFormation: {
    id: "star-formation",
    title: "Star Formation",
    subtitle: "My skills begin to take shape",
    description:
      "As my journey continued, key skills began to condense and form, much like stars forming from cosmic dust.",
    color: "#FFD166",
    secondaryColor: "#FFE199",
    projects: [
      {
        name: "Project Nebula",
        description:
          "My first major web development project focusing on responsive design techniques.",
        tags: ["HTML", "CSS", "JavaScript"],
        image: "nebula.jpg",
        link: "#",
      },
      {
        name: "Stellar Beginnings",
        description:
          "An exploration of frontend frameworks resulting in a simple but effective portfolio site.",
        tags: ["React", "Tailwind CSS"],
        image: "stellar.jpg",
        link: "#",
      },
    ],
    celestialObjects: [
      {
        type: "star",
        size: "medium",
        position: { x: 30, y: 40 },
        color: "#FFD166",
      },
      {
        type: "star",
        size: "small",
        position: { x: 70, y: 60 },
        color: "#FFE199",
      },
    ],
  },

  // Core competencies
  planetarySystems: {
    id: "planetary-systems",
    title: "Planetary Systems",
    subtitle: "More complex projects orbit around core competencies",
    description:
      "With solid skills established, more complex projects began to take form, orbiting around my core areas of expertise.",
    color: "#06D6A0",
    secondaryColor: "#39E8B0",
    projects: [
      {
        name: "Earth-1",
        description:
          "A full-stack application with user authentication, database integration, and responsive UI.",
        tags: ["React", "Node.js", "MongoDB", "Express"],
        image: "earth1.jpg",
        link: "#",
      },
      {
        name: "Venus Project",
        description:
          "UI/UX redesign for a major client, focusing on accessibility and user experience.",
        tags: ["Figma", "UI/UX", "Accessibility"],
        image: "venus.jpg",
        link: "#",
      },
      {
        name: "Mars Expedition",
        description:
          "Mobile-responsive e-commerce platform with payment integration and shopping cart functionality.",
        tags: ["React", "Stripe API", "Firebase"],
        image: "mars.jpg",
        link: "#",
      },
    ],
    celestialObjects: [
      {
        type: "planet",
        size: "large",
        position: { x: 40, y: 30 },
        color: "#06D6A0",
      },
      {
        type: "moon",
        size: "tiny",
        position: { x: 48, y: 27 },
        color: "#39E8B0",
        orbit: true,
      },
    ],
  },

  // Growth and adaptation
  lifeEvolution: {
    id: "life-evolution",
    title: "Life Evolution",
    subtitle: "Projects showcasing growth and adaptation",
    description:
      "As my career progressed, my projects began to show increased complexity and refinement, adapting to new technologies and challenges.",
    color: "#118AB2",
    secondaryColor: "#44A9C8",
    projects: [
      {
        name: "Cambrian Explosion",
        description:
          "A multi-platform ecosystem of apps sharing a common backend and design system.",
        tags: ["React Native", "GraphQL", "AWS"],
        image: "cambrian.jpg",
        link: "#",
      },
      {
        name: "Dinosaur Valley",
        description:
          "Large-scale data visualization project displaying complex datasets in an intuitive interface.",
        tags: ["D3.js", "SVG", "Data Visualization"],
        image: "dino.jpg",
        link: "#",
      },
    ],
    celestialObjects: [
      {
        type: "planet",
        size: "medium",
        position: { x: 60, y: 50 },
        color: "#118AB2",
      },
      {
        type: "life-form",
        size: "small",
        position: { x: 63, y: 53 },
        color: "#44A9C8",
      },
    ],
  },

  // Current capabilities
  modernEra: {
    id: "modern-era",
    title: "Modern Era",
    subtitle: "My current capabilities and recent accomplishments",
    description:
      "Representing my current skills, recent projects, and the culmination of my professional journey so far.",
    color: "#7209B7",
    secondaryColor: "#9C3DE0",
    projects: [
      {
        name: "Homo Digitalis",
        description:
          "AI-integrated portfolio platform utilizing machine learning to create personalized user experiences.",
        tags: ["React", "TensorFlow.js", "OpenAI API"],
        image: "digital.jpg",
        link: "#",
      },
      {
        name: "Anthropocene",
        description:
          "Climate data visualization tool helping users understand environmental impact and sustainability.",
        tags: ["Three.js", "Globe.GL", "REST APIs"],
        image: "climate.jpg",
        link: "#",
      },
      {
        name: "Future Horizon",
        description:
          "Experimental AR project exploring the intersection of physical and digital spaces.",
        tags: ["AR.js", "WebXR", "React Three Fiber"],
        image: "horizon.jpg",
        link: "#",
      },
    ],
    celestialObjects: [
      {
        type: "advanced-planet",
        size: "large",
        position: { x: 50, y: 60 },
        color: "#7209B7",
      },
      {
        type: "satellite",
        size: "tiny",
        position: { x: 58, y: 55 },
        color: "#9C3DE0",
        orbit: true,
      },
    ],
  },
};

export default cosmicData;
