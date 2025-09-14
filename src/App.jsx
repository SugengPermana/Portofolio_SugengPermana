import Image from "./data.js"
import { listTools,listProyek } from "./data.js"
import { TypeAnimation } from "react-type-animation";


function App() {

  return (
    <>
    <div className="hero mt-12 min-h-screen flex flex-col justify-center items-center text-center px-6">
  {/* Foto Profil */}
  <img
    src={Image.HeroImage}
    alt="Profile"
    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full object-cover border-4 border-violet-600 shadow-lg " data-aos="fade-up" data-aos-duration="1000"
    loading="lazy"
  />

  {/* Nama */}
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold 
    mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 mb-2" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
    Hi, I&apos;m <span className="text-violet-500">Sugeng</span>
  </h1>

  {/* Subtitle + titik animasi */}
  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-zinc-400 mb-4 flex items-center justify-center gap-1" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
    Front-End Engineer & Workflow Automation
  </h2>

  {/* Deskripsi */}
  <p className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl text-sm sm:text-base md:text-lg lg:text-xl text-zinc-300 mb-8 leading-relaxed" data-aos="fade-up" data-aos-duration="2000">
    I&apos;m passionate about Web Development, Automation, and Cloud Engineering.
    My projects range from Landing Pages to Company Profiles and E-Commerce platforms.
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
    <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500 transition transform hover:scale-110">
      <i className="ri-linkedin-fill"></i>
    </a>
    <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500 transition transform hover:scale-110">
      <i className="ri-github-fill"></i>
    </a>
    <a href="mailto:sugengpermanadesembry@gmail.com" className="hover:text-violet-500 transition transform hover:scale-110">
      <i className="ri-mail-fill"></i>
    </a>
    <a href="https://www.instagram.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500 transition transform hover:scale-110">
      <i className="ri-instagram-fill"></i>
    </a>
  </div>
</div>
      {/* Hero section */}

      {/* Tentang */}
        <div className="tentang mt-32 py-10" id="tentang">
          <div className="xl:w-2/3 lg:w3/4 w-full mx-auto p-7 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <img src={Image.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
            <p className="text-base/loose mb-10">
              Hi, My name is Sugeng Permana Desembry, saya seorang junior fullstack engineer, keahlian saya menggunakan bahasa HTML,Css,JS dan untuk framework React, Tailwind, Next.js 
            </p>
            <div className="flex items-center justify-between">
              <img src={Image.HeroImage} alt="image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
              <div className="flex items-center gap-6">
                <div>
                  <h1 className="text-4xl mb-1">
                    45<span className="text-violet-500">+</span>
                  </h1>
                  <p>Project Selesai</p>
                </div>
                <div>
                  <h1 className="text-4xl mb-1">
                    4<span className="text-violet-500">+</span>
                  </h1>
                  <p>Tahun Pengalaman</p>
                </div>
              </div>
            </div>
          </div>

          <div className="tools mt-32">
            <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang dipakai</h1>
            <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini tools yang biasa saya pakai untuk ngoding</p>
            <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">

              {listTools.map(tool => (
                <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
                  <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
                ))}

            </div>
          </div>
        </div>
      {/* Tentang */}

      {/* Proyek */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Proyek</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beebrapa proyek yang telah saya buat</p>

        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map(proyek => (
            <div className="p-4 bg-zinc-800 rounded-md" key={proyek.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
              <img src={proyek.gambar} alt="Proyek image" loading="lazy"/>
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>

                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-800 bg-zinc-600 rounded-md font-semibold " key={index}>{tool}</p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a href="#" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">Lihat Website</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Proyek */}

      {/* kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="contact">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Mari Berhubung dengan saya</p>
        <form action="https://formsubmit.co/sugengpermanadesembry@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukan Nama" className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukan Email" className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" cols={45} rows={7} placeholder="Masukan Pesan" className="border border-zinc-500 p-2 rounded-md" required ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
      {/* kontak */}
    </>
  )
}

export default App
