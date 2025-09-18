import { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isPastHome, setIsPastHome] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 100;

    if (element) {
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: "smooth",
      });
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "skills",
        "contact",
      ];
      const scrollPos = window.scrollY + 150;

      let current = sections[0];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) current = id;
      });

      setActiveSection(current);
      setIsPastHome(window.scrollY >= 150);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar py-5 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isPastHome
          ? "backdrop-blur-md border-b border-zinc-700"
          : "bg-transparent"
      }`}
    >
      {/* Container biar konten selalu center */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="logo">
          <h1 className="font-bold text-white text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap">
            <span className="block sm:hidden">Sugeng</span>
            <span className="hidden sm:block lg:hidden">Sugeng Permana</span>
            <span className="hidden lg:block">Sugeng Permana Desembry</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-10 text-sm xl:text-base">
          {["home", "about", "experience", "projects", "skills", "contact"].map(
            (sec) => (
              <li key={sec}>
                <button
                  onClick={() => scrollToSection(sec)}
                  className={`hover:text-blue-400 ${
                    activeSection === sec ? "text-blue-400" : ""
                  }`}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </button>
              </li>
            )
          )}
        </ul>

        {/* Hamburger */}
        <div
          className="lg:hidden text-white text-3xl cursor-pointer relative z-50"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <RiCloseLine /> : <RiMenu3Line />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full
  ${
    isPastHome
      ? "w-full bg-transparent backdrop-blur-md"
      : "w-2/3 bg-transparent"
  }
  text-white transform ${
    openMenu ? "translate-x-0" : "-translate-x-full"
  } transition-all duration-300 ease-in-out z-40`}
      >
        <ul className="flex flex-col items-start gap-6 p-6 mt-16">
          {["home", "about", "experience", "projects", "skills", "contact"].map(
            (sec) => (
              <li key={sec}>
                <button
                  onClick={() => scrollToSection(sec)}
                  className={`cursor-pointer hover:text-blue-400 ${
                    activeSection === sec ? "text-blue-400" : ""
                  }`}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
