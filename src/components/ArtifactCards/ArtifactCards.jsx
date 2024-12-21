import { Link } from "react-router-dom";

const ArtifactCards = () => {
  return (
    <>
      {/* Featured Artifacts Section */}
      <section className="w-11/12 lg:w-11/12 md:w-11/12 xl:container  mx-auto px-6 py-16">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Featured Artifacts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
              >
                <img
                  src="https://via.placeholder.com/250x150"
                  alt="Artifact"
                  className="rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Artifact Name
                </h3>
                <p className="text-gray-600 mt-2">
                  A brief description of the artifact highlighting its
                  historical significance.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-700 font-medium">Likes: 42</span>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md hover:opacity-90">
                    View Details
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/artifacts"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90"
          >
            See All
          </Link>
        </div>
      </section>
    </>
  );
};

export default ArtifactCards;
