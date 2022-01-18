import Head from 'next/head';
import Navbar from '../components/navbar';
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
import axios from 'axios';
import { useState, useEffect } from 'react';
import ProjectCard from '../components/projectCard';
import { projects } from '../data/projects';

export default function Home() {
  const [projectsData, setProjects] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get('/api/projects');
      setProjects(data);
    }
    getData();
  }, []);

  if (!projectsData.length > 0) {
    return <div className="text-6xl text-white"> Loading </div>;
  }

  return (
    <div className="backgroundImage flex flex-col items-center justify-center py-2 overflow-x-hidden h-90%">
      <Head>
        <title>Leon Web Designs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex flex-col items-center justify-center text-center min-w-full w-screen h-full">
        <div className="flex flex-row flex-wrap justify-center items-center">
          {projectsData.length > 0 ? (
            projectsData.map((project) => {
              return <ProjectCard projectData={project} />;
            })
          ) : (
            <div>Loading</div>
          )}
        </div>
      </main>
    </div>
  );
}
