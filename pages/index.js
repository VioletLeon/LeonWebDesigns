import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          <h1 className="text-blue-600 typewriter" href="https://nextjs.org">
            Violet Leon
          </h1>
        </h1>

        <h2 className="text-2xl mt-10">Full-stack Web Developer</h2>
        <h2 className="text-2xl mt-2">Full-stack Web Developer</h2>
        <h2 className="text-2xl mt-2">Full-stack Web Developer</h2>
        <h2 className="text-2xl mt-2">Full-stack Web Developer</h2>
        <h2 className="text-2xl mt-2">Full-stack Web Developer</h2>
      </main>
    </div>
  );
}
