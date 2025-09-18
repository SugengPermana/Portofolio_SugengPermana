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
              className="relative min-w-[200px] sm:min-w-[240px] bg-zinc-800 rounded-xl shadow-md p-4 flex flex-col items-center hover:scale-105 transition duration-300 group"
            >
              {/* Hover Image */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl z-10">
                <img
                  src={`/assets/certificates/${achv.id}.png`} // pastikan punya file img
                  alt={achv.title}
                  className="w-40 h-40 object-contain"
                />
              </div>

              {/* Card Content */}
              <p className="text-sm text-center text-white opacity-80 z-20">
                {achv.title}
              </p>
              <span className="text-xs text-zinc-400 z-20">
                {achv.issuer} • {achv.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
