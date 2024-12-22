import { Helmet } from "react-helmet";
import { NavLink, useNavigate } from "react-router-dom";

const AllArtifacts = () => {
  const navigate = useNavigate();
  // Dummy Data for Artifacts
  const artifacts = [
    {
      id: 1,
      title: "Ancient Vase",
      image:
        "https://assets.editorial.aetnd.com/uploads/2012/05/this-day-in-history-07-19-1799-rosetta-stone-found.jpg",
      description: "A beautiful ancient vase dating back to the 12th century.",
    },
    {
      id: 2,
      title: "Gold Necklace",
      image:
        "https://www.artlex.com/wp-content/uploads/2022/11/Phaistos-Disc.jpg",
      description: "A gold necklace adorned with precious stones.",
    },
    {
      id: 3,
      title: "Stone Tablet",
      image: "https://via.placeholder.com/300x200",
      description: "An old stone tablet with ancient inscriptions.",
    },
    {
      id: 4,
      title: "Ceramic Pot",
      image: "https://via.placeholder.com/300x200",
      description: "A beautifully crafted ceramic pot from ancient times.",
    },
    {
      id: 5,
      title: "Ancient Sculpture",
      image: "https://via.placeholder.com/300x200",
      description: "A marble sculpture depicting a historical figure.",
    },
    {
      id: 6,
      title: "Golden Artifact",
      image: "https://via.placeholder.com/300x200",
      description: "A golden artifact dating back to the early 1500s.",
    },
  ];

  return (
    <div className=" flex flex-col pb-10">
      {/* Main Content */}
      <Helmet>
        <title>All Artifact Page | Historical Artifacts</title>
      </Helmet>
      <div className="py-16 px-6">
        <div className="w-11/12 lg:w-11/12 md:w-11/12 xl:container  mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center">
            All Artifacts
          </h1>
          {/* Search and Filter */}
          <div className="mt-8 mb-12 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search Artifacts..."
                className="px-4 py-2 border border-gray-300 rounded-lg w-1/2 md:w-1/4"
              />
              <select className="px-4 py-2 border border-gray-300 rounded-lg">
                <option>All Categories</option>
                <option>Vases</option>
                <option>Necklaces</option>
                <option>Sculptures</option>
              </select>
            </div>
            <NavLink
              to="/add-artifact"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow hover:opacity-90 transition duration-300"
            >
              Add Artifact
            </NavLink>
          </div>

          {/* Artifacts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {artifacts.map((artifact) => (
              <div
                key={artifact.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <img
                  src={artifact.image}
                  alt={artifact.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {artifact.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{artifact.description}</p>

                  <button
                    onClick={() => navigate(`/artifact/${artifact.id}`)}
                    className="bg-gradient-to-r from-blue-500 to-blue-800 text-white px-4 py-2 rounded-md hover:opacity-90 mt-2"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination (Optional) */}
          <div className="pt-12 flex justify-center">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:opacity-90 mr-4">
              Previous
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:opacity-90">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllArtifacts;
