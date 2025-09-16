import Image from "./data.js";
import { listTools, listProyek } from "./data.js";
import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <>
      <div className="hero mt-12 min-h-screen flex flex-col justify-center items-center text-center px-6">
        {/* Foto Profil */}
        <img
          src={Image.HeroImage}
          alt="Profile"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full object-cover border-4 border-violet-600 shadow-lg "
          data-aos="fade-up"
          data-aos-duration="1000"
          loading="lazy"
        />

        {/* Nama */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold 
    mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 mb-2"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          Hi, I&apos;m <span className="text-violet-500">Sugeng</span>
        </h1>

        {/* Subtitle + titik animasi */}
        <h2
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-zinc-400 mb-4 flex items-center justify-center gap-1"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          Front-End Engineer & Workflow Automation
        </h2>

        {/* Deskripsi */}
        <p
          className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl text-sm sm:text-base md:text-lg lg:text-xl text-zinc-300 mb-8 leading-relaxed"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          I&apos;m passionate about Web Development, Automation, and Cloud
          Engineering. My projects range from Landing Pages to Company Profiles
          and E-Commerce platforms.
        </p>

        {/* Tombol CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {/* About Me (tetap fix, ga ikut memanjang) */}
          <a
            href="#tentang"
            className="bg-violet-700 px-6 py-3 text-sm sm:text-base md:text-lg rounded-full text-center whitespace-nowrap w-auto min-w-[120px] transition transform hover:scale-105 hover:shadow-lg"
          >
            About Me
          </a>

          {/* View My Work (lebih panjang di mobile) */}
          <a
            href="#proyek"
            className="px-8 py-3 text-sm sm:text-base md:text-lg rounded-full border-2 border-violet-600 text-violet-500 bg-transparent text-center whitespace-nowrap w-[180px] sm:w-auto transition hover:bg-violet-600 hover:text-white"
          >
            View My Work
          </a>
        </div>

        {/* Sosial Media */}
        <div className="flex gap-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-zinc-400">
          <a
            href="https://www.linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-500 transition transform hover:scale-110"
          >
            <i className="ri-linkedin-fill"></i>
          </a>
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-500 transition transform hover:scale-110"
          >
            <i className="ri-github-fill"></i>
          </a>
          <a
            href="mailto:sugengpermanadesembry@gmail.com"
            className="hover:text-violet-500 transition transform hover:scale-110"
          >
            <i className="ri-mail-fill"></i>
          </a>
          <a
            href="https://www.instagram.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-500 transition transform hover:scale-110"
          >
            <i className="ri-instagram-fill"></i>
          </a>
        </div>
        {/* Arrow animasi */}
        <a
          href="#tentang"
          className="mt-10 text-violet-500 text-4xl animate-bounce"
        >
          <i className="ri-arrow-down-s-line"></i>
        </a>
      </div>
      {/* Hero section ---------------- */}

      {/* About Me ------------ */}
      <div className="tentang mt-32 py-10 px-5" id="tentang">
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
      {/* about me */}

      {/* Work Experience */}
      <div className="work-experience mt-32 px-5" id="experience">
        <div className="max-w-screen-lg mx-auto">
          {/* Section Title */}
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Work <span className="text-violet-500">Experience</span>
            </h2>
            <p
              className="text-zinc-400 mt-3 text-base sm:text-lg"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              My professional journey and projects I have worked on
            </p>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative">
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
                        href="#"
                        className="text-violet-500 text-xs sm:text-sm flex items-center gap-1 hover:underline truncate"
                      >
                        HAFECT <i className="ri-external-link-line"></i>
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
                      <span>14 July 2025 - Present</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="ri-map-pin-line"></i>
                      <span>Jakarta, Indonesia</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-300 mt-2 text-sm sm:text-base">
                    Developing and maintaining web applications as a freelance
                    developer. Responsible for full-stack development, UI/UX
                    design, and performance optimization.
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">
                      Key Achievements:
                    </h4>
                    <ul className="list-disc list-inside text-zinc-300 text-sm sm:text-base">
                      <li>
                        Increased application performance by 40% through
                        optimization
                      </li>
                      <li>Implemented responsive UI across multiple devices</li>
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-violet-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                      Laravel
                    </span>
                    <span className="bg-violet-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                      PHP
                    </span>
                    <span className="bg-violet-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                      Tailwind CSS
                    </span>
                    <span className="bg-violet-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                      React
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
                    Cloud Engineer
                  </h3>
                  <p className="text-zinc-300 mt-2 text-sm sm:text-base">
                    Working on GCP projects, deploying services with Cloud Run,
                    BigQuery, and Terraform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proyek */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Proyek
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Berikut ini beebrapa proyek yang telah saya buat
        </p>

        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              className="p-4 bg-zinc-800 rounded-md"
              key={proyek.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              <img src={proyek.gambar} alt="Proyek image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>

                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-800 bg-zinc-600 rounded-md font-semibold "
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="#"
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                  >
                    Lihat Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Proyek */}

      {/* skills */}
      <div className="tools mt-32">
        <h1
          className="text-4xl/snug font-bold mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Tools yang dipakai
        </h1>
        <p
          className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Berikut ini tools yang biasa saya pakai untuk ngoding
        </p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div
              className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
              key={tool.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={tool.dad}
              data-aos-once="true"
            >
              <img
                src={tool.gambar}
                alt="Tools Image"
                className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
              />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* skills */}

      {/* kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="contact">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Kontak
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Mari Berhubung dengan saya
        </p>
        <form
          action="https://formsubmit.co/sugengpermanadesembry@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukan Nama"
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukan Email"
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols={45}
                rows={7}
                placeholder="Masukan Pesan"
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* kontak */}
    </>
  );
}

export default App;
