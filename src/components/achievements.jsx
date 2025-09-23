import { useState, useEffect } from "react";
import { achievements } from "../data.js";

const Achievements = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    setIsAnimationPaused(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsAnimationPaused(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % achievements.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + achievements.length) % achievements.length
    );
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isModalOpen) return;

      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "ArrowRight":
          nextImage();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isModalOpen]);

  return (
    <div
      className="mt-24 px-2 sm:px-6 md:px-8 lg:px-12 scroll-mt-14"
      id="achievements"
    >
      <h2
        className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-2"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        Certificates & <span className="text-violet-500">Badges</span>
      </h2>
      <p
        className="text-base sm:text-lg text-center text-zinc-400 mb-10 max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        Here are some Sertificates & badges that showcase my journey of learning
        and growth
      </p>

      <div
        className="overflow-hidden relative px-2 sm:px-6 md:px-8 lg:px-8 xl:px16 mx-auto max-w-7xl"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        <div
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-1"
        >
            {achievements.map((achv, i) => (
            <div
              key={i}
              className="relative min-w-[250px] sm:min-w-[250px] bg-zinc-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300 group flex-shrink-0"
              onClick={() => openModal(i % achievements.length)} // <-- pake klik
            >
              {/* Image */}
              <div className="cursor-pointer relative z-10">
                <img
                  src={achv.imageUrl}
                  alt={achv.title}
                  className="w-full h-32 sm:h-40 object-cover rounded-t-xl"
                />
              </div>

              {/* Overlay Content */}
              <div className="p-4 bg-zinc-800">
                <p className="text-sm text-center text-white font-semibold mb-1">
                  {achv.title}
                </p>
                <span className="text-xs text-zinc-400 text-center block">
                  {achv.issuer} • {achv.year}
                </span>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl pointer-events-none">
                <div className="text-white text-center">
                  <p className="text-sm font-bold">{achv.title}</p>
                  <p className="text-xs">{achv.issuer}</p>
                  <p className="text-xs">{achv.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Box Deskripsi */}
        <div className="mt-12 from-slate-900 via-zinc-900 to-slate-900 text-zinc-300 rounded-lg p-8 text-center shadow-lg mx-auto max-w-4xl border border-violet-600 ">
          <h3 className="text-2xl font-bold text-white mb-4">
            Keep Growing, Keep Building
          </h3>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            The world of technology never stands still and neither do I. I
            continuously explore new frameworks, embrace innovative tools, and
            refine my skills to stay ahead of the curve. With every challenge, I
            grow stronger and deliver solutions that are not only modern but
            also impactful.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-blue-500 mb-2">7+</h1>
              <p className="text-zinc-400">Tools & Frameworks Explored</p>
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-purple-500 mb-2">20+</h1>
              <p className="text-zinc-400">Courses Completed</p>
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-green-500 mb-2">7+</h1>
              <p className="text-zinc-400">month of Hands On Practice</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl max-h-full w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-violet-400 transition-colors z-20 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ×
            </button>

            {/* Previous button */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-violet-400 transition-colors z-20 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/70"
            >
              ‹
            </button>

            {/* Next button */}
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-violet-400 transition-colors z-20 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/70"
            >
              ›
            </button>

            {/* Image */}
            <img
              src={achievements[currentImageIndex].imageUrl}
              alt={achievements[currentImageIndex].title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl mx-auto block"
            />

            {/* Image info */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4 rounded-b-lg backdrop-blur-sm">
              <h3 className="text-lg font-bold">
                {achievements[currentImageIndex].title}
              </h3>
              <p className="text-sm text-zinc-300">
                {achievements[currentImageIndex].issuer} •{" "}
                {achievements[currentImageIndex].year}
              </p>
              <a
                href={achievements[currentImageIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-violet-400 hover:text-violet-300 text-sm transition-colors"
              >
                View Certificate →
              </a>
            </div>

            {/* Image counter */}
            <div className="absolute top-0 left-0 right-0 bg-black/80 text-white p-2 rounded-t-lg text-center text-sm">
              {currentImageIndex + 1} of {achievements.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;
