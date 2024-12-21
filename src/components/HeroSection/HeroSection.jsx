import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white">
        <div className="w-11/12 lg:w-11/12 md:w-11/12 xl:container  mx-auto px-6 py-16 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Explore the Stories <br /> Behind the Relics
            </h1>
            <p className="mb-8 text-lg">
              Uncover the beauty and history of artifacts worldwide with our
              platform. Contribute and preserve the tales for future
              generations.
            </p>
            <Link
              to="/artifacts"
              className="bg-gradient-to-r from-pink-500 to-yellow-500 px-8 py-3 text-white font-semibold rounded-lg shadow-lg hover:opacity-90"
            >
              Explore Artifacts
            </Link>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="https://via.placeholder.com/500x350"
              alt="Hero Image"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
