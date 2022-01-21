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
    <div className="projectBackground flex flex-col items-center justify-center py-2 overflow-x-hidden h-90%">
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      {!projectData.name ? (
        <h1 className="text-white text-6xl">Loading...</h1>
      ) : (
        <main className="flex flex-col items-center justify-center text-center w-[90%] h-screen bg-backgroundSecondary border-gray-900 rounded-3xl">
          <div className="flex flex-col justify-center min-h-[100%] min-w-[100%]">
            <div className="flex flex-col justify-center items-center ">
              <div className="w-full">
                <h1 className="text-white text-6xl pb-10">
                  {projectData.name}
                </h1>
                <hr />
              </div>
              <div className="flex flex-row">
                <div className="w-[33%] h-[80vh] p-20">
                  <Image
                    src={
                      projectData.imageURL
                        ? projectData.imageURL
                        : '/images/placeholder.jpg'
                    }
                    width={5000}
                    height={5000}
                    objectFit="contain"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex flex-col justify-start items-start text-white text-xl">
                    <h1 className="text-4xl text-lightPurple font-bold">
                      Project Mission
                    </h1>
                    <p className="pl-5">{projectData.mission}</p>
                    <h1 className="text-4xl text-lightPurple font-bold">
                      Technical Difficulties
                    </h1>
                    <p className="pl-5">Technical Difficulties</p>
                    <h1 className="text-4xl text-lightPurple font-bold">
                      Project Description
                    </h1>
                    <p className="pl-5">Project Description</p>
                    <h1 className="text-4xl text-lightPurple font-bold">
                      Technologies used
                    </h1>
                    <p className="pl-5">
                      <ul className="text-left">
                        {projectData.technologies.map((technology) => {
                          return <li>- {technology}</li>;
                        })}
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
