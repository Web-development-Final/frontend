import Head from "next/head";

const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Head>
        <title>Music Live</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Search Music Live</main>
    </div>
  );
};

export default Home;
