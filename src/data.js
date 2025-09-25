// src/data.js

const Image = {
  HeroImage: "/assets/hero-foto-img3.jpg",
};

export default Image;

export const listProyek = [
  {
    id: 1,
    images: [
      "/assets/proyek/projects1.png",
    ],
    nama: "Belanja",
    tagline: "E-commerce Website",
    desk: "Belanja is an Amazon inspired e-commerce website that showcases clean product listings, a simulated shopping cart, and responsive design across devices. Built with HTML, CSS, and JavaScript, it demonstrates my ability to design, implement, and deploy a usable online store.",
    tools: ["HTML", "CSS", "Javascript", "Node js"],
    live: "https://sugengpermana.github.io/Belanja.com/",
    github: "https://github.com/SugengPermana/Belanja.com",
    dad: "14",
  },
  {
    id: 2,
    images: ["/assets/proyek/placeholder.png"],
    nama: "Coming Soon...",
    tagline: "Not Found",
    desk: "---",
    tools: ["Not Found"],
    live: "https://company-profile.example.com",
    github: "https://github.com/username/company-profile",
    dad: "-",
  },
  // dst...
];

// ===================== CONTACT INFORMATION =====================

export const contactInfo = {
  email: {
    address: "sugengpermanadesembry@gmail.com",
    mailto: "mailto:sugengpermanadesembry@gmail.com"
  },
  phone: {
    number: "+62 882-9989-8410",
    whatsapp: "https://wa.me/6288299898410"
  },
  location: {
    full: "Bogor, Indonesia",
    city: "Bogor",
    maps: "https://www.google.com/maps/search/?api=1&query=Bogor"
  }
};

// ===================== SKILLS =====================

export const skillCategories = [
  {
    id: 1,
    title: "Frontend Development",
    skills: [
      { id: "react", name: "React", percent: 85, color: "#61DAFB", logo: "/assets/tools/reactjs.png" },
      { id: "nextjs", name: "Next.js", percent: 50, color: "#000000", logo: "/assets/tools/nextjs.webp" },
      { id: "tailwind", name: "TailwindCSS", percent: 85, color: "#BEF4FAFF", logo: "/assets/tools/tailwind.png" },
      { id: "javascript", name: "JavaScript", percent: 85, color: "#F7DF1E", logo: "/assets/tools/javascript.webp" },
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    skills: [
      { id: "node", name: "Node.js", percent: 80, color: "#08F508FF", logo: "/assets/tools/nodejs.webp" },
      { id: "php", name: "PHP", percent: 40, color: "#7BA2B9FF", logo: "/assets/tools/php.png" },
    ],
  },
  {
    id: 3,
    title: "Tools & DevOps",
    skills: [
      { id: "github", name: "Git & GitHub", percent: 90, color: "#030201FF", logo: "/assets/tools/github.webp" },
      { id: "docker", name: "Docker", percent: 60, color: "#C5D2F4FF", logo: "/assets/tools/docker.png" },
      { id: "gcp", name: "Google Cloud", percent: 70, color: "#FDFDFDFF", logo: "/assets/tools/cloud.png" },
      { id: "n8n", name: "N8N", percent: 60, color: "#F5D1D7FF", logo: "/assets/tools/n8n.webp" },
    ],
  },
  {
    id: 4,
    title: "Design & Prototype",
    skills: [
      { id: "figma", name: "Figma", percent: 70, color: "#F24E1E", logo: "/assets/tools/figma.webp" },
      { id: "canva", name: "Canva", percent: 70, color: "#00C4CC", logo: "/assets/tools/canva.webp" },
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
    imageUrl: "/assets/achivement/dasar-cloud.webp",
  },
  {
    id: 2,
    title: "Belajar Dasar javascript",
    issuer: "Dicoding",
    year: "2025",
    link: "https://drive.google.com/file/d/1zE26IRVzk7S5tv7wb4SEuvUKmvojFQSp/view",
    imageUrl: "/assets/achivement/javascript.webp",
  },
  {
    id: 3,
    title: "belajar backend Javascript",
    issuer: "Dicoding",
    year: "2025",
    link: "https://drive.google.com/file/d/1oeHQHQO3-sdKc0yrfDGLSGS-1XkyDWVu/view",
    imageUrl: "/assets/achivement/backend.webp",
  },
  {
    id: 4,
    title: "Ai Praktis untuk Produktivitas",
    issuer: "Dicoding",
    year: "2025",
    link: "https://drive.google.com/file/d/1TzcDstvB8Fy90rWmJVcufHdbu25h9Ysm/view",
    imageUrl: "/assets/achivement/ai-praktis.webp",
  },
  {
    id: 5,
    title: "Belajar dasar Python",
    issuer: "Dicoding",
    year: "2025",
    link: "https://drive.google.com/file/d/1TzcDstvB8Fy90rWmJVcufHdbu25h9Ysm/view",
    imageUrl: "/assets/achivement/python.webp",
  },
  {
    id: 6,
    title: "Introduction to cyber security",
    issuer: "Cisco Networking Academy",
    year: "2025",
    link: "https://drive.google.com/file/d/1TzcDstvB8Fy90rWmJVcufHdbu25h9Ysm/view",
    imageUrl: "/assets/achivement/intro-cyber.webp",
  },
  {
    id: 7,
    title: "Fundamental Junior web developer",
    issuer: "DigiTalent Schoolarship",
    year: "2025",
    link: "https://drive.google.com/file/d/1TzcDstvB8Fy90rWmJVcufHdbu25h9Ysm/view",
    imageUrl: "/assets/achivement/web-dev.webp",
  },
  {
    id: 8,
    title: "R-fundamental for data science",
    issuer: "DqLab",
    year: "2025",
    link: "https://drive.google.com/file/d/1TzcDstvB8Fy90rWmJVcufHdbu25h9Ysm/view",
    imageUrl: "/assets/achivement/r-data.webp",
  },
  {
    id: 9,
    title: "Learn R with AI",
    issuer: "DqLab",
    year: "2025",
    link: "https://drive.google.com/file/d/1TzcDstvB8Fy90rWmJVcufHdbu25h9Ysm/view",
    imageUrl: "/assets/achivement/r-ai.webp",
  },
  {
    id: 10,
    title: "Introduction to Data Science with R",
    issuer: "DQLab",
    year: "2025",
    link: "https://drive.google.com/file/d/1TzcDstvB8Fy90rWmJVcufHdbu25h9Ysm/view",
    imageUrl: "/assets/achivement/intro-r.webp",
  },
  {
    id: 11,
    title: "Arcade Cloud Certification August 2025",
    issuer: "Google Skill Boost",
    year: "2025",
    link: "https://drive.google.com/file/d/1TzcDstvB8Fy90rWmJVcufHdbu25h9Ysm/view",
    imageUrl: "/assets/achivement/arcade-aug.webp",
  },
  {
    id: 12,
    title: "Arcade Cloud Certification September 2025",
    issuer: "Google Skill Boost",
    year: "2025",
    link: "https://drive.google.com/file/d/1TzcDstvB8Fy90rWmJVcufHdbu25h9Ysm/view",
    imageUrl: "/assets/achivement/arcade-sep.webp",
  },
  {
    id: 13,
    title: "Arcade Trivia September Week 1",
    issuer: "Google Skill Boost",
    year: "2025",
    link: "https://drive.google.com/file/d/1TzcDstvB8Fy90rWmJVcufHdbu25h9Ysm/view",
    imageUrl: "/assets/achivement/arcade-trivia1.webp",
  },
  {
    id: 14,
    title: "Arcade Trivia September Week 2",
    issuer: "Google Skill Boost",
    year: "2025",
    link: "https://drive.google.com/file/d/1TzcDstvB8Fy90rWmJVcufHdbu25h9Ysm/view",
    imageUrl: "/assets/achivement/arcade-trivia2.webp",
  },
  {
    id: 15,
    title: "Arcade Trivia September Week 3",
    issuer: "Google Skill Boost",
    year: "2025",
    link: "https://drive.google.com/file/d/1TzcDstvB8Fy90rWmJVcufHdbu25h9Ysm/view",
    imageUrl: "/assets/achivement/arcade-trivia3.webp",
  },
  {
    id: 16,
    title: "Arcade Trivia September Week 4",
    issuer: "Google Skill Boost",
    year: "2025",
    link: "https://drive.google.com/file/d/1TzcDstvB8Fy90rWmJVcufHdbu25h9Ysm/view",
    imageUrl: "/assets/achivement/arcade-trivia4.webp",
  },
  {
    id: 17,
    title: "Gemini For aplication Developer",
    issuer: "Google Skill Boost",
    year: "2025",
    link: "https://drive.google.com/file/d/1TzcDstvB8Fy90rWmJVcufHdbu25h9Ysm/view",
    imageUrl: "/assets/achivement/gemini.webp",
  },
  {
    id: 18,
    title: "Introduction to Generative AI",
    issuer: "Google Skill Boost",
    year: "2025",
    link: "https://drive.google.com/file/d/1TzcDstvB8Fy90rWmJVcufHdbu25h9Ysm/view",
    imageUrl: "/assets/achivement/generative-ai.webp",
  },
  {
    id: 19,
    title: "Get Started with Google Workspace tools",
    issuer: "Google Skill Boost",
    year: "2025",
    link: "https://drive.google.com/file/d/1TzcDstvB8Fy90rWmJVcufHdbu25h9Ysm/view",
    imageUrl: "/assets/achivement/get-tools.webp",
  },
  {
    id: 20,
    title: "Cybersecurity Course one",
    issuer: "Google Skill Boost",
    year: "2025",
    link: "https://drive.google.com/file/d/1TzcDstvB8Fy90rWmJVcufHdbu25h9Ysm/view",
    imageUrl: "/assets/achivement/computing.webp",
  },
];
