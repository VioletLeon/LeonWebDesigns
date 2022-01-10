import Head from 'next/head';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <div className="bg-backgroundPrimary flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Leon Web Designs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center bg-white">
        <div className="flex flex-col item">
          <div>
            <h2>About me:</h2>
            <p>
              I'm a recent bootgramp graduate from{' '}
              <strong>Fullstack Academy.</strong> I'm interested in mobile
              development and front-end technologies.
            </p>
          </div>
          <div>
            <h2>Skills:</h2>
            <p>React.JS, Express</p>
          </div>
        </div>
      </main>
    </div>
  );
}
