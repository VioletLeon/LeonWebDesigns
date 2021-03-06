import Head from 'next/head';
import Navbar from '../../components/navbar';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [projectData, setProject] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    async function getData() {
      const { data } = await axios.get(`/api/projects/${id}`);
      setProject(data);
    }
    getData();
  }, [id]);

  return (
    <div className="projectBackground flex flex-col items-center justify-center py-2 overflow-x-hidden h-90% font-raleway">
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className=" bg-backgroundSecondary flex flex-col items-center justify-center text-center w-[90%] h-full rounded-3xl">
        {' '}
        {!projectData.name ? (
          <div className="flex flex-col items-center justify-center py-2 overflow-x-hidden h-screen">
            <div className="text-6xl text-white"> Loading </div>;
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center min-h-[100%] min-w-[100%]">
            <div className="flex flex-col justify-center items-center pt-10">
              <div className="flex flex-col w-full justify-center items-center">
                <h1 className="flex text-white sm:text-6xl text-2xl py-10 flex-wrap">
                  {projectData.name}
                </h1>
                <hr className="border-2 border-lightBlue w-[90%] relative left-[5%]" />
              </div>
              <div className="flex md:flex-row flex-col justify-center items-center relative left-[-10%]">
                <div className="w-[60%] h-[80vh] p-20 sm:inline hidden">
                  <Image
                    src={
                      projectData.imageURL
                        ? projectData.imageURL
                        : '/images/placeholder.jpg'
                    }
                    width={500}
                    height={500}
                    layout={'responsive'}
                    objectFit="contain"
                  />
                </div>
                <div className="flex flex-col items-start pt-10 w-[40%]">
                  <div className="flex flex-col items-start text-white text-xl">
                    <h1 className="text-4xl text-lightPurple font-bold my-2">
                      Project Mission
                    </h1>
                    <p className="pl-5 text-left ">{projectData.mission}</p>
                    <h1 className="text-4xl text-lightPurple font-bold mt-5 mb-2">
                      My Project Role
                    </h1>
                    <p className="pl-5 text-left">{projectData.role}</p>
                    <h1 className="text-4xl text-lightPurple font-bold mt-5 mb-2">
                      Project Details
                    </h1>
                    <p className="pl-5 text-left">
                      <ul className="text-left">
                        {!projectData.projectDetails
                          ? 'No details yet'
                          : projectData.projectDetails.map((detail) => {
                              return <li>- {detail}</li>;
                            })}
                      </ul>
                    </p>
                    <h1 className="text-4xl text-lightPurple font-bold mt-5 mb-2">
                      Technologies used
                    </h1>
                    <p className="pl-5">
                      <ul className="text-left">
                        {projectData.technologies.map((technology) => {
                          return <li>- {technology}</li>;
                        })}
                      </ul>
                    </p>
                    <h1 className="text-4xl text-lightPurple font-bold mt-5 mb-2">
                      Links
                    </h1>
                    <p className="font-bold mb-5 pl-5 text-lightBlue text-4xl">
                      {projectData.websiteURL.includes('https') ? (
                        <Link href={projectData.websiteURL}>
                          <a target="_blank" className="hover:text-white">
                            Deployed Website{' '}
                          </a>
                        </Link>
                      ) : (
                        <span className="text-gray-200">
                          You're already here!{' '}
                        </span>
                      )}
                      |
                      {projectData.githubURL.includes('github') ? (
                        <Link href={projectData.githubURL}>
                          <a target="_blank" className="hover:text-white">
                            {' '}
                            Github{' '}
                          </a>
                        </Link>
                      ) : (
                        <span className="text-gray-200">
                          {' '}
                          Github is private!{' '}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
