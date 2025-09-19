import { achievements } from "../data.js";

const Achievements = () => {
  return (
    <div className="mt-16">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-white mb-6">
        Certificates & <span className="text-violet-500">Badges</span>
      </h2>

      <div className="overflow-hidden relative">
        <div className="flex gap-6 animate-scroll">
          {achievements.concat(achievements).map((achv, i) => (
            <div
              key={i}
              className="relative min-w-[200px] sm:min-w-[240px] bg-zinc-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300 group"
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
      </div>

      {/* Box Deskripsi */}
      <div className="mt-12 bg-zinc-800 rounded-lg p-8 text-center shadow-lg mx-auto max-w-4xl border border-violet-600">
        <h3 className="text-3xl font-bold text-white mb-4">
          Always Learning, Always Growing
        </h3>
        <p className="text-zinc-400 mb-8 leading-relaxed">
          Technology evolves rapidly, and so do I. I'm constantly learning new
          technologies, experimenting with cutting-edge tools, and staying
          updated with industry best practices. My passion for continuous
          learning ensures that I deliver modern, efficient solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-500 mb-2">10+</h1>
            <p className="text-zinc-400">Technologies Mastered</p>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-purple-500 mb-2">30+</h1>
            <p className="text-zinc-400">Courses Completed</p>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-500 mb-2">2+</h1>
            <p className="text-zinc-400">Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
