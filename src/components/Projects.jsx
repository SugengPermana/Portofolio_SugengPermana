const Projects = () => {
  return (
    <div
      id="projects"
      className="projects mt-24 px-4 sm:px-6 md:px-8 lg:px-12 scroll-mt-14"
    >
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-white">
  My <span className="text-violet-500">Projects</span>
</h1>
<p className="text-base sm:text-lg text-center opacity-50 mb-10">
  Berikut ini beberapa proyek yang telah saya buat
</p>


      {/* wrapper supaya ga nempel pojok */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="group bg-zinc-800 rounded-lg overflow-hidden shadow-md hover:shadow-violet-500/40 transition-shadow duration-300">
            <div className="relative w-full h-44 sm:h-52 md:h-56 overflow-hidden">
              <img
                src="/assets/proyek/proyek1.webp"
                alt="Web Sekolah"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-block px-3 py-1 bg-violet-500 text-white text-xs sm:text-sm rounded-full">
                  Web Development
                </span>
              </div>
            </div>
            <div className="p-4 flex flex-col">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 transition-colors duration-300 group-hover:text-violet-500">
                Web Sekolah
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 mb-2 line-clamp-2">
                Website untuk sekolah berbasis HTML, CSS, dan Javascript.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-zinc-700 text-white text-xs sm:text-sm rounded-full font-medium">
                  HTML
                </span>
                <span className="px-2 py-1 bg-zinc-700 text-white text-xs sm:text-sm rounded-full font-medium">
                  CSS
                </span>
                <span className="px-2 py-1 bg-zinc-700 text-white text-xs sm:text-sm rounded-full font-medium">
                  Javascript
                </span>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <a
                  href="#"
                  target="_blank"
                  className="flex items-center gap-1 text-violet-500 font-semibold hover:text-white transition-colors duration-200 text-sm sm:text-base"
                >
                  <i className="ri-external-link-line text-sm sm:text-base"></i>
                  <span>Live Demo</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="flex items-center gap-1 text-zinc-400 font-semibold hover:text-white transition-colors duration-200 text-sm sm:text-base"
                >
                  <i className="ri-github-line text-sm sm:text-base"></i>
                  <span>Github</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-zinc-800 rounded-lg overflow-hidden shadow-md hover:shadow-violet-500/40 transition-shadow duration-300">
            <div className="relative w-full h-44 sm:h-52 md:h-56 overflow-hidden">
              <img
                src="/assets/proyek/proyek2.webp"
                alt="Company Profile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-block px-3 py-1 bg-violet-500 text-white text-xs sm:text-sm rounded-full">
                  Web Development
                </span>
              </div>
            </div>
            <div className="p-4 flex flex-col">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 transition-colors duration-300 group-hover:text-violet-500">
                Company Profile
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 mb-2 line-clamp-2">
                Website company profile modern dengan HTML, CSS, Javascript.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-zinc-700 text-white text-xs sm:text-sm rounded-full font-medium">
                  HTML
                </span>
                <span className="px-2 py-1 bg-zinc-700 text-white text-xs sm:text-sm rounded-full font-medium">
                  CSS
                </span>
                <span className="px-2 py-1 bg-zinc-700 text-white text-xs sm:text-sm rounded-full font-medium">
                  Javascript
                </span>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <a
                  href="#"
                  target="_blank"
                  className="flex items-center gap-1 text-violet-500 font-semibold hover:text-white transition-colors duration-200 text-sm sm:text-base"
                >
                  <i className="ri-external-link-line text-sm sm:text-base"></i>
                  <span>Live Demo</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="flex items-center gap-1 text-zinc-400 font-semibold hover:text-white transition-colors duration-200 text-sm sm:text-base"
                >
                  <i className="ri-github-line text-sm sm:text-base"></i>
                  <span>Github</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
