import { Helmet } from "react-helmet";
import ArtifactCards from "../../components/ArtifactCards/ArtifactCards";
import HeroSection from "../../components/HeroSection/HeroSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page | Historical Artifacts</title>
      </Helmet>
      {/* Navbar */}

      <HeroSection />
      <ArtifactCards />

      {/* Join Community Section */}
      <section className="bg-gradient-to-r from-yellow-100 via-pink-50 to-yellow-100 py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
            Join Our Community
          </h2>
          <p className="text-gray-700 mb-8">
            Connect with like-minded enthusiasts and contribute to the
            preservation of history.
          </p>
          <a
            href="/register"
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-lg shadow-lg hover:opacity-90"
          >
            Register Now
          </a>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="my-28 ">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg">
            Our mission is to bring history closer to you by creating a platform
            that preserves and shares the stories behind historical artifacts.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
