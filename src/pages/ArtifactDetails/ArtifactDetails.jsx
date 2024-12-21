import { useState } from "react";

const ArtifactDetails = () => {
  const [liked, setLiked] = useState(false);

  // Placeholder data for the artifact
  const artifact = {
    title: "Ancient Vase",
    image: "https://via.placeholder.com/600x400", // Replace with artifact image
    description:
      "A beautiful ancient vase dating back to the 12th century. It is a symbol of craftsmanship and cultural heritage.",
    creator: "John Doe",
    creationDate: "1200 AD",
    material: "Ceramic",
    additionalImages: [
      "https://via.placeholder.com/400x300",
      "https://via.placeholder.com/400x300",
      "https://via.placeholder.com/400x300",
    ],
    comments: [
      { user: "Alice", text: "Amazing craftsmanship!" },
      { user: "Bob", text: "Such a beautiful piece of history." },
    ],
  };

  const toggleLike = () => setLiked(!liked);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 w-full">
            <img
              src={artifact.image}
              alt={artifact.title}
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0 lg:ml-12">
            <h2 className="text-4xl font-extrabold text-gray-900">
              {artifact.title}
            </h2>
            <p className="text-lg text-gray-600 mt-4">{artifact.description}</p>
            <div className="mt-6 flex space-x-4">
              <button
                onClick={toggleLike}
                className={`px-6 py-2 rounded-full ${
                  liked ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-700"
                } hover:bg-blue-700 transition duration-300`}
              >
                {liked ? "Liked" : "Like"}
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition duration-300">
                Add to Collection
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-gray-900">Details</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
            <div className="space-y-4">
              <p>
                <span className="font-semibold">Creator:</span>{" "}
                {artifact.creator}
              </p>
              <p>
                <span className="font-semibold">Creation Date:</span>{" "}
                {artifact.creationDate}
              </p>
              <p>
                <span className="font-semibold">Material:</span>{" "}
                {artifact.material}
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-700">{artifact.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-gray-900">Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {artifact.additionalImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={image}
                  alt={`Artifact Image ${index + 1}`}
                  className="w-full h-full object-cover transform transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-gray-900">Comments</h3>
          <div className="mt-8 space-y-4">
            {artifact.comments.map((comment, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                <p className="font-semibold text-gray-800">{comment.user}</p>
                <p className="text-gray-600">{comment.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtifactDetails;
