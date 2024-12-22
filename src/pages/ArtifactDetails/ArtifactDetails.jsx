import { useState } from "react";
import { Helmet } from "react-helmet";

const ArtifactDetails = () => {
  const [liked, setLiked] = useState(false);

  // Placeholder data for the artifact
  const artifact = {
    title: "Ancient Vase",
    image:
      "https://assets.editorial.aetnd.com/uploads/2012/05/this-day-in-history-07-19-1799-rosetta-stone-found.jpg", // Replace with actual artifact image
    description:
      "A beautiful ancient vase dating back to the 12th century. It is a symbol of craftsmanship and cultural heritage.",
    creator: "John Doe",
    creationDate: "1200 AD",
    material: "Ceramic",
  };

  const toggleLike = () => setLiked(!liked);

  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center py-16 lg:px-0 px-3  ">
      <Helmet>
        <title>Artifact Details Page | Historical Artifacts</title>
      </Helmet>

      <div className="max-w-5xl w-full bg-white/20 rounded-lg shadow-xl overflow-hidden">
        {/* Image Section */}
        <div className="w-full h-full lg:h-[500px] bg-gray-200 relative">
          <img
            src={artifact.image}
            alt={artifact.title}
            className="w-full h-full object-cover"
          />
          <button
            className={`absolute top-4 right-4 p-2 rounded-full ${
              liked
                ? "bg-red-400 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } shadow-md transition duration-300`}
          >
            {liked ? "❤️" : "♡"}
          </button>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800">{artifact.title}</h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            {artifact.description}
          </p>
        </div>

        {/* Metadata Section */}
        <div className="px-8 py-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Creator</p>
            <p className="text-lg text-gray-800 font-medium">
              {artifact.creator}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Creation Date</p>
            <p className="text-lg text-gray-800 font-medium">
              {artifact.creationDate}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Material</p>
            <p className="text-lg text-gray-800 font-medium">
              {artifact.material}
            </p>
          </div>
        </div>

        {/* Actions Section */}
        <div className="px-8 py-6 border-t border-gray-200 flex justify-between items-center">
          <button
            onClick={toggleLike}
            className={`px-6 py-2  text-white font-medium rounded-md hover:bg-blue-700 hover:opacity-90 transition duration-300 ${
              liked
                ? "bg-gradient-to-r from-red-500 to-red-800"
                : "bg-gradient-to-r from-blue-500 to-blue-800"
            }`}
          >
            <span>{liked ? "Dislike ❤️" : "Liked  ♡"}</span>
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 transition duration-300">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;
