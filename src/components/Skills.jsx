import { skillCategories } from "../data.js";

const Skills = () => {
  return (
    <div
      id="skills"
      className="skills mt-24 px-4 sm:px-6 md:px-8 lg:px-12 scroll-mt-12"
    >
      <h1
        className="text-center text-3xl sm:text-4xl lg:text-4xl font-bold mb-2 text-white"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        My <span className="text-violet-500">Skills</span>
      </h1>
      <p
        className="text-base sm:text-lg text-center text-zinc-400 mb-10"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        Tech and Design I use to build modern applications.
      </p>

      {/* Skills Grid */}
      <div
        className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className="bg-zinc-800 p-4 sm:p-5 rounded-lg shadow-md"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">
              {category.title}
            </h2>
            <div className="space-y-2">
              {category.skills.map((skill) => (
                <div
                  key={skill.id}
                  className="group flex items-center gap-2 bg-zinc-800 rounded-md p-2.5 transition duration-300 hover:scale-105 hover:bg-zinc-700/50"
                >
                  <div
                    className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-md flex items-center justify-center transition duration-300"
                    style={{ backgroundColor: skill.color }}
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-5 h-5 object-contain transition duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-white text-sm sm:text-base font-medium">
                        {skill.name}
                      </span>
                      <span className="text-xs sm:text-sm text-zinc-400">
                        {skill.percent}%
                      </span>
                    </div>
                    <div className="w-full bg-zinc-700 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="h-1.5 rounded-full transition-all duration-500"
                        style={{
                          width: `${skill.percent}%`,
                          backgroundColor: skill.color,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
