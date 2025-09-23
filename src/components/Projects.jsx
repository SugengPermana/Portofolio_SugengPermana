import { useState } from "react";
import { listProyek } from "../data";
import Carousel from "./Carousel";

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
        className="text-center text-3xl sm:text-4xl lg:text-4xl font-bold mb-2 text-white"
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
                  src={project.images && project.images.length > 0 ? project.images[0] : "/assets/proyek/projects1.png"}
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
                <p className="text-sm sm:text-base text-zinc-400 mb-4 line-clamp-1">
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
    <div className="bg-zinc-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
      <div className="relative flex flex-col h-[90vh]">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-zinc-800/50 backdrop-blur-md border-b border-zinc-700">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {selectedProject.nama}
          </h2>
          <button
            onClick={closeModal}
            className="bg-zinc-700 hover:bg-zinc-600 text-white rounded-full p-2 transition-all duration-300 border border-zinc-600/50 hover:border-zinc-500/70 hover:shadow-lg hover:shadow-zinc-500/20 cursor-pointer"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto overscroll-contain">
          {/* === Image Carousel === */}
          <Carousel images={selectedProject.images} />

          {/* Project details */}
          <div className="p-6 sm:p-8 flex flex-col gap-8">
            {/* About This Project */}
            <div>
              <h3 className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent font-semibold mb-3 text-lg lg:text-2xl">
                About This Project
              </h3>
              <p className="text-slate-300 text-base sm:text-lg lg:text-lg leading-relaxed">
                {selectedProject.desk}
              </p>
            </div>

            {/* Duration */}
            <div>
              <h3 className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent lg:text-2xl font-semibold mb-2">
                Duration Projects
              </h3>
              <p className="text-slate-300 lg:text-lg">{selectedProject.dad} Days</p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent lg:text-2xl font-semibold mb-3">
                Technologies I Used
              </h3>
              <div className="flex flex-wrap gap-2 text">
                {selectedProject.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-zinc-800 text-emerald-300 text-sm rounded-full border border-emerald-500/30 lg:text-lg"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent font-semibold mb-6 lg:text-2xl">Links</h3>
              <div className="flex flex-col gap-4">
                {/* Live Demo */}
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white rounded-lg transition-all duration-300 group border border-violet-500/30 hover:border-violet-400/50 hover:shadow-lg hover:shadow-violet-500/20 w-full"
                >
                  <i className="ri-external-link-line text-lg text-violet-200 group-hover:text-violet-100"></i>
                  <span>View Live Demo</span>
                </a>

                {/* GitHub */}
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-all duration-300 group border border-zinc-600/30 hover:border-zinc-500/50 hover:shadow-lg hover:shadow-zinc-500/10 w-full"
                >
                  <i className="ri-github-line text-lg text-zinc-400 group-hover:text-zinc-300"></i>
                  <span>Source Code</span>
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
