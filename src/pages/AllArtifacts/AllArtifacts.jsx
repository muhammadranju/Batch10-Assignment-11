import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import { useEffect, useState } from "react";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  // const [search, setSearch] = useState("");

  useEffect(() => {
    const getArtifacts = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BackendURL}/api/artifacts`
      );
      const data = await response.json();
      setArtifacts(data.data);
    };
    getArtifacts();
  }, []);

  const handleSearch = async (e) => {
    const { value } = e.target;
    const response = await fetch(
      `${import.meta.env.VITE_BackendURL}/api/artifacts?search=${value}`
    );
    const data = await response.json();
    setArtifacts(data.data);
    console.log(data);
    // setSearch(value);
  };
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
          <div className="mt-8 mb-12 flex justify-center items-center w-1/2 mx-auto">
            <label className="input input-bordered flex items-center gap-2">
              <HiSearch />
              <input
                type="text"
                onChange={handleSearch}
                className="grow w-full"
                placeholder="Search Artifacts..."
              />
            </label>
          </div>

          {/* Artifacts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {artifacts?.map((artifact) => (
              <div
                key={artifact._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <img
                  src={artifact.imageUrl}
                  alt={artifact.artifactName}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {artifact.artifactName}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    {artifact.historicalContext.length > 50
                      ? artifact.historicalContext.slice(0, 80) + "..."
                      : artifact.historicalContext}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-gray-700 font-medium">
                      Likes: {artifact?.likes}
                    </span>
                    <Link
                      to={`/artifact/${artifact?.slug}`}
                      className="bg-gradient-to-r from-blue-500 to-blue-800 text-white px-4 py-2 rounded-md hover:opacity-90"
                    >
                      View Details
                    </Link>
                  </div>
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
