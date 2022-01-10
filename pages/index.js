import Head from 'next/head';

export default function Home() {
  return (
    <div className="backgroundImage flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Leon Web Designs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <div className=""></div>
        <h1 className="text-6xl text-white mb-5">
          Hello, I'm{' '}
          <span
            className="text-6xl font-bold text-lightPurple typewriter"
            href="https://nextjs.org"
          >
            Violet Leon.
          </span>
          <p className="mt-3">I'm a full-stack developer.</p>
        </h1>

        <div className="flex flex-row mt-20">
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 transition-all duration-700">
            About Me
          </button>
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">
            My Projects
          </button>
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 transition-all duration-700">
            View My Resume
          </button>
        </div>
      </main>
    </div>
  );
}
