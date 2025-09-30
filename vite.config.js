// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Deteksi environment
const isVercel = process.env.VERCEL === "1";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: isVercel ? "/" : "/Portofolio_SugengPermana/",
});
