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
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  return (
    <div className="bg-backgroundPrimary flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Leon Web Designs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <div className="flex sm:flex-row flex-col">
          <div className="flex flex-col bg-white max-w-sm">
            <div className="">
              <h2 className="text-3xl mb-5">About me:</h2>
            </div>
            <div className="">
              <p>
                I'm a recent bootgramp graduate from{' '}
                <span className="bold">Fullstack Academy</span> and I'm
                interested in mobile development and front-end technologies.{' '}
              </p>
              <p>
                If you're interested in working with me please,{' '}
                <Link className="text-lightPurple" href="/contact">
                  contact me
                </Link>
              </p>
            </div>
          </div>

          <div className="flex flex-col  max-w-lg">
            <h2 className="text-3xl mb-5">Skills:</h2>
            <div className="flex flex-row flex-wrap justify-evenly">
              <div className="m-5 max-w-[75px] max-h-[75px] text-lightBlue">
                <FontAwesomeIcon className="" icon={faReact} />
                <span>React.JS</span>
              </div>
              <div className="m-10 max-w-[75px] max-h-[75px]">
                <FontAwesomeIcon className="" icon={faNodeJs} />
                <span>Node.JS</span>
              </div>
              <div className="m-10 max-w-[75px] max-h-[75px]">
                <FontAwesomeIcon className="" icon={faCss3} />
                <span>CSS3</span>
              </div>
              <div className="m-10 max-w-[75px] max-h-[75px]">
                <FontAwesomeIcon className="" icon={faHtml5} />
                <span>HTML5</span>
              </div>
              <div className="m-10 max-w-[75px] max-h-[75px]">
                <FontAwesomeIcon className="" icon={faGit} />
                <span>Git</span>
              </div>
              <div className="m-10 mb-20 max-w-[75px] max-h-[75px]">
                <FontAwesomeIcon className="" icon={faGulp} />
                <span>Gulp.JS</span>
              </div>
              <div className="m-10 max-w-[75px] max-h-[75px]">
                <FontAwesomeIcon className="" icon={faSass} />
                <span>SASS</span>
              </div>
              <div className="m-10 max-w-[75px] max-h-[75px]">
                <FontAwesomeIcon className="" icon={faJava} />
                <span>Java</span>
              </div>
              <div className="m-10 max-w-[75px] max-h-[75px]">
                <FontAwesomeIcon className="" icon={faJs} />
                <span>Javascript</span>
              </div>
              <div className="m-10 max-w-[75px] max-h-[75px]">
                <FontAwesomeIcon className="" icon={faAws} />
                <span>Amazon Web Services</span>
              </div>
              <div className="m-10 max-w-[75px] max-h-[75px]">
                <FontAwesomeIcon className="" icon={faMicrosoft} />
                <span>Microsoft Azure Services</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
