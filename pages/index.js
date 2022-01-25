import Head from 'next/head';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div className="backgroundImage flex flex-col items-center justify-center min-h-screen py-2 font-raleway">
      <Head>
        <title>Leon Web Designs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex flex-col items-center justify-center flex-1 px-40 text-center min-w-full w-screen">
        <div className=""></div>
        <h1 className="text-6xl text-white mb-5">
          Hello, I'm{' '}
          <span className="text-6xl font-bold text-lightPurple typewriter">
            Violet Leon.
          </span>
          <p className="mt-3">I'm a full-stack developer.</p>
        </h1>
      </main>
    </div>
  );
}
