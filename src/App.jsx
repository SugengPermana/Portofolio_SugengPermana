import Image from "./data.js"
import { listTools,listProyek } from "./data.js"
import { TypeAnimation } from "react-type-animation";


function App() {

  return (
    <>
    {/* Hero Section */}
      <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2sl">
            {/* image kecil */}
              <img src={Image.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy"/>
              <q>Errors are not failures, but real mistake is not trying </q>
          </div>
            <h1 className="text-5xl/tight font-bold mb-6">
              Hi, I`m Sugeng Permana{"  "}
              <TypeAnimation
                sequence={[
                  "Desembry", 3000,
                  "...", 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-violet-500"
              />
            </h1>
          <p className="text-base/loose mb-6 opacity-80">"I Passionate about Web Development, Automation, and Cloud Engineering. My projects range from Landing Pages to Company Profiles and E-Commerce platforms"
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-white hover:text-black" >Download Cv <i className="ri-download-line ri-lg"></i></a>

            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-white hover:text-black">Lihat Proyek <i className="ri-download-line ri-lg"></i></a>
          </div>
        </div>
            {/* Image besar */}
              <img src={Image.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s rounded-3xl" loading="lazy" />
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
