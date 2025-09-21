import { useState } from "react";
import { listProyek } from "../data";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div
      id="projects"
      className="projects mt-24 px-4 sm:px-6 md:px-8 lg:px-12 scroll-mt-14"
    >
      <h1
        className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-white"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        My <span className="text-violet-500">Projects</span>
      </h1>
      <p
        className="text-base sm:text-lg text-center text-zinc-400 mb-10"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        Here are some of the projects where I applied my expertise to deliver
        functional and impactful solutions.
      </p>

      {/* wrapper supaya ga nempel pojok */}
      <div className="max-w-6xl mx-auto">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          data-aos="fade-in"
          data-aos-duration="2000"
          data-aos-delay="200"
          data-aos-once="true"
        >
          {listProyek.map((project) => (
            <div
              key={project.id}
              className="group bg-zinc-800 rounded-lg overflow-hidden shadow-md hover:shadow-violet-500/40 transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative w-full h-44 sm:h-52 md:h-56 overflow-hidden">
                <img
                  src={project.gambar}
                  alt={project.nama}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block px-3 py-1 bg-violet-500 text-white text-xs sm:text-sm rounded-full">
                    {project.tagline}
                  </span>
                </div>
                {/* Click Indicator */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 rounded-full p-2">
                    <i className="ri-eye-line text-white text-sm"></i>
                  </div>
                </div>
              </div>
              <div className="p-4 flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 transition-colors duration-300 group-hover:text-violet-500">
                  {project.nama}
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 mb-2 line-clamp-2">
                  {project.desk}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-zinc-700 text-white text-xs sm:text-sm rounded-full font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-violet-500 font-semibold hover:text-white transition-colors duration-200 text-sm sm:text-base"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="ri-external-link-line text-sm sm:text-base"></i>
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-zinc-400 font-semibold hover:text-white transition-colors duration-200 text-sm sm:text-base"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="ri-github-line text-sm sm:text-base"></i>
                    <span>Github</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full p-2 transition-all duration-300 border border-zinc-600/50 hover:border-zinc-500/70 hover:shadow-lg hover:shadow-zinc-500/20 cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>

              {/* Project image */}
              <div className="w-full h-64 sm:h-80 md:h-96">
                <img
                  src={selectedProject.gambar}
                  alt={selectedProject.nama}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project details */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left column - Project info */}
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                      {selectedProject.nama}
                    </h2>

                    <p className="text-zinc-300 mb-6 text-base sm:text-lg leading-relaxed">
                      {selectedProject.desk}
                    </p>

                    {/* Duration */}
                    <div className="mb-6">
                      <h3 className="text-violet-400 font-semibold mb-2">
                        Durasi Pengerjaan
                      </h3>
                      <p className="text-zinc-300">
                        {selectedProject.dad} hari
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h3 className="text-violet-400 font-semibold mb-3">
                        Teknologi yang Digunakan
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tools.map((tool, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-zinc-800 text-violet-300 text-sm rounded-full border border-violet-500/30"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right column - Links */}
                  <div className="lg:w-64">
                    <h3 className="text-violet-400 font-semibold mb-4">
                      Links
                    </h3>
                    <div className="space-y-3">
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-zinc-800 hover:bg-violet-600 text-white rounded-lg transition-all duration-300 group border border-violet-500/20 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/10"
                      >
                        <div className="p-2 bg-violet-600/20 rounded-lg group-hover:bg-violet-500/30 transition-colors duration-300">
                          <i className="ri-external-link-line text-lg text-violet-400 group-hover:text-violet-300 group-hover:scale-110 transition-all duration-300"></i>
                        </div>
                        <div>
                          <div className="font-semibold">Live Demo</div>
                          <div className="text-sm text-zinc-400">
                            Lihat project berjalan
                          </div>
                        </div>
                      </a>

                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-all duration-300 group border border-zinc-600/30 hover:border-zinc-500/50 hover:shadow-lg hover:shadow-zinc-500/10"
                      >
                        <div className="p-2 bg-zinc-700/50 rounded-lg group-hover:bg-zinc-600/70 transition-colors duration-300">
                          <i className="ri-github-line text-lg text-zinc-400 group-hover:text-zinc-300 group-hover:scale-110 transition-all duration-300"></i>
                        </div>
                        <div>
                          <div className="font-semibold">Source Code</div>
                          <div className="text-sm text-zinc-400">
                            Lihat kode di Github
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
