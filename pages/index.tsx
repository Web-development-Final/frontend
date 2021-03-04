import Layout from "../components/Layout";
import { getEventData } from "../lib/graphql";

const Home: React.FC = () => {
  return (
    <>
      <Layout title="Home">
        <div className="my-16">
          <div className="my-8 text-center">
            <h2 className="text-center capitalize">about this page</h2>
            <p className="my-4">you can search live information</p>
          </div>
          <div className="">
            <img src="/assets/images/music-live-02.jpg" alt="listener" />
          </div>
        </div>
        <div className="my-16">
          <div className="my-8 text-center">
            <h2 className="capitalize">music live</h2>
            <p className="my-4">you can search live information</p>
            <button className="btn px-6 py-2 bg-secondary text-secondary hover:bg-white hover:text-primary focus:outline-none">
              Search
            </button>
          </div>
          <div className="">
            <img
              src="/assets/images/music-live-03.jpg"
              alt="livehouse"
              onClick={getEventData}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
