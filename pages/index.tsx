import Layout from "../components/Layout";
import EventForm from "../components/UI/EventForm"

const Home: React.FC = () => {
  return (
    <>
      <Layout title="Home">
        <div className="my-16 text-center md:flex md:justify-around md:items-center">
          <div className="my-8">
            <h2 className="text-center capitalize text-xl">about this page</h2>
            <p className="my-4">
              This web application helps you search your favorite music.
            </p>
            <p className="my-4">
              Easy to use this application.
            </p>
            <span>
              You can search music live from here!
            </span>
          </div>
          <div className="max-w-lg inline-block">
            <img src="/assets/images/music-live-02.jpg" alt="listener" />
          </div>
        </div>
        <div className="my-16 text-center md:flex md:flex-row-reverse md:justify-around md:items-center">
          <div className="my-8">
            <h2 className="text-center capitalize text-xl">music live</h2>
            <p className="my-4">
              Search music live information!
            </p>
            <p className="my-4">
              You can check your favorite artists.
            </p>
            <button className="btn px-6 py-2 bg-secondary text-secondary hover:bg-white hover:text-primary focus:outline-none">
              Check
            </button>
          </div>
          <div className="max-w-lg inline-block">
            <img
              src="/assets/images/music-live-03.jpg"
              alt="livehouse"
            />
          </div>
        </div>
        <EventForm />
      </Layout>
    </>
  );
};

export default Home;
