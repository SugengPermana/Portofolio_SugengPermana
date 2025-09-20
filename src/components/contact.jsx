const Contact = () => {
  return (
    <div>
      <div className="kontak mt-32 sm:p-10 p-0 scroll-mt-24" id="contact">
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-white">
          Get in <span className="text-violet-400">Touch</span>
        </h1>
        <p className="text-base sm:text-lg text-center opacity-70 mb-16 text-gray-300">
          Ready to start your next project? Let's work together to create something amazing
        </p>

        {/* Contact Information Section */}
        <div
  className="mb-12 bg-zinc-900/50 rounded-xl p-8 sm:p-12"
  data-aos="fade-up"
  data-aos-duration="1000"
  data-aos-delay="200"
>
  <h2 className="text-2xl font-bold text-center mb-8 text-violet-400">
    Let's Connect
  </h2>
  <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
    I'm always interested in new opportunities and exciting projects.
    Whether you have a question or just want to say hi, I'll get back to you as soon as possible.
  </p>

  {/* Contact Details */}
  <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
    {/* Email */}
    <div className="flex items-center gap-3 text-gray-300 group">
      <div className="p-3 rounded-full bg-zinc-800 group-hover:bg-violet-600 transition duration-300">
        <svg
          className="w-5 h-5 text-violet-400 group-hover:text-white transition duration-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
        </svg>
      </div>
      <span className="group-hover:text-violet-400 transition duration-300">
        sugengpermanadesembry@gmail.com
      </span>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-3 text-gray-300 group">
      <div className="p-3 rounded-full bg-zinc-800 group-hover:bg-violet-600 transition duration-300">
        <svg
          className="w-5 h-5 text-violet-400 group-hover:text-white transition duration-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
        </svg>
      </div>
      <span className="group-hover:text-violet-400 transition duration-300">
        +62 812-3456-7890
      </span>
    </div>

    {/* Location */}
    <div className="flex items-center gap-3 text-gray-300 group">
      <div className="p-3 rounded-full bg-zinc-800 group-hover:bg-violet-600 transition duration-300">
        <svg
          className="w-5 h-5 text-violet-400 group-hover:text-white transition duration-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <span className="group-hover:text-violet-400 transition duration-300">
        Jakarta, Indonesia
      </span>
    </div>
  </div>
</div>

        <form
          action="https://formsubmit.co/sugengpermanadesembry@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
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
    </div>
  )
}

export default Contact
