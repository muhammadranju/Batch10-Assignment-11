import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const ArtifactDetails = () => {
  const [liked, setLiked] = useState(false);
  // const [likes, setLikes] = useState(0);
  const [artifact, setArtifact] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getArtifact = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BackendURL}/api/artifacts/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setArtifact(data.data);
      setLiked(data.data.likes > 0);
    };
    getArtifact();
  }, []);

  const toggleLike = () => setLiked(!liked);

  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center py-16 lg:px-0 px-3  ">
      <Helmet>
        <title>Artifact Details Page | Historical Artifacts</title>
      </Helmet>

      <div className="max-w-5xl w-full bg-white/20 rounded-lg shadow-xl overflow-hidden">
        {/* Image Section */}
        <div className="w-full h-full  bg-gray-200 relative">
          <img
            src={artifact?.imageUrl}
            alt={artifact?.artifactName}
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
          <h1 className="text-3xl font-bold text-gray-800">
            {artifact?.artifactName}
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            {artifact?.historicalContext}
          </p>
        </div>

        {/* Metadata Section */}
        <div className="px-8 py-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Creation Date</p>
            <p className="text-lg text-gray-800 font-medium">
              {artifact?.createdAt}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Discovered Date</p>
            <p className="text-lg text-gray-800 font-medium">
              {artifact?.discoveredAt}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Material</p>
            <p className="text-lg text-gray-800 font-medium">
              {artifact?.artifactType}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Discovered By</p>
            <p className="text-lg text-gray-800 font-medium">
              {artifact?.discoveredBy}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Present Location</p>
            <p className="text-lg text-gray-800 font-medium">
              {artifact?.presentLocation}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Artifact Added By</p>
            <p className="text-lg text-gray-800 font-medium">
              {artifact?.addedBy?.name}
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
          <button
            onClick={() => {
              window.navigator.clipboard.writeText(window.location.href);
              toast.success("Copied to clipboard!");
            }}
            className="px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 transition duration-300"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;
