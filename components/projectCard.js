import Link from 'next/link';
import Image from 'next/image';

export default function projectCard(props) {
  const { projectData } = props;

  return (
    <div className="flex flex-col bg-backgroundSecondary border-gray-900 hover:border-lightBlue border-4 max-w-md min-h-[750px] max-h-[1000px] align-center justify-center m-10 p-10">
      <div className="">
        <h2 className="text-4xl mb-5 text-lightPurple font-bold">
          {projectData.name}
        </h2>
      </div>
      <div className="mb-5">
        <Image
          src={projectData.imageURL}
          layout="responsive"
          width="100%"
          height="100%"
          objectFit="contain"
        />
      </div>
      <div className="text-xl text-white">
        <p className="font-bold mb-5 text-gray-400 ">
          {projectData.websiteURL.includes('https') ? (
            <Link href={projectData.websiteURL}>
              <a target="_blank" className="hover:text-white">
                Deployed Website{' '}
              </a>
            </Link>
          ) : (
            <span className="text-gray-200">You're already here! </span>
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
            <span className="text-gray-200"> Github is private! </span>
          )}
        </p>
        <p className="">
          {' '}
          <h1 className="text-lightBlue text-left font-bold mb-3">
            Description:
          </h1>{' '}
          {projectData.description}
        </p>
        <p>
          {' '}
          <h1 className="text-lightBlue text-left font-bold mt-3 mb-3">
            Technologies used:
          </h1>
          {projectData.technologies.join(', ')}
        </p>
        <p className="mt-10 text-white">
          <Link href={'/projects/' + projectData.id}>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg sm:text-lg text-sm sm:px-5 px-2 sm:py-2.5 py-1 text-center mr-2 mb-2 mt-5 hover:scale-125 transition-all duration-700">
              Read More Here!
            </button>
          </Link>
        </p>
      </div>
      <div className="flex flex-row justify-evenly "></div>
    </div>
  );
}
