import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
<footer className="relative left-0 right-0 w-full bg-gradient-to-br from-slate-900 via-zinc-900 to-slate-900 text-zinc-300 px-6 py-12 mt-16 border-t border-zinc-700/50 z-10"
      data-aos="fade-in"
      data-aos-duration="2000"
      data-aos-once="true">

      {/* Arrow Up */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 flex items-center justify-center rounded-full
          bg-gradient-to-r from-violet-600 to-blue-600
          text-white shadow-lg transition transform hover:scale-110 cursor-pointer"
        >
          <FaArrowUp size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3 text-sm px-6">
        {/* Left: About */}
        <div>
          <h3 className="text-lg font-bold text-white">Sugeng Permana Desembry</h3>
          <p className="mt-3 text-zinc-400">
            A passionate learner and builder, combining technology, creativity, and
            innovation to deliver impactful solutions.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/sugengpermana"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sugengpermanadesembry"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:sugengpermanadesembry@gmail.com"
              className="hover:text-violet-400 transition"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Home",
              "About",
              "Experience",
              "Projects",
              "Skills",
              "Achievement",
              "Contact",
            ].map((link, i) => (
              <li key={i}>
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
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-violet-400 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Get in Touch */}
        <div>
          <h3 className="text-lg font-bold text-white">Get in Touch</h3>
          <ul className="mt-3 space-y-2 text-zinc-400">
            <li>Email: sugengpermanadesembry@gmail.com</li>
            <li>Phone: +62 882-9989-8410</li>
            <li>Location: Bogor, Indonesia</li>
          </ul>

          <div className="mt-4">
            <h4 className="font-semibold text-white">Available For:</h4>
            <p className="text-zinc-400">Freelance, Remote Work, Collaboration</p>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Sugeng Permana Desembry. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
