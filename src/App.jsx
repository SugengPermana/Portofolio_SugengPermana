import Image from "./data.js"
import { listTools } from "./data.js"

function App() {

  return (
    <>
    {/* Hero Section */}
      <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2sl">
            {/* image kecil */}
              <img src={Image.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
              <q>Kode yang indah, lahir dari Ketekunan 👍</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, I`m Sugeng Permana Desembry</h1>
          <p className="text-base/loose mb-6 opacity-80">I focused on Web programing, Automation, and Cloud Console. when i building this project include landing page, company Profile, E-Commerce
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-white hover:text-black" >Download Cv <i className="ri-download-line ri-lg"></i></a>

            <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-white hover:text-black">Lihat Proyek <i className="ri-download-line ri-lg"></i></a>
          </div>
        </div>
            {/* Image besar */}
              <img src={Image.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto" />
      </div>
      {/* Hero section */}

      {/* Tentang */}
        <div className="tentang mt-32 py-10">
          <div className="xl:w-2/3 lg:w3/4 w-full mx-auto
          p-7 bg-zinc-800 rounded-md">
            <img src={Image.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" />
            <p className="text-base/loose mb-10">
              Hi, My name is Sugeng Permana Desembry, saya seorang junior fullstack engineer, keahlian saya menggunakan bahasa HTML,Css,JS dan untuk framework React, Tailwind, Next.js  
            </p>
            <div className="flex items-center justify-between">
              <img src={Image.HeroImage} alt="image" className="w-12 rounded-md sm:block hidden" />
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
            <h1 className="text-4xl/snug font-bold mb-4">Tools yang dipakai</h1>
            <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">Berikut ini tools yang biasa saya pakai untuk ngoding</p>
            <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">

              {listTools.map((tool) => (
                <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id}>
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
    </>
  )
}

export default App
