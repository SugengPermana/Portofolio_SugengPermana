import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { contactInfo } from "../data.js";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = contactInfo.email.mailto;
  };

  const handlePhoneClick = () => {
    window.location.href = contactInfo.phone.whatsapp;
  };

  const handleLocationClick = () => {
    window.open(contactInfo.location.maps, "_blank");
  };

  return (
    <section id="contact" className="mt-24 px-5 bg-zinc-900">
      {/* Title */}
      <div className="mt-16">
        <h2
          className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Get In <span className="text-violet-500">Touch</span>
        </h2>
        <p
          className="text-base sm:text-lg text-center text-zinc-400 mb-10 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          Looking for a reliable freelancer? I’m here to help you design, build,
          and launch your next big thing.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 px-2 sm:px-6 md:px-8 lg:px-8 xl:px16 mx-auto max-w-7xl">
        {/* Left Side - Contact Information */}
        <div className="flex flex-col justify-start h-full">
          <h2
            className=" md:text-2xl lg:text-2xl font-bold text-white mb-4 max-w-sm"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Let’s Build Something Great Together
          </h2>

          <p
            className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8 flex-grow"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            I’m always excited about new projects and opportunities. From modern
            web apps to smart workflow automation, I help businesses save time
            and scale faster. Ready to bring your ideas to the next level? I’m
            just one message away.
          </p>

          {/* Contact Details */}
          <div
            className="flex flex-col gap-4 sm:gap-6 mt-auto"
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            {/* Email */}
            <div
              className="flex items-center gap-3 sm:gap-4 bg-zinc-800/60 p-4 rounded-xl shadow-md hover:bg-zinc-700/60 transition duration-300 cursor-pointer"
              onClick={handleEmailClick}
            >
              <div className="bg-violet-600 p-2 sm:p-3 rounded-lg transition transform hover:scale-110 hover:bg-violet-700 flex-shrink-0">
                <FiMail className="text-white text-sm sm:text-base md:text-lg" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-white">
                  Email
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-zinc-300 break-words">
                  {contactInfo.email.address}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div
              className="flex items-center gap-3 sm:gap-4 bg-zinc-800/60 p-4 rounded-xl shadow-md hover:bg-zinc-700/60 transition duration-300 cursor-pointer"
              onClick={handlePhoneClick}
            >
              <div className="bg-violet-600 p-2 sm:p-3 rounded-lg transition transform hover:scale-110 hover:bg-violet-700 flex-shrink-0">
                <FiPhone className="text-white text-sm sm:text-base md:text-lg" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-white">
                  Phone
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-zinc-300 break-words">
                  {contactInfo.phone.number}
                </p>
              </div>
            </div>

            {/* Location */}
            <div
              className="flex items-center gap-3 sm:gap-4 bg-zinc-800/60 p-4 rounded-xl shadow-md hover:bg-zinc-700/60 transition duration-300 cursor-pointer"
              onClick={handleLocationClick}
            >
              <div className="bg-violet-600 p-2 sm:p-3 rounded-lg transition transform hover:scale-110 hover:bg-violet-700 flex-shrink-0">
                <FiMapPin className="text-white text-sm sm:text-base md:text-lg" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-white">
                  Location
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-zinc-300 break-words">
                  {contactInfo.location.full}
                </p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-[250px] sm:h-[300px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126829.33545451498!2d106.70948934943657!3d-6.59501620316556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c44a0cd6aab5%3A0x301576d14feb9a0!2sBogor%2C%20Kp.%20Parung%20Jambu%2C%20Bogor%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1758447280280!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div
          className="bg-zinc-800/60 p-4 lg:p-6 rounded-xl shadow-md flex flex-col h-full"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <form
            action="https://formsubmit.co/sugengpermanadesembry@gmail.com"
            method="POST"
            className="flex flex-col gap-3 lg:gap-4 h-full"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 lg:p-3 rounded-md bg-zinc-900 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-violet-600 border border-zinc-700"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 lg:p-3 rounded-md bg-zinc-900 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-violet-600 border border-zinc-700"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="10"
              className="p-2 lg:p-3 rounded-md bg-zinc-900 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-violet-600 border border-zinc-700 resize-none flex-1"
              required
            ></textarea>

            <button className="bg-violet-600 hover:bg-violet-700 transition p-2 lg:p-3 rounded-md font-semibold text-white text-sm sm:text-base mt-auto">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
