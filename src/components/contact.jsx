import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-5 bg-zinc-900">
      <div className="max-w-screen-lg mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Side - Contact Information */}
        <div className="flex flex-col justify-start h-full">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Connect
          </h2>

          {/* Description */}
          <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 flex-grow">
            I'm always interested in hearing about new projects and opportunities.
            Whether you're a company looking to hire, or you're a fellow developer
            wanting to collaborate, I'd love to hear from you.
          </p>

          {/* Contact Details */}
          <div className="flex flex-col gap-4 sm:gap-6 mt-auto">
            {/* Email */}
            <div className="flex items-center gap-3 sm:gap-4 bg-zinc-800/60 p-4 rounded-xl shadow-md hover:bg-zinc-700/60 transition duration-300">
              <div className="bg-violet-600 p-2 sm:p-3 rounded-lg transition transform hover:scale-110 hover:bg-violet-700 flex-shrink-0">
                <FiMail className="text-white text-sm sm:text-base md:text-lg" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-white">
                  Email
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-zinc-300 break-words">
                  sugengpermanadesembry@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 sm:gap-4 bg-zinc-800/60 p-4 rounded-xl shadow-md hover:bg-zinc-700/60 transition duration-300">
              <div className="bg-violet-600 p-2 sm:p-3 rounded-lg transition transform hover:scale-110 hover:bg-violet-700 flex-shrink-0">
                <FiPhone className="text-white text-sm sm:text-base md:text-lg" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-white">
                  Phone
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-zinc-300 break-words">
                  +62 812-3456-7890
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 sm:gap-4 bg-zinc-800/60 p-4 rounded-xl shadow-md hover:bg-zinc-700/60 transition duration-300">
              <div className="bg-violet-600 p-2 sm:p-3 rounded-lg transition transform hover:scale-110 hover:bg-violet-700 flex-shrink-0">
                <FiMapPin className="text-white text-sm sm:text-base md:text-lg" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-white">
                  Location
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-zinc-300 break-words">
                  Jakarta, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-zinc-800/60 p-6 rounded-xl shadow-md flex flex-col h-full">
          <form className="flex flex-col gap-4 h-full" required>
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md bg-zinc-900 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-violet-600 border border-zinc-700"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md bg-zinc-900 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-violet-600 border border-zinc-700"
            />
            <textarea
              placeholder="Your Message"
              rows="6"
              className="p-3 rounded-md bg-zinc-900 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-violet-600 border border-zinc-700 resize-none flex-1"
            ></textarea>
            <button className="bg-violet-600 hover:bg-violet-700 transition p-3 rounded-md font-semibold text-white text-sm sm:text-base mt-auto">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
