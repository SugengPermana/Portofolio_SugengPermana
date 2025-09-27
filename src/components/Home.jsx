import { useState, useEffect } from "react";
import Image from "../data.js";

const Home = () => {
  // list kata yang mau ditampilkan bergantian
  const texts = [
    "Front-End Engineer",
    "Workflow Automation",
    "Cloud Engineer",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // index teks aktif
  const [subIndex, setSubIndex] = useState(0); // posisi karakter
  const [deleting, setDeleting] = useState(false); // mode hapus / ketik
  const [speed, setSpeed] = useState(50); // kecepatan ketik/hapus

  useEffect(() => {
    if (index === texts.length) return; // stop kalau sudah habis (atau bisa diulang nanti)

    if (
      subIndex === texts[index].length + 1 && 
      !deleting
    ) {
      // berhenti sebentar setelah selesai ketik
      setTimeout(() => setDeleting(true), 1500);
      return;
    }

    if (subIndex === 0 && deleting) {
      // pindah ke teks berikutnya setelah hapus semua
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  useEffect(() => {
    setText(texts[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <div>
      <div
        id="home"
        className="hero mt-22 lg:mt-11 min-h-screen flex flex-col justify-center items-center text-center px-4 scroll-mt-14"
      >
        {/* Foto Profil */}
        <img
          src={Image.HeroImage}
          alt="Profile"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-40 lg:h-40 xl:w-64 xl:h-64 rounded-full object-cover border-4 border-violet-600 shadow-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          loading="lazy"
        />

        {/* Nama */}
        <h1
          className="text-3xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-4xl font-bold mt-6 sm:mt-8 md:mt-10 lg:mt-4 xl:mt-6 mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Hi, I&apos;m <span className="text-violet-500">Sugeng</span>
        </h1>

        {/* Subtitle dengan efek ketik-hapus */}
        <h2
          className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl font-medium text-zinc-400 mb-4 flex items-center justify-center gap-1"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <span>{text}</span>
          <span className="animate-pulse">|</span>
        </h2>

        {/* Deskripsi */}
        <p
          className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl
          text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-zinc-300 mb-8 leading-relaxed"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          I&apos;m passionate about Web Development, Automation, and Cloud
          Engineering. My projects range from Landing Pages to Company Profiles
          and E-Commerce platforms.
        </p>

        {/* Tombol CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {/* About Me (tetap fix, ga ikut memanjang) */}
          <button
            onClick={() => {
              const el = document.getElementById("about");
              const navHeight =
                document.querySelector(".navbar")?.offsetHeight || 100;
              window.scrollTo({
                top: el.offsetTop - navHeight,
                behavior: "smooth",
              });
            }}
            className="bg-violet-700 px-6 py-3 text-sm sm:text-base md:text-lg rounded-full text-center whitespace-nowrap w-auto min-w-[120px] transition transform hover:scale-105 hover:shadow-lg"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            About Me
          </button>

          {/* View My Work (lebih panjang di mobile) */}
          <button
            onClick={() => {
              const el = document.getElementById("projects");
              const navHeight =
                document.querySelector(".navbar")?.offsetHeight || 100;
              window.scrollTo({
                top: el.offsetTop - navHeight,
                behavior: "smooth",
              });
            }}
            className="px-8 py-3 text-sm sm:text-base md:text-lg rounded-full border-2 border-violet-600 text-violet-500 bg-transparent text-center whitespace-nowrap w-[180px] sm:w-auto transition hover:bg-violet-600 hover:text-white"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            View My Work
          </button>
        </div>

        {/* Sosial Media */}
        <div
          className="flex gap-6 text-xl sm:text-2xl md:text-3xl lg:text-3xl text-zinc-400"
          data-aos="fade-in"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <a
            href="https://www.linkedin.com/in/sugengpermanadesembry"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-500 transition transform hover:scale-110"
          >
            <i className="ri-linkedin-fill"></i>
          </a>
          <a
            href="https://github.com/sugengpermana"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-500 transition transform hover:scale-110"
          >
            <i className="ri-github-fill"></i>
          </a>
          <a
            href="mailto:sugengpermanadesembry@gmail.com"
            className="hover:text-violet-500 transition transform hover:scale-110"
          >
            <i className="ri-mail-fill"></i>
          </a>
          <a
            href="https://www.instagram.com/sgprmna_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-500 transition transform hover:scale-110"
          >
            <i className="ri-instagram-fill"></i>
          </a>
        </div>
        {/* Arrow animasi */}
        <a
          onClick={() => {
            const el = document.getElementById("about");
            const navHeight =
              document.querySelector(".navbar")?.offsetHeight || 100;
            window.scrollTo({
              top: el.offsetTop - navHeight,
              behavior: "smooth",
            });
          }}
          className="mt-10 text-3xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent animate-bounce"
        >
          <i className="ri-arrow-down-s-line"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
