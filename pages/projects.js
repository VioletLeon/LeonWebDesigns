import Head from 'next/head';
import Navbar from './components/navbar';
import Link from 'next/link';
import {
  faReact,
  faNodeJs,
  faCss3,
  faHtml5,
  faGit,
  faGulp,
  faSass,
  faJava,
  faJs,
  faAws,
  faMicrosoft,
  faLinkedin,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="backgroundImage flex flex-col items-center justify-center min-h-screen h-screen py-2 overflow-hidden">
      <Head>
        <title>Leon Web Designs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex flex-col justify-center flex-1 px-40 text-center min-w-full">
        <div className="flex sm:flex-row flex-col justify-evenly">
          <div className="flex flex-col bg-backgroundSecondary border-gray-900 hover:border-lightBlue border-4 max-w-sm max-h-[750px] align-center justify-center p-5">
            <div className="">
              <h2 className="text-4xl mb-5 text-lightPurple">About me:</h2>
            </div>
            <div className="text-xl">
              <p className="">
                I'm a recent bootgramp graduate from{' '}
                <span className="text-lightPurple">Fullstack Academy,</span>{' '}
                where I created projects in a team using the{' '}
                <span className="text-lightPurple"> PERN stack</span> and{' '}
                <span className="text-lightPurple">agile methodologies.</span>{' '}
                I'm interested in mobile development and front-end technologies,
                and I'm looking to land my first software engineering job.
              </p>
              <p></p>
              <p className="mt-10">
                If you're interested in working with me please, <br />
                <Link href="/contact">
                  <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg sm:text-lg text-sm sm:px-5 px-2 sm:py-2.5 py-1 text-center mr-2 mb-2 mt-5 transition-all duration-700">
                    Contact Me
                  </button>
                </Link>
              </p>
            </div>
            <div className="flex flex-row justify-evenly">
              <div className="m-10 mb-20 max-w-[50px] max-h-[50px] text-lightPurple hover:text-lightBlue focus:ring-blue-300 dark:focus:ring-blue-800">
                <Link href="https://github.com/VioletLeon">
                  <a target="_blank">
                    {' '}
                    <FontAwesomeIcon className="" icon={faGithub} />
                  </a>
                </Link>
                <span>Github</span>
              </div>
              <div className="m-10 max-w-[50px] max-h-[50px] text-lightPurple hover:text-lightBlue">
                <Link href="https://www.linkedin.com/in/violetleon/">
                  <a target="_blank">
                    <FontAwesomeIcon className="" icon={faLinkedin} />
                  </a>
                </Link>
                <span>LinkedIn</span>
              </div>
              <div className="m-10 max-w-[50px] max-h-[50px] text-lightPurple hover:text-lightBlue focus:ring-blue-300 dark:focus:ring-blue-800">
                <Link href="https://twitter.com/VioletteBunny">
                  <a target="_blank">
                    <FontAwesomeIcon className="" icon={faTwitter} />
                  </a>
                </Link>
                <span>Twitter</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
