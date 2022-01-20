import Link from 'next/link';
import Image from 'next/image';

export default function NavbarComponent() {
  return (
    <navbar className="flex flex-row justify-between items-center md:min-w-screen md:w-[99%] mb-10">
      <div className="flex">
        <h1 className="text-white text-3xl min-w-fit pl-5 hidden sm:inline">
          Leon Web Designs
        </h1>
      </div>
      <div className="flex flex-row justify-center items-center">
        <Link href="/">
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  sm:text-lg text-sm sm:px-5 px-2 sm:py-2.5 py-1 text-center mr-2 mb-2 transition-all duration-700">
            Home
          </button>
        </Link>
        <Link href="/aboutme">
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg sm:text-lg text-sm sm:px-5 px-2 sm:py-2.5 py-1 text-center mr-2 mb-2 transition-all duration-700">
            About Me
          </button>
        </Link>
        <Link href="/projects">
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg sm:text-lg text-sm sm:px-5 px-2 sm:py-2.5 py-1 text-center mr-2 mb-2">
            My Projects
          </button>
        </Link>
        <Link href="/pdf/TechnicalResume.pdf">
          <a target="_blank">
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg sm:text-lg text-sm sm:px-5  px-2 sm:py-2.5 py-1 text-center mr-2 mb-2 transition-all duration-700">
              View My Resume
            </button>
          </a>
        </Link>
        {/* <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  rounded-lg sm:text-lg text-sm sm:px-5 px-2 sm:py-2.5 py-1 text-center mr-2 mb-2 transition-all duration-700">
          Contact Me
        </button> */}
      </div>
    </navbar>
  );
}
