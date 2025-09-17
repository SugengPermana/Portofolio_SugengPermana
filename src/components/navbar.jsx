import { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
  const handleScroll = () => {
    // hitung offset dinamis dari tinggi navbar (bikin threshold lebih akurat)
    const navEl = document.querySelector(".navbar");
    const offset = (navEl?.offsetHeight ?? 120) + 10; // +10 untuk safety
    const scrollPos = window.scrollY + offset;

    const sections = ["home", "about", "experience", "projects", "skills", "contact"];
    let current = sections[0]; // default to first

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      if (el.offsetTop <= scrollPos) {
        current = id; // keep last matched section
      }
    });

    setActiveSection(current);
    setActive(window.scrollY > 150);
  };

  // run once on mount to set initial state
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleScroll); // recalc on resize
  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
  };
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
  <h1
    className="font-bold text-white 
    text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl 
    whitespace-nowrap"
  >
    <span className="block sm:hidden">Sugeng</span>
    <span className="hidden sm:block lg:hidden">Sugeng Permana</span>
    <span className="hidden lg:block">Sugeng Permana Desembry</span>
  </h1>
</div>

      {/* desktop menu */}
      <ul className="hidden lg:flex items-center gap-10">
        <li>
          <a
            href="#home"
            className={`hover:text-blue-400 ${
              activeSection === "home" ? "text-blue-400" : ""
            }`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={`hover:text-blue-400 ${
              activeSection === "about" ? "text-blue-400" : ""
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
            href="#projects"
            className={`hover:text-blue-400 ${
              activeSection === "projects" ? "text-blue-400" : ""
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
              href="#home"
              onClick={toggleMenu}
              className={`hover:text-blue-400 ${
                activeSection === "home" ? "text-blue-400" : ""
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={toggleMenu}
              className={`hover:text-blue-400 ${
                activeSection === "about" ? "text-blue-400" : ""
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
              href="#projects"
              onClick={toggleMenu}
              className={`hover:text-blue-400 ${
                activeSection === "projects" ? "text-blue-400" : ""
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
