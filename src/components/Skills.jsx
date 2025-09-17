import { skillCategories } from "../data.js";
const Skills = () => {
  return (
    <div id="skills" className="skills mt-32 px-4 sm:px-6 md:px-8 scroll-mt-14">
      <h1 className="text-center text-4xl font-bold mb-2 text-white">
        My <span className="text-violet-500">Skills</span>
      </h1>
      <p className="text-base/loose text-center opacity-50 mb-12">
        Berikut beberapa tools dan teknologi yang saya kuasai
      </p>

      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {skillCategories.map((category) => (
    <div key={category.id} className="bg-zinc-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold text-white mb-4">{category.title}</h2>
      <div className="space-y-4">
        {category.skills.map((skill) => (
          <div key={skill.id}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <img src={skill.logo} alt={skill.name} className="w-6 h-6" />
                <span className="text-white">{skill.name}</span>
              </div>
              <span className="text-sm text-zinc-400">{skill.percent}%</span>
            </div>
            <div className="w-full bg-zinc-700 h-2 rounded-full">
              <div
                className="h-2 rounded-full"
                style={{ width: `${skill.percent}%`, backgroundColor: skill.color }}
              ></div>
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
