import Image from "../data.js";
const About = () => {
  return (
    <div>
      <div className="about mt-32 px-5" id="about">
        <div className="max-w-screen-lg mx-auto">
          {/* Judul Section */}
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              About <span className="text-violet-500">Me</span>
            </h2>
            <p
              className="text-zinc-400 mt-3 text-base sm:text-lg"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              A brief introduction about who I am and what I do
            </p>
          </div>

          {/* Konten Utama */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-16 xl:px-24 mx-auto max-w-7xl">
            {/* Teks */}
            <div>
              <h3
                className="text-2xl sm:text-3xl font-bold mb-3 text-white"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Hi, There I&apos;m{" "}
                <span className="text-violet-500">Sugeng</span>
              </h3>
              <p
                className="text-zinc-400 mb-5"
                data-aos="fade-in"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                I&apos;m passionate about building modern, responsive, and
                user-friendly web applications. Always learning and exploring
                new technologies.
              </p>

              <h4
                className="text-xl font-semibold mb-3 text-white"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                What I Do:
              </h4>
              <p
                className="text-zinc-400"
                data-aos="fade-in"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                Specializing in React, Tailwind CSS, and Next.js to craft smooth
                experiences for the web.
              </p>
            </div>

            {/* Foto */}
            <div
              className="flex justify-center lg:justify-end"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <img
                src={Image.HeroImage}
                alt="Sugeng Permana Desembry"
                className="w-48 sm:w-64 rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Cards Statistik */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 justify-items-center">
            {/* Card 1 */}
            <div
              className="p-6 md:p-8 rounded-xl text-center border border-violet-600 
      transition transform hover:scale-105 hover:shadow-lg 
      hover:shadow-violet-500/30 w-full max-w-[250px]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-once="true"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-violet-600 w-14 h-14 flex items-center justify-center rounded-full">
                  <i className="ri-timer-fill text-white text-2xl"></i>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                7<span className="text-violet-500">+</span>
              </h1>
              <p className="text-zinc-400">Month Experience</p>
            </div>

            {/* Card 2 */}
            <div
              className="p-6 md:p-8 rounded-xl text-center border border-violet-600 
        transition transform hover:scale-105 hover:shadow-lg 
        hover:shadow-violet-500/30 w-full max-w-[250px]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-once="true"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-violet-600 w-14 h-14 flex items-center justify-center rounded-full">
                  <i className="ri-focus-2-line text-white text-2xl"></i>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                3<span className="text-violet-500">+</span>
              </h1>
              <p className="text-zinc-400">Projects Completed</p>
            </div>

            {/* Card 3 */}
            <div
              className="p-6 md:p-8 rounded-xl text-center border border-violet-600 
                  transition transform hover:scale-105 hover:shadow-lg 
                  hover:shadow-violet-500/30 w-full max-w-[250px]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-once="true"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-violet-600 w-14 h-14 flex items-center justify-center rounded-full">
                  <i className="ri-stack-fill text-white text-2xl"></i>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                5<span className="text-violet-500">+</span>
              </h1>
              <p className="text-zinc-400">Technologies Mastered</p>
            </div>

            {/* Card 4 */}
            <div
              className="p-6 md:p-8 rounded-xl text-center border border-violet-600 
                  transition transform hover:scale-105 hover:shadow-lg 
                  hover:shadow-violet-500/30 w-full max-w-[250px]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-once="true"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-violet-600 w-14 h-14 flex items-center justify-center rounded-full">
                  <i className="ri-user-fill text-white text-2xl"></i>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                1<span className="text-violet-500">+</span>
              </h1>
              <p className="text-zinc-400">Clients Worked With</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
