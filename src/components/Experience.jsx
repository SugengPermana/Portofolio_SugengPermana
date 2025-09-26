const Experience = () => {
  return (
    <div>
      <div className="work-experience mt-32 px-5" id="experience">
        <div className="max-w-screen-lg mx-auto">
          {/* Section Title */}
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              Work <span className="text-violet-500">Experience</span>
            </h2>
            <p
              className="text-zinc-400 mt-3 text-base sm:text-lg max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              Highlights of my journey where I've applied my skills and projects
              i have worked on
            </p>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative px-2 sm:px-6 lg:px-12 xl:px-24 mx-auto max-w-7xl">
            {/* Garis Timeline */}
            <div className="absolute top-0 left-4 md:left-1/2 md:-translate-x-1/2 h-full w-[2px] bg-violet-500"></div>

            {/* Card 1 (Kiri) */}
            <div
              className="relative mb-10 md:mb-16 flex flex-col md:flex-row md:justify-start"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              {/* Bulatan */}
              <div className="absolute top-6 left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-violet-500 rounded-full border-2 border-zinc-900"></div>

              <div className="md:w-1/2 md:pr-8 ml-12 md:ml-0">
                <div className="group bg-zinc-800 border border-zinc-700 rounded-xl p-4 sm:p-6 md:p-8 transition duration-300 hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/20">
                  {/* Header Card */}
                  <div className="flex flex-row items-center gap-3 mb-4 relative">
                    {/* Icon */}
                    <div className="bg-violet-600 w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full flex-shrink-0 transform transition duration-300 group-hover:scale-110">
                      <i className="ri-building-4-fill text-white text-base sm:text-xl"></i>
                    </div>

                    {/* Title + Link */}
                    <div className="flex flex-col min-w-0">
                      <h3 className="text-sm sm:text-xl font-bold text-white transition duration-300 group-hover:text-violet-500">
                        Freelancer
                      </h3>
                      <a
                        href="https://www.linkedin.com/company/indpendent-contractor/posts/?feedView=all"
                        className="text-violet-500 text-xs sm:text-sm flex items-center gap-1 hover:underline truncate"
                      >
                        Self Employed<i className="ri-external-link-line"></i>
                      </a>
                    </div>

                    {/* Role Box */}
                    <span className="border border-violet-500 text-violet-500 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap text-xs sm:text-sm flex-shrink-0 ml-auto sm:ml-4 md:ml-auto">
                      PT
                    </span>
                  </div>

                  {/* Sub-info */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-zinc-400 text-sm">
                    <div className="flex items-center gap-2">
                      <i className="ri-calendar-line"></i>
                      <span>14 agustus 2025 - Present</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="ri-map-pin-line"></i>
                      <span>Bogor, Indonesia</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-300 mt-2 text-sm sm:text-base">
                    Working as a freelance developer, I design and build
                    responsive web applications using React and Tailwind CSS,
                    while also leveraging N8n to automate workflows and
                    streamline business processes. My role spans from crafting
                    clean UIs to optimizing performance and deploying reliable
                    solutions.
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-4 mt-8">
                    <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">
                      Key Achievements:
                    </h4>
                    <ul className="list-disc list-inside text-zinc-300 text-sm sm:text-base">
                      <li>
                        Developed responsive web applications with React and
                        Tailwind CSS, improving load times and user experience
                        across devices.
                      </li>
                      <li>
                        Implemented workflow automation with N8n, cutting down
                        manual tasks and saving clients an average of 10+ hours
                        per week.
                      </li>
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-violet-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                      React
                    </span>
                    <span className="bg-violet-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                      Next Js
                    </span>
                    <span className="bg-violet-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                      Tailwind CSS
                    </span>
                    <span className="bg-violet-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                      Node Js
                    </span>
                    <span className="bg-violet-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                      Figma
                    </span>
                    <span className="bg-violet-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                      N8n
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 (Kanan) */}
            <div
              className="relative mb-10 md:mb-16 flex flex-col md:flex-row md:justify-end"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              {/* Bulatan */}
              <div className="absolute top-6 left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-violet-500 rounded-full border-2 border-zinc-900"></div>

              <div className="md:w-1/2 md:pl-8 ml-12 md:ml-0">
                <div className="group bg-zinc-800 border border-zinc-700 rounded-xl p-4 sm:p-6 md:p-8 transition duration-300 hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/20">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-violet-500 transition">
                    Coming Soon...
                  </h3>
                  <p className="text-zinc-300 mt-2 text-sm sm:text-base">
                    More experiences will be updated soon. Stay tuned!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
