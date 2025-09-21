import { achievements } from "../data.js";

const Achievements = () => {
  return (
    <div
      className="mt-24 px-2 sm:px-6 md:px-8 lg:px-12 scroll-mt-14"
      id="achievements"
    >
      <h2
        className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2"
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
        <div className="flex gap-6 animate-scroll">
          {achievements.concat(achievements).map((achv, i) => (
            <div
              key={i}
              className="relative min-w-[250px] sm:min-w-[250px] bg-zinc-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300 group"
            >
              {/* Image */}
              <a href={achv.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={achv.imageUrl}
                  alt={achv.title}
                  className="w-full h-32 sm:h-40 object-cover rounded-t-xl"
                />
              </a>

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
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
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
          <h3 className="text-3xl font-bold text-white mb-4">
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
              <h1 className="text-4xl font-bold text-blue-500 mb-2">7+</h1>
              <p className="text-zinc-400">Tools & Frameworks Explored</p>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-purple-500 mb-2">20+</h1>
              <p className="text-zinc-400">Courses Completed</p>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-green-500 mb-2">7+</h1>
              <p className="text-zinc-400">month of Hands On Practice</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
