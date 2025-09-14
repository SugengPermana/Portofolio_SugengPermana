import { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
    const offset = 120; // tinggi navbar kira2
    const scrollPos = window.scrollY + offset;

    const sections = ["beranda", "tentang", "experience", "proyek", "skills", "contact"];
    let currentSection = "beranda";

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          currentSection = id;
        }
      }
    });

    setActiveSection(currentSection);

    // blur effect
    if (window.scrollY > 150) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div
      className={`navbar py-5 flex items-center justify-between fixed top-0 left-0 w-full px-6 z-50 transition-all ${
        active ? "backdrop-blur-md border-b border-zinc-700" : "bg-transparent"
      }`}
    >
      {/* logo */}
      <div className="logo">
        <h1 className="text-base lg:text-lg font-bold text-white">
          Sugeng Permana Desembry
        </h1>
      </div>

      {/* desktop menu */}
      <ul className="hidden lg:flex items-center gap-10">
        <li>
          <a
            href="#beranda"
            className={`hover:text-blue-400 ${
              activeSection === "beranda" ? "text-blue-400" : ""
            }`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#tentang"
            className={`hover:text-blue-400 ${
              activeSection === "tentang" ? "text-blue-400" : ""
            }`}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className={`hover:text-blue-400 ${
              activeSection === "experience" ? "text-blue-400" : ""
            }`}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#proyek"
            className={`hover:text-blue-400 ${
              activeSection === "proyek" ? "text-blue-400" : ""
            }`}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className={`hover:text-blue-400 ${
              activeSection === "skills" ? "text-blue-400" : ""
            }`}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`hover:text-blue-400 ${
              activeSection === "contact" ? "text-blue-400" : ""
            }`}
          >
            Contact
          </a>
        </li>
      </ul>

      {/* hamburger icon */}
      <div
        className="lg:hidden text-white text-3xl cursor-pointer"
        onClick={toggleMenu}
      >
        {openMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </div>

      {/* mobile menu */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-transparent text-white transform ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 `}
      >
        <ul className="flex flex-col items-start gap-6 p-6 mt-16">
          <li>
            <a
              href="#beranda"
              onClick={toggleMenu}
              className={`hover:text-blue-400 ${
                activeSection === "beranda" ? "text-blue-400" : ""
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#tentang"
              onClick={toggleMenu}
              className={`hover:text-blue-400 ${
                activeSection === "tentang" ? "text-blue-400" : ""
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={toggleMenu}
              className={`hover:text-blue-400 ${
                activeSection === "experience" ? "text-blue-400" : ""
              }`}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#proyek"
              onClick={toggleMenu}
              className={`hover:text-blue-400 ${
                activeSection === "proyek" ? "text-blue-400" : ""
              }`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={toggleMenu}
              className={`hover:text-blue-400 ${
                activeSection === "skills" ? "text-blue-400" : ""
              }`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={toggleMenu}
              className={`hover:text-blue-400 ${
                activeSection === "contact" ? "text-blue-400" : ""
              }`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
