// src/data.js

const Image = {
  HeroImage: "/assets/hero-foto-img3.jpg",
};

export default Image;

export const listProyek = [
  {
    id: 1,
    gambar: "/assets/proyek/proyek1.webp",
    nama: "Simpadu",
    desk: "Management employee apps and attendance",
    tools: ["HTML", "CSS", "Javascript", "AOS"],
    live: "https://website-sekolah.example.com",
    github: "https://github.com/username/website-sekolah",
    dad: "200",
  },
  {
    id: 2,
    gambar: "/assets/proyek/proyek2.webp",
    nama: "Company Profile",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "AOS", "Swiper", "Lightbox Gallery"],
    live: "https://company-profile.example.com",
    github: "https://github.com/username/company-profile",
    dad: "300",
  },
  // dst...
];

// ===================== SKILLS =====================

export const skillCategories = [
  {
    id: 1,
    title: "Frontend Development",
    skills: [
      { id: "react", name: "React", percent: 80, color: "#61DAFB", logo: "/assets/tools/reactjs.png" },
      { id: "nextjs", name: "Next.js", percent: 70, color: "#000000", logo: "/assets/tools/nextjs.png" },
      { id: "tailwind", name: "TailwindCSS", percent: 90, color: "#38BDF8", logo: "/assets/tools/tailwind.png" },
      { id: "bootstrap", name: "Bootstrap", percent: 60, color: "#7952B3", logo: "/assets/tools/bootstrap.png" },
      { id: "javascript", name: "JavaScript", percent: 85, color: "#F7DF1E", logo: "/assets/tools/js.png" },
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    skills: [
      { id: "node", name: "Node.js", percent: 75, color: "#339933", logo: "/assets/tools/nodejs.png" },
      { id: "express", name: "Express.js", percent: 70, color: "#FFFFFF", logo: "/assets/tools/express.png" },
      { id: "mongo", name: "MongoDB", percent: 65, color: "#47A248", logo: "/assets/tools/mongodb.png" },
    ],
  },
  {
    id: 3,
    title: "Tools & DevOps",
    skills: [
      { id: "github", name: "Git & GitHub", percent: 85, color: "#F05032", logo: "/assets/tools/github.png" },
      { id: "docker", name: "Docker", percent: 60, color: "#2496ED", logo: "/assets/tools/docker.png" },
      { id: "gcp", name: "Google Cloud", percent: 70, color: "#4285F4", logo: "/assets/tools/googlecloud.png" },
    ],
  },
];
