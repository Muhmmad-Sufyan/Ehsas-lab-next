import Link from "next/link";
import { Header, Hero, TopNavbar } from "../../../components";

const Blog = () => {
  return (
    <div className="bg-[#05184e]">
      <Header />
      {/* <Hero /> */}
      <div className="relative bg-cover bg-center md:bg-top h-[40vh] md:h-[20vh]" style={{ backgroundImage: `url('/h.jpg')` }}>
            <div className="bg-[#132148] text-white absolute md:bottom-0 bottom-[-2px] w-full py-6  ">
      
        <div className="max-w-4xl mx-auto flex  justify-center md:justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl md:text-left text-center">
              Blog
            </h1>
            <i>
              <p className="md:text-left text-center">
                Listed below our awesome blog posts
              </p>
            </i>
          </div>

          <i className="md:flex hidden ">
            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>
            /
            <Link href="/blog" className="hover:text-blue-400  font-bold">
              Blog
            </Link>
          </i>
        </div>
      </div>
      </div>

      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:max-w-6xl md:mx-auto mx-4  md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#132148] text-white shadow-md  overflow-hidden">
          <div className='w-[100%] px-5 py-2'>

            <img
              src="/basic.jpg"
              alt="E-Learning"
              className="w-full h-64 object-bottom "
            />
            </div>
            <div className="p-4">
              <p className=" text-center text-sm mb-2">
                Web Design
              </p>
              <h2 className="text-lg font-semibold mb-2">
                E-Learning System For Everything
              </h2>
              <p className=" mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="flex items-center justify-between text-sm ">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src="/Sha.png"
                    alt="Author"
                  />
                  <span className="text-nowrap">Sir Hassam</span>
                </div>
                <div className="flex flex-nowrap   justify-center items-center">
                  <span className="mr-4">12/4/2016</span>
                  <span>12 COMMENTS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#132148] text-white shadow-md  overflow-hidden">
          <div className='w-[100%] px-5 py-2'>
            <img
              src="/gra.jpg"
              alt="E-Learning"
              className="w-full h-64 object-bottom "
            />
            </div>
            <div className="p-4">
              <p className=" text-center text-sm mb-2">
                Graphic Designing
              </p>
              <h2 className="text-lg font-semibold mb-2">
                E-Learning System For Everything
              </h2>
              <p className=" mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="flex items-center justify-between text-sm ">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src="/Sha.png"
                    alt="Author"
                  />
                  <span className="text-nowrap">Sir Hassam</span>
                </div>
                <div className="flex flex-nowrap   justify-center items-center">
                  <span className="mr-4">12/4/2016</span>
                  <span>12 COMMENTS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#132148] text-white  overflow-hidden">
          <div className='w-[100%] px-5 py-2'>
            <img
              src="web.jpg"
              alt="E-Learning"
              className="w-full h-64 object-bottom "
            />
            </div>
            <div className="p-4">
              <p className=" text-center text-sm mb-2">
                Web Development
              </p>
              <h2 className="text-lg font-semibold mb-2">
                E-Learning System For Everything
              </h2>
              <p className=" mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="flex items-center justify-between text-sm ">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src="/Sha.png"
                    alt="Author"
                  />
                  <span className="text-nowrap">Sir Hassam</span>
                </div>
                <div className="flex flex-nowrap   justify-center items-center">
                  <span className="mr-4">12/4/2016</span>
                  <span>12 COMMENTS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#132148] text-white shadow-md  overflow-hidden">
          <div className='w-[100%] px-5 py-2'>

            <img
              src="/basic.jpg"
              alt="E-Learning"
              className="w-full h-64 object-bottom "
            />
            </div>
            <div className="p-4">
              <p className=" text-center text-sm mb-2">
                Web Design
              </p>
              <h2 className="text-lg font-semibold mb-2">
                E-Learning System For Everything
              </h2>
              <p className=" mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="flex items-center justify-between text-sm ">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src="/Sha.png"
                    alt="Author"
                  />
                  <span className="text-nowrap">Sir Hassam</span>
                </div>
                <div className="flex flex-nowrap   justify-center items-center">
                  <span className="mr-4">12/4/2016</span>
                  <span>12 COMMENTS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#132148] text-white shadow-md  overflow-hidden">
          <div className='w-[100%] px-5 py-2'>
            <img
              src="/gra.jpg"
              alt="E-Learning"
              className="w-full h-64 object-bottom "
            />
            </div>
            <div className="p-4">
              <p className=" text-center text-sm mb-2">
                Graphic Designing
              </p>
              <h2 className="text-lg font-semibold mb-2">
                E-Learning System For Everything
              </h2>
              <p className=" mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="flex items-center justify-between text-sm ">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src="/Sha.png"
                    alt="Author"
                  />
                  <span className="text-nowrap">Sir Hassam</span>
                </div>
                <div className="flex flex-nowrap   justify-center items-center">
                  <span className="mr-4">12/4/2016</span>
                  <span>12 COMMENTS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#132148] text-white  overflow-hidden">
          <div className='w-[100%] px-5 py-2'>
            <img
              src="web.jpg"
              alt="E-Learning"
              className="w-full h-64 object-bottom "
            />
            </div>
            <div className="p-4">
              <p className=" text-center text-sm mb-2">
                Web Development
              </p>
              <h2 className="text-lg font-semibold mb-2">
                E-Learning System For Everything
              </h2>
              <p className=" mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="flex items-center justify-between text-sm ">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src="/Sha.png"
                    alt="Author"
                  />
                  <span className="text-nowrap">Sir Hassam</span>
                </div>
                <div className="flex flex-nowrap   justify-center items-center">
                  <span className="mr-4">12/4/2016</span>
                  <span>12 COMMENTS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#132148] text-white shadow-md  overflow-hidden">
          <div className='w-[100%] px-5 py-2'>

            <img
              src="/basic.jpg"
              alt="E-Learning"
              className="w-full h-64 object-bottom "
            />
            </div>
            <div className="p-4">
              <p className=" text-center text-sm mb-2">
                Web Design
              </p>
              <h2 className="text-lg font-semibold mb-2">
                E-Learning System For Everything
              </h2>
              <p className=" mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="flex items-center justify-between text-sm ">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src="/Sha.png"
                    alt="Author"
                  />
                  <span className="text-nowrap">Sir Hassam</span>
                </div>
                <div className="flex flex-nowrap   justify-center items-center">
                  <span className="mr-4">12/4/2016</span>
                  <span>12 COMMENTS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#132148] text-white shadow-md  overflow-hidden">
          <div className='w-[100%] px-5 py-2'>
            <img
              src="/gra.jpg"
              alt="E-Learning"
              className="w-full h-64 object-bottom "
            />
            </div>
            <div className="p-4">
              <p className=" text-center text-sm mb-2">
                Graphic Designing
              </p>
              <h2 className="text-lg font-semibold mb-2">
                E-Learning System For Everything
              </h2>
              <p className=" mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="flex items-center justify-between text-sm ">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src="/Sha.png"
                    alt="Author"
                  />
                  <span className="text-nowrap">Sir Hassam</span>
                </div>
                <div className="flex flex-nowrap   justify-center items-center">
                  <span className="mr-4">12/4/2016</span>
                  <span>12 COMMENTS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#132148] text-white  overflow-hidden">
          <div className='w-[100%] px-5 py-2'>
            <img
              src="web.jpg"
              alt="E-Learning"
              className="w-full h-64 object-bottom "
            />
            </div>
            <div className="p-4">
              <p className=" text-center text-sm mb-2">
                Web Development
              </p>
              <h2 className="text-lg font-semibold mb-2">
                E-Learning System For Everything
              </h2>
              <p className=" mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="flex items-center justify-between text-sm ">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src="/Sha.png"
                    alt="Author"
                  />
                  <span className="text-nowrap">Sir Hassam</span>
                </div>
                <div className="flex flex-nowrap   justify-center items-center">
                  <span className="mr-4">12/4/2016</span>
                  <span>12 COMMENTS</span>
                </div>
              </div>
            </div>
          </div>
     
        </div>
      </div>

      <div className="bg-[#132148]">
        <div className=" my-4 md:max-w-4xl mx-auto  flex-col md:flex-row flex items-center justify-center px-4 md:justify-between py-10 text-white">
          <div className="md:m-0 mb-4">
            <h1 className="md:text-2xl text-xl font-bold">
              Learning Management System
            </h1>
            <p className="text-base text-wrap ">
              Welcome to Teachme creative site template{" "}
              <br className="md:hidden block" /> for learning websites and
              companies.
            </p>
          </div>
          <Link
            href="/sing-up
    "
          >
            <button className="text-md font-bold  rounded-full   border duration-1000 hover:bg-[#3d9b05] text-white py-2 px-4 ">
              Create Account
            </button>
          </Link>
        </div>
      </div>

      <TopNavbar />
    </div>
  );
};

export default Blog;
