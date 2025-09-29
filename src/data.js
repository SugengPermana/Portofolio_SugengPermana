// src/data.js
const base = import.meta.env.BASE_URL;

const Image = {
  HeroImage: `${base}/assets/hero-foto-img3.jpg`,
};

export default Image;

export const listProyek = [
  {
    id: 1,
    images: [
      `${base}assets/proyek/projects-1.0.png`,
      `${base}assets/proyek/projects-1.1.webp`,
      `${base}assets/proyek/projects-1.2.webp`,
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
    images: [`${base}assets/proyek/placeholder.png`],
    nama: "Coming Soon...",
    tagline: "Not Found",
    desk: "---",
    tools: ["Not Found"],
    live: "https://company-profile.example.com",
    github: "https://github.com/username/company-profile",
    dad: "-",
  },
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
      { id: "react", name: "React", percent: 85, color: "#61DAFB", logo: `${base}assets/tools/reactjs.png` },
      { id: "nextjs", name: "Next.js", percent: 50, color: "#000000", logo: `${base}assets/tools/nextjs.webp` },
      { id: "tailwind", name: "TailwindCSS", percent: 85, color: "#BEF4FAFF", logo: `${base}assets/tools/tailwind.png` },
      { id: "javascript", name: "JavaScript", percent: 85, color: "#F7DF1E", logo: `${base}assets/tools/javascript.webp` },
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    skills: [
      { id: "node", name: "Node.js", percent: 80, color: "#08F508FF", logo: `${base}assets/tools/nodejs.webp` },
      { id: "php", name: "PHP", percent: 40, color: "#7BA2B9FF", logo: `${base}assets/tools/php.png` },
    ],
  },
  {
    id: 3,
    title: "Tools & DevOps",
    skills: [
      { id: "github", name: "Git & GitHub", percent: 90, color: "#030201FF", logo: `${base}assets/tools/github.webp` },
      { id: "docker", name: "Docker", percent: 60, color: "#C5D2F4FF", logo: `${base}assets/tools/docker.png` },
      { id: "gcp", name: "Google Cloud", percent: 70, color: "#FDFDFDFF", logo: `${base}assets/tools/cloud.png` },
      { id: "n8n", name: "N8N", percent: 60, color: "#F5D1D7FF", logo: `${base}assets/tools/n8n.webp` },
    ],
  },
  {
    id: 4,
    title: "Design & Prototype",
    skills: [
      { id: "figma", name: "Figma", percent: 70, color: "#F24E1E", logo: `${base}assets/tools/figma.webp` },
      { id: "canva", name: "Canva", percent: 70, color: "#00C4CC", logo: `${base}assets/tools/canva.webp` },
      { id: "wordpress", name: "WordPress", percent: 40, color: "#FFFFFFFF", logo: `${base}assets/tools/wordpress.png` },
    ],
  },
];

// ===================== ACHIEVEMENTS =====================
export const achievements = [
  {
    id: 1,
    title: "Belajar Dasar Cloud",
    issuer: "Dicoding",
    year: "2025",
    link: "https://drive.google.com/file/d/1TzcDstvB8Fy90rWmJVcufHdbu25h9Ysm/view",
    imageUrl: `${base}assets/achivement/dasar-cloud.webp`,
  },
  {
    id: 2,
    title: "Belajar Dasar javascript",
    issuer: "Dicoding",
    year: "2025",
    link: "https://drive.google.com/file/d/1oeHQHQO3-sdKc0yrfDGLSGS-1XkyDWVu/view",
    imageUrl: `${base}assets/achivement/javascript.webp`,
  },
  {
    id: 3,
    title: "belajar backend Javascript",
    issuer: "Dicoding",
    year: "2025",
    link: "https://drive.google.com/file/d/1zE26IRVzk7S5tv7wb4SEuvUKmvojFQSp/view",
    imageUrl: `${base}assets/achivement/backend.webp`,
  },
  {
    id: 4,
    title: "Ai Praktis untuk Produktivitas",
    issuer: "Dicoding",
    year: "2025",
    link: "https://drive.google.com/file/d/1hMA6defEJ3M3q-btFu2s5TXwlbGP4eDh/view",
    imageUrl: `${base}assets/achivement/ai-praktis.webp`,
  },
  {
    id: 5,
    title: "Belajar dasar Python",
    issuer: "Dicoding",
    year: "2025",
    link: "https://drive.google.com/file/d/1BLJnPlVHNVVgeH8k6NVgVUXguZLz7V1Z/view",
    imageUrl: `${base}assets/achivement/python.webp`,
  },
  {
    id: 6,
    title: "Introduction to cyber security",
    issuer: "Cisco Networking Academy",
    year: "2025",
    link: "https://drive.google.com/file/d/1R55M_-hIURFuEht3agVFsfYppoq71nN4/view",
    imageUrl: `${base}assets/achivement/intro-cyber.webp`,
  },
  {
    id: 7,
    title: "Fundamental Junior web developer",
    issuer: "DigiTalent Schoolarship",
    year: "2025",
    link: "https://drive.google.com/file/d/1Hz5advWJWFV3iPjDWUZJO9yWR_weNbxi/view",
    imageUrl: `${base}/assets/achivement/web-dev.webp`,
  },
  {
    id: 8,
    title: "R-Fundamental for data science",
    issuer: "DqLab",
    year: "2025",
    link: "https://drive.google.com/file/d/1IiYe7kHJPQJa2R28cAQKfU_PHugneO15/view",
    imageUrl: `${base}/assets/achivement/r-data.webp`,
  },
  {
    id: 9,
    title: "Learn R with AI",
    issuer: "DqLab",
    year: "2025",
    link: "https://drive.google.com/file/d/181NTLE4tII4f_1DrHLHGW_zpZSjZ-7H7/view",
    imageUrl: `${base}/assets/achivement/r-ai.webp`,
  },
  {
    id: 10,
    title: "Introduction to Data Science with R",
    issuer: "DQLab",
    year: "2025",
    link: "https://drive.google.com/file/d/1b4Rk760qTI5-0Q2Icht3hRDekF39Fb4f/view",
    imageUrl: `${base}/assets/achivement/intro-r.webp`,
  },
  {
    id: 11,
    title: "Arcade Cloud Certification August 2025",
    issuer: "Google Skill Boost",
    year: "2025",
    link: "https://www.cloudskillsboost.google/public_profiles/83950568-42ba-48b6-bfdb-e53cc3af5965/badges/17934726",
    imageUrl: `${base}/assets/achivement/aug.webp`,
  },
  {
    id: 12,
    title: "Arcade Cloud Certification September 2025",
    issuer: "Google Skill Boost",
    year: "2025",
    link: "https://www.cloudskillsboost.google/public_profiles/83950568-42ba-48b6-bfdb-e53cc3af5965/badges/18215001",
    imageUrl: `${base}/assets/achivement/sep.webp`,
  },
  {
    id: 13,
    title: "Arcade Trivia September Week 1",
    issuer: "Google Skill Boost",
    year: "2025",
    link: "https://www.cloudskillsboost.google/public_profiles/83950568-42ba-48b6-bfdb-e53cc3af5965/badges/18033960",
    imageUrl: `${base}/assets/achivement/week1.webp`,
  },
  {
    id: 14,
    title: "Arcade Trivia September Week 2",
    issuer: "Google Skill Boost",
    year: "2025",
    link: "https://www.cloudskillsboost.google/public_profiles/83950568-42ba-48b6-bfdb-e53cc3af5965/badges/18036153",
    imageUrl: `${base}/assets/achivement/week2.webp`,
  },
  {
    id: 15,
    title: "Arcade Trivia September Week 3",
    issuer: "Google Skill Boost",
    year: "2025",
    link: "https://www.cloudskillsboost.google/public_profiles/83950568-42ba-48b6-bfdb-e53cc3af5965/badges/18063323",
    imageUrl: `${base}/assets/achivement/week3.webp`,
  },
  {
    id: 16,
    title: "Arcade Trivia September Week 4",
    issuer: "Google Skill Boost",
    year: "2025",
    link: "https://www.cloudskillsboost.google/public_profiles/83950568-42ba-48b6-bfdb-e53cc3af5965/badges/18083877",
    imageUrl: `${base}/assets/achivement/week4.webp`,
  },
  {
    id: 17,
    title: "Gemini For aplication Developer",
    issuer: "Google Skill Boost",
    year: "2025",
    link: "https://www.cloudskillsboost.google/public_profiles/83950568-42ba-48b6-bfdb-e53cc3af5965/badges/17980465",
    imageUrl: `${base}/assets/achivement/gemini.webp`,
  },
  {
    id: 18,
    title: "Introduction to Generative AI",
    issuer: "Google Skill Boost",
    year: "2025",
    link: "https://www.cloudskillsboost.google/public_profiles/83950568-42ba-48b6-bfdb-e53cc3af5965/badges/17102920",
    imageUrl: `${base}/assets/achivement/generative.webp`,
  },
  {
    id: 19,
    title: "Get Started with Google Workspace tools",
    issuer: "Google Skill Boost",
    year: "2025",
    link: "https://www.cloudskillsboost.google/public_profiles/83950568-42ba-48b6-bfdb-e53cc3af5965/badges/17981862",
    imageUrl: `${base}/assets/achivement/workspace.webp`,
  },
  {
    id: 20,
    title: "Cybersecurity Course one",
    issuer: "Google Skill Boost",
    year: "2025",
    link: "https://www.cloudskillsboost.google/public_profiles/83950568-42ba-48b6-bfdb-e53cc3af5965/badges/18212641",
    imageUrl: `${base}/assets/achivement/cyber.webp`,
  },
];
