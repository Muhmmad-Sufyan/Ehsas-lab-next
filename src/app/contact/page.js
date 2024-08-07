import Link from "next/link";
import { Header, TopNavbar } from "../../../components";

const Contact = () => {
  return (
    <div className="bg-[#05184e] text-white">
      <Header />
      {/* <Hero /> */}
      <iframe
        className="w-full  mt-4 border-y-[10px] border-white"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.253347262745!2d74.87034417593567!3d32.11645961744976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39195321c0f752bf%3A0x964b17d543d5b246!2sEhsas%20Lab!5e0!3m2!1sen!2s!4v1718873969336!5m2!1sen!2s"
        width={600}
        height={450}
        // style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      
        <div className="rounded-lg max-w-4xl mt-4 mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Contact Details
          </h2>
          <p className="text-center mb-6">
            For your pre-sale questions, please use the form below.
          </p>
          <div></div>
          
        </div>
        <div className="flex justify-center ">

        <div className="flex md:flex-nowrap justify-start  flex-wrap gap-x-10 mx-10 mb-8">
            <div class="w-full md:w-1/2 lg:w-1/3 p-2 md:pt-7 mb-2 md:mb-10">
              <p class="mb-6">
                If you need help before, during or after your purchase, this is
                the place to be. Please use below contact details for all your
                pre-sale questions, contact questions.
              </p>
              <hr />
              <p class="mb-2 flex items-center">
                <i class="bx bx-link mr-2 "></i>
                <Link
                  href="http://www.yoursite.com"
                  class=" hover:underline"
                >
                  www.yoursite.com
                </Link>
              </p>
              <p class="mb-2 flex items-center">
                <i class="bx bx-envelope mr-2 "></i>
                <Link
                  href="mailto:info@yoursite.com"
                  class=" hover:underline"
                >
                  info@yoursite.com
                </Link>
              </p>
              <p class="mb-2 flex items-center">
                <i class="bx bx-phone mr-2 "></i> +90 123 45 67
              </p>
              <p class="mb-2 flex items-center">
                <i class="bx bx-fax mr-2 "></i> +90 123 45 68
              </p>
              <p class="mb-2 flex items-center">
                <i class="bx bxs-map mr-2 "></i> Envato INC 22
                Elizabeth St.
              </p>
              <hr className="mb-4"/>
              <div class="flex space-x-3 mt-4">
                <Link
                  href="https://www.facebook.com"
                  class="hover:bg-blue-600 hover:text-white p-2 rounded"
                >
                  <i class="bx bxl-facebook md:text-xl text-lg"></i>
                </Link>
                <Link
                  href="https://plus.google.com"
                  class="hover:bg-red-600 hover:text-white p-2 rounded"
                >
                  <i class="bx bxl-google-plus md:text-xl text-lg"></i>
                </Link>
                <Link
                  href="https://twitter.com"
                  class="hover:bg-blue-400 hover:text-white p-2 rounded"
                >
                  <i class="bx bxl-twitter md:text-xl text-lg"></i>
                </Link>
                <Link
                  href="https://linkedin.com"
                  class="hover:bg-blue-700 hover:text-white p-2 rounded"
                >
                  <i class="bx bxl-linkedin md:text-xl text-lg"></i>
                </Link>
                <Link
                  href="https://pinterest.com"
                  class="hover:bg-red-600 hover:text-white p-2 rounded"
                >
                  <i class="bx bxl-pinterest md:text-xl text-lg"></i>
                </Link>
                <Link
                  href="https://skype.com"
                  class="hover:bg-blue-400 hover:text-white p-2 rounded"
                >
                  <i class="bx bxl-skype md:text-xl text-lg"></i>
                </Link>
                <Link
                  href="https://vimeo.com"
                  class="hover:bg-blue-500 hover:text-white p-2 rounded"
                >
                  <i class="bx bxl-vimeo md:text-xl text-lg"></i>
                </Link>
                <Link
                  href="https://youtube.com"
                  class="hover:bg-red-600 hover:text-white p-2 rounded"
                >
                  <i class="bx bxl-youtube md:text-xl text-lg"></i>
                </Link>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-2/3 p-2">
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block ">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 rounded border text-[#05184e]"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block ">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 rounded border text-[#05184e]"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block ">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="w-full p-3 rounded border text-[#05184e]"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block ">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 rounded border text-[#05184e]"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block ">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-3 rounded border text-[#05184e]"
                    placeholder="Message Below"
                    defaultValue={""}
                  />
                </div>
                <div className="text-center md:text-right">
                  <button
                    type="submit"
                    className="border duration-1000 hover:bg-[#3d9b05] text-white px-6 py-3 w-full md:w-auto  rounded"
                  >
                    Send Form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
   

      <TopNavbar />
    </div>
  );
};

export default Contact;
