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
      { id: "react", name: "React", percent: 85, color: "#61DAFB", logo: "/assets/tools/reactjs.png" },
      { id: "nextjs", name: "Next.js", percent: 50, color: "#000000", logo: "/assets/tools/nextjs.png" },
      { id: "tailwind", name: "TailwindCSS", percent: 85, color: "#BEF4FAFF", logo: "/assets/tools/tailwind.png" },
      { id: "javascript", name: "JavaScript", percent: 85, color: "#F7DF1E", logo: "/assets/tools/js.png" },
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    skills: [
      { id: "node", name: "Node.js", percent: 80, color: "#08F508FF", logo: "/assets/tools/nodejs.png" },
      { id: "php", name: "PHP", percent: 40, color: "#7BA2B9FF", logo: "/assets/tools/php.png" },
    ],
  },
  {
    id: 3,
    title: "Tools & DevOps",
    skills: [
      { id: "github", name: "Git & GitHub", percent: 90, color: "#030201FF", logo: "/assets/tools/github.png" },
      { id: "docker", name: "Docker", percent: 60, color: "#C5D2F4FF", logo: "/assets/tools/docker.png" },
      { id: "gcp", name: "Google Cloud", percent: 70, color: "#FDFDFDFF", logo: "/assets/tools/cloud.png" },
      { id: "n8n", name: "N8N", percent: 60, color: "#F5D1D7FF", logo: "/assets/tools/n8n.png" },
    ],
  },
  {
    id: 4,
    title: "Design & Prototype",
    skills: [
      { id: "figma", name: "Figma", percent: 70, color: "#F24E1E", logo: "/assets/tools/figma.png" },
      { id: "canva", name: "Canva", percent: 70, color: "#00C4CC", logo: "/assets/tools/canva.png" },
      { id: "wordpress", name: "WordPress", percent: 40, color: "#FFFFFFFF", logo: "/assets/tools/wordpress.png" },
    ],
  },
];

export const achievements = [
  {
    id: 1,
    title: "Belajar Dasar Cloud",
    issuer: "Dicoding",
    year: "2025",
    link: "https://drive.google.com/file/d/1TzcDstvB8Fy90rWmJVcufHdbu25h9Ysm/view",
    imageUrl: "/assets/achivement/dicoding cloud.png",
  },
  {
    id: 2,
    title: "Belajar Dasar javascript",
    issuer: "Dicoding",
    year: "2025",
    link: "https://drive.google.com/file/d/1zE26IRVzk7S5tv7wb4SEuvUKmvojFQSp/view",
    imageUrl: "/assets/achivement/javascript.png",
  },
  {
    id: 3,
    title: "belajar backend Javascript",
    issuer: "Dicoding",
    year: "2025",
    link: "https://drive.google.com/file/d/1oeHQHQO3-sdKc0yrfDGLSGS-1XkyDWVu/view",
    imageUrl: "/assets/achivement/backend.png",
  },
];

