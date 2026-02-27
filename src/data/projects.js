// data/projects.js
const projects = [
  {
    id: 1,
    type: "Grupprojekt",
    title: "Projektnamn",
    description: "Kort beskrivning av vad projektet gör och vilket problem det löser.",
    image: "/assets/images/projekt1.jpg",
    badges: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://dinlivesida.se",
    githubUrl: "https://github.com/...",
  },
  {
    id: 2,
    type: "Soloprojekt",
    title: "API-projekt",
    description: "Beskrivning av API:et och de tekniska beslut du fattade.",
    image: null,
    badges: ["Node.js", "REST API", "MongoDB"],
    liveUrl: null,
    githubUrl: "https://github.com/...",
  },
];

export default projects;