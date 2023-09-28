import Navbar from '../components/navbar';
import Link from 'next/link';
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="backgroundImage flex flex-col items-center justify-center min-h-screen md:py-2 font-raleway overflow-hidden">
      <Navbar />

      <main className="flex flex-col items-center justify-center flex-1 md:px-40 text-center min-w-full w-screen">
        <div className="flex sm:flex-row flex-col gap-10 sm:items-start items-center">
          <div className="flex flex-col bg-backgroundSecondary border-gray-900 hover:border-lightBlue border-4 px-10 pt-5 md:px-20 md:pt-20 w-[77%] md:w-[100%] ">
            <div className="">
              <h2 className="text-4xl mb-5 text-lightPurple text-left">
                About me:
              </h2>
            </div>
            <div className="text-md">
              <p className="text-white text-left font-normal">
                <h1 className="font-bold text-lg ">Hello, I'm Violet Leon</h1>
                <div className="flex flex-row">
                  <div>
                    <p class="pt-2 px-4">
                      I'm a Full Stack Software Engineer with over 3 years of
                      experience, driven by a passion for harnessing technology
                      to make a positive social impact. In my current role as a
                      Founding Full Stack Engineer at Artfora, I've had the
                      incredible opportunity to influence the platform's
                      architecture and breathe life into Figma designs.
                    </p>
                    <div className="lg:block hidden">
                      <p class="pt-2 px-4">
                        My journey in coding and technology has been a dynamic
                        adventure, ignited by my early fascination with video
                        games, including classics like Diablo. Hours of gameplay
                        led to explorations with hex editors, where I tweaked
                        save file data to supercharge my in-game characters.
                        This initial foray kindled my love for coding.
                      </p>

                      <p class="pt-2 px-4">
                        My path led me to the world of web development, where I
                        began crafting MySpace templates and designing Neopets
                        pages. This phase marked my introduction to HTML and
                        CSS, fostering my skills in crafting visually stunning
                        web content.
                      </p>

                      <p class="pt-2 px-4">
                        I delved further into technology, venturing into data
                        mining, especially in the realm of mobile games. I dived
                        into the games' data, revealing hidden insights, and
                        shared this knowledge by creating wikis for the gaming
                        community. This experience not only deepened my
                        understanding of data structures but also allowed me to
                        contribute to the gaming community's knowledge base.
                      </p>

                      <p class="pt-2 px-4">
                        Coding and technology were always more than a hobby;
                        they were a creative outlet, a space for
                        experimentation. This passion eventually led me to
                        formalize my skills, transitioning to freelancing,
                        offering web development solutions to clients.
                      </p>
                    </div>
                    <p class="pt-2 px-4">
                      At Artfora, I've woven Figma designs into responsive,
                      interactive front-end features. I've crafted elegant
                      front-end component libraries, ensuring streamlined user
                      experiences. Meticulously matching web pages to designs is
                      the hallmark of my work.
                    </p>

                    <p class="pt-2 px-4">
                      A significant highlight of my journey was guiding a team
                      of five at New World Inc, fostering seamless
                      collaboration. My dedication to creating meaningful
                      technological impact is matched only by my commitment to
                      continuous learning. If you're searching for a tech
                      professional who excels in expertise, team leadership, and
                      driving positive change, I'd be eager to be part of your
                      project.
                    </p>

                    <p class="pt-2 px-4">
                      My relentless quest for knowledge fuels my passion for
                      innovation. I view each project as an opportunity to
                      acquire fresh skills and insights to amplify my
                      contributions. Technology isn't just a job; it's a journey
                      of growth and positive change. I'm thrilled to embark on
                      this journey with fellow professionals who share the same
                      fervor.
                    </p>
                  </div>
                  <div className="lg:w-auto hidden lg:block lg:min-w-[20%]">
                    <Image
                      src="/images/guitar-2.jpg"
                      width={700}
                      height={1000}
                      objectFit="contain"
                    />
                  </div>
                </div>
              </p>
              <p></p>
            </div>
            <div className="flex flex-row justify-evenly items-baseline w-[100%]">
              <div className="m-10 max-w-[100px] max-h-[100px] flex flex-col items-center justify-center text-lightPurple hover:text-lightBlue focus:ring-blue-300 dark:focus:ring-blue-800">
                <Link href="https://github.com/VioletLeon">
                  <a target="_blank">
                    <FontAwesomeIcon className="text-4xl" icon={faGithub} />
                  </a>
                </Link>
                <span>Github</span>
              </div>
              <div className="m-10 max-w-[100px] max-h-[100px] flex flex-col items-center justify-center text-lightPurple hover:text-lightBlue">
                <Link href="https://www.linkedin.com/in/violetleon/">
                  <a target="_blank">
                    <FontAwesomeIcon
                      className="text-4xl self-center"
                      icon={faLinkedin}
                    />
                  </a>
                </Link>
                <span>LinkedIn</span>
              </div>
              <div className="m-10 max-w-[100px] max-h-[100px] flex flex-col items-center justify-center text-lightPurple hover:text-lightBlue focus:ring-blue-300 dark:focus:ring-blue-800">
                <Link href="https://twitter.com/VioletteBunny">
                  <a target="_blank">
                    <FontAwesomeIcon className="text-4xl" icon={faTwitter} />
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
