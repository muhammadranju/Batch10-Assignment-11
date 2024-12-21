import { NavLink } from "react-router-dom";

const LikedArtifacts = () => {
  // Dummy Data for Liked Artifacts
  const likedArtifacts = [
    {
      id: 1,
      title: "Golden Ring",
      image: "https://via.placeholder.com/300x200",
      description: "A beautifully crafted golden ring with intricate designs.",
    },
    {
      id: 2,
      title: "Ancient Scroll",
      image: "https://via.placeholder.com/300x200",
      description: "A rare ancient scroll from the early 12th century.",
    },
    {
      id: 3,
      title: "Stone Pendant",
      image: "https://via.placeholder.com/300x200",
      description: "A pendant made from stone with mystical carvings.",
    },
    {
      id: 4,
      title: "Silver Cup",
      image: "https://via.placeholder.com/300x200",
      description: "An elegantly designed silver cup used in royal ceremonies.",
    },
    {
      id: 5,
      title: "Golden Statue",
      image: "https://via.placeholder.com/300x200",
      description: "A small golden statue representing an ancient deity.",
    },
    {
      id: 6,
      title: "Bronze Sword",
      image: "https://via.placeholder.com/300x200",
      description: "A bronze sword, beautifully preserved through centuries.",
    },
  ];

  return (
    <div className="py-16 px-6 w-11/12 lg:w-11/12 md:w-11/12 xl:container mx-auto ">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
        Liked Artifacts
      </h1>

      {/* Artifacts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {likedArtifacts.map((artifact) => (
          <div
            key={artifact.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={artifact.image}
              alt={artifact.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {artifact.title}
              </h3>
              <p className="text-gray-600 mt-2">{artifact.description}</p>
              <NavLink
                to={`/artifact/${artifact.id}`}
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
              >
                View Details
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedArtifacts;
