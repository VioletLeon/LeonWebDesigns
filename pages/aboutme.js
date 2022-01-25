import Head from 'next/head';
import Navbar from '../components/navbar';
import Link from 'next/link';
import {
  faReact,
  faNodeJs,
  faCss3,
  faHtml5,
  faGit,
  faSass,
  faJs,
  faAws,
  faMicrosoft,
  faLinkedin,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  return (
    <div className="backgroundImage flex flex-col items-center justify-center py-2 font-raleway">
      <Head>
        <title>About Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex flex-col justify-center px-40 text-center min-w-screen w-[99%]">
        <div className="flex sm:flex-row flex-col justify-evenly sm:items-start items-center">
          <div className="flex flex-col bg-backgroundSecondary border-gray-900 hover:border-lightBlue border-4 min-w-[390px] max-w-sm max-h-[750px] align-center justify-center p-10">
            <div className="">
              <h2 className="text-4xl mb-5 text-lightPurple">About me:</h2>
            </div>
            <div className="text-xl">
              <p className="text-white">
                I'm a recent bootgramp graduate from{' '}
                <span className="text-lightPurple">Fullstack Academy,</span>{' '}
                where I created projects in a team using the{' '}
                <span className="text-lightPurple"> PERN stack</span> and{' '}
                <span className="text-lightPurple">agile methodologies.</span>{' '}
                I'm interested in mobile development and front-end technologies,
                and I'm looking to land my first software engineering job.
              </p>
              <p></p>
              {/* <p className="mt-10 text-white">
                If you're interested in working with me please, <br />
                <Link href="/contact">
                  <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg sm:text-lg text-sm sm:px-5 px-2 sm:py-2.5 py-1 text-center mr-2 mb-2 mt-5 transition-all duration-700">
                    Contact Me
                  </button>
                </Link>
              </p> */}
            </div>
            <div className="flex flex-row justify-evenly ">
              <div className="m-10 mb-20 max-w-[50px] max-h-[50px] text-lightPurple hover:text-lightBlue focus:ring-blue-300 dark:focus:ring-blue-800">
                <Link href="https://github.com/VioletLeon">
                  <a target="_blank">
                    {' '}
                    <FontAwesomeIcon className="text-4xl" icon={faGithub} />
                  </a>
                </Link>
                <span>Github</span>
              </div>
              <div className="m-10 max-w-[50px] max-h-[50px] text-lightPurple hover:text-lightBlue">
                <Link href="https://www.linkedin.com/in/violetleon/">
                  <a target="_blank">
                    <FontAwesomeIcon className="text-4xl" icon={faLinkedin} />
                  </a>
                </Link>
                <span>LinkedIn</span>
              </div>
              <div className="m-10 max-w-[50px] max-h-[50px] text-lightPurple hover:text-lightBlue focus:ring-blue-300 dark:focus:ring-blue-800">
                <Link href="https://twitter.com/VioletteBunny">
                  <a target="_blank">
                    <FontAwesomeIcon className="text-4xl" icon={faTwitter} />
                  </a>
                </Link>
                <span>Twitter</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-backgroundSecondary border-gray-900 hover:border-lightBlue border-4 p-16 min-w-[390px] max-w-3xl">
            <h2 className="text-4xl mb-5 text-white">Skills:</h2>
            <div className="flex sm:flex-row flex-col flex-wrap justify-center text-center justify-items-center ml-10 md:ml-0">
              <div className="m-10 max-w-[75px] max-h-[75px] min-h-[60px] min-w-[60px] text-lightBlue hover:text-lightPurple">
                <FontAwesomeIcon className="text-8xl" icon={faReact} />
                <span>React.JS</span>
              </div>
              <div className="m-10 max-w-[75px] max-h-[75px] min-h-[60px] min-w-[60px] text-lightBlue hover:text-lightPurple">
                {' '}
                <FontAwesomeIcon className="text-8xl" icon={faNodeJs} />
                <span>Node.JS</span>
              </div>
              <div className="m-10 max-w-[75px] max-h-[75px] min-h-[60px] min-w-[60px] text-lightBlue hover:text-lightPurple">
                <FontAwesomeIcon className="text-8xl" icon={faGit} />
                <span>Git</span>
              </div>
              <div className="m-10 max-w-[75px] max-h-[75px] min-h-[60px] min-w-[60px] text-lightBlue hover:text-lightPurple">
                {' '}
                <FontAwesomeIcon className="text-8xl" icon={faCss3} />
                <span>CSS3</span>
              </div>
              <div className="m-10 max-w-[75px] max-h-[75px] min-h-[60px] min-w-[60px] text-lightBlue hover:text-lightPurple">
                {' '}
                <FontAwesomeIcon className="text-8xl" icon={faHtml5} />
                <span>HTML5</span>
              </div>
              <div className="m-10 max-w-[75px] max-h-[75px] min-h-[60px] min-w-[60px] text-lightBlue hover:text-lightPurple">
                {' '}
                <FontAwesomeIcon className="text-8xl" icon={faSass} />
                <span>SASS</span>
              </div>
              <div className="m-10 max-w-[75px] max-h-[75px] min-h-[60px] min-w-[60px] text-lightBlue hover:text-lightPurple">
                {' '}
                <i className="icon-bootstrap text-8xl"></i>
                <span>Bootstrap</span>
              </div>
              <div className="m-10 max-w-[75px] max-h-[75px] min-h-[60px] min-w-[60px] text-lightBlue hover:text-lightPurple">
                {' '}
                <FontAwesomeIcon className="text-8xl" icon={faAws} />
                <span>Amazon Web Services</span>
              </div>
              <div className="m-10 max-w-[75px] max-h-[75px] min-h-[60px] min-w-[60px] text-lightBlue hover:text-lightPurple">
                {' '}
                <FontAwesomeIcon className="text-8xl" icon={faMicrosoft} />
                <span>Microsoft Azure Services</span>
              </div>
              <div className="m-10 max-w-[75px] max-h-[75px] min-h-[60px] min-w-[60px] text-lightBlue hover:text-lightPurple">
                {' '}
                <i className="icon-heroku text-8xl"></i>
                <span>Heroku</span>
              </div>
              <div className="m-10 max-w-[75px] max-h-[75px] min-h-[60px] min-w-[60px] text-lightBlue hover:text-lightPurple">
                {' '}
                <i className="icon-postgres text-8xl"></i>
                <span>PostgreSQL</span>
              </div>
              <div className="m-10 max-w-[75px] max-h-[75px] min-h-[60px] min-w-[60px] text-lightBlue hover:text-lightPurple">
                {' '}
                <i className="icon-mongodb text-8xl"></i>
                <span>MongoDB</span>
              </div>
              <div className="m-10 max-w-[75px] max-h-[75px] min-h-[60px] min-w-[60px] text-lightBlue hover:text-lightPurple">
                {' '}
                <i className="icon-jquery text-8xl"></i>
                <span>JQuery</span>
              </div>
              <div className="m-10 max-w-[75px] max-h-[75px] min-h-[60px] min-w-[60px] text-lightBlue hover:text-lightPurple">
                {' '}
                <FontAwesomeIcon className="text-8xl" icon={faJs} />
                <span>Javascript</span>
              </div>
              <div className="m-10 max-w-[75px] max-h-[75px] min-h-[60px] min-w-[60px] text-lightBlue hover:text-lightPurple">
                {' '}
                <i class="icon-csharp text-8xl"></i>
                <span>C#</span>
              </div>
              <div className="m-10 max-w-[75px] max-h-[75px] min-h-[60px] min-w-[60px] text-lightBlue hover:text-lightPurple">
                {' '}
                <i className="icon-java text-8xl"></i>
                <span>Java</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
