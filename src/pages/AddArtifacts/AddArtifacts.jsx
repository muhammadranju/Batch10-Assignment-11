import { useState } from "react";
import Swal from "sweetalert"; // For SweetAlert

const AddArtifact = () => {
  const [artifactName, setArtifactName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [artifactType, setArtifactType] = useState("Tools");
  const [historicalContext, setHistoricalContext] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [discoveredAt, setDiscoveredAt] = useState("");
  const [discoveredBy, setDiscoveredBy] = useState("");
  const [presentLocation, setPresentLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation (e.g., check if fields are filled, valid URL for image)
    if (
      !artifactName ||
      !imageUrl ||
      !historicalContext ||
      !createdAt ||
      !discoveredAt ||
      !discoveredBy ||
      !presentLocation
    ) {
      Swal("Error", "All fields are required!", "error");
      return;
    }

    const newArtifact = {
      artifactName,
      imageUrl,
      artifactType,
      historicalContext,
      createdAt,
      discoveredAt,
      discoveredBy,
      presentLocation,
      adderName: "John Doe",
      adderEmail: "johndoe@example.com",
      likeCount: 0, // initial like count
    };

    // Simulating API call to store the artifact (replace with actual API call)
    try {
      // await api.addArtifact(newArtifact); // Uncomment and replace with actual API call
      Swal.fire("Success", "Artifact added successfully!", "success");
      history.push("/artifacts"); // Redirect to artifacts list page or wherever needed
    } catch (error) {
      Swal.fire("Error", "Failed to add artifact. Please try again.", "error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Add Artifact
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Artifact Name */}
        <div>
          <label
            htmlFor="artifactName"
            className="block text-gray-700 font-medium"
          >
            Artifact Name<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="artifactName"
            value={artifactName}
            onChange={(e) => setArtifactName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter artifact name"
          />
        </div>

        {/* Artifact Image URL */}
        <div>
          <label htmlFor="imageUrl" className="block text-gray-700 font-medium">
            Artifact Image URL<span className="text-red-600">*</span>
          </label>
          <input
            type="url"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter valid image URL"
          />
        </div>

        {/* Artifact Type */}
        <div>
          <label
            htmlFor="artifactType"
            className="block text-gray-700 font-medium"
          >
            Artifact Type<span className="text-red-600">*</span>
          </label>
          <select
            id="artifactType"
            value={artifactType}
            onChange={(e) => setArtifactType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Tools">Tools</option>
            <option value="Weapons">Weapons</option>
            <option value="Documents">Documents</option>
            <option value="Writings">Writings</option>
            <option value="Art">Art</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Historical Context */}
        <div>
          <label
            htmlFor="historicalContext"
            className="block text-gray-700 font-medium"
          >
            Historical Context<span className="text-red-600">*</span>
          </label>
          <textarea
            id="historicalContext"
            value={historicalContext}
            onChange={(e) => setHistoricalContext(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter historical context of the artifact"
            rows="4"
          />
        </div>

        {/* Created At */}
        <div>
          <label
            htmlFor="createdAt"
            className="block text-gray-700 font-medium"
          >
            Created At<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="createdAt"
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 100 BC"
          />
        </div>

        {/* Discovered At */}
        <div>
          <label
            htmlFor="discoveredAt"
            className="block text-gray-700 font-medium"
          >
            Discovered At<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="discoveredAt"
            value={discoveredAt}
            onChange={(e) => setDiscoveredAt(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 1799"
          />
        </div>

        {/* Discovered By */}
        <div>
          <label
            htmlFor="discoveredBy"
            className="block text-gray-700 font-medium"
          >
            Discovered By<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="discoveredBy"
            value={discoveredBy}
            onChange={(e) => setDiscoveredBy(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter name of the person who discovered"
          />
        </div>

        {/* Present Location */}
        <div>
          <label
            htmlFor="presentLocation"
            className="block text-gray-700 font-medium"
          >
            Present Location<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="presentLocation"
            value={presentLocation}
            onChange={(e) => setPresentLocation(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Where is the artifact located now?"
          />
        </div>

        {/* Logged-In User Info (Read-Only) */}
        <div className="flex justify-between">
          <div>
            <label className="block text-gray-700 font-medium">
              Added By (Name)
            </label>
            <input
              type="text"
              value={"John Doe"}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 cursor-not-allowed"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Added By (Email)
            </label>
            <input
              type="email"
              value={"johndoe@example.com"}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 cursor-not-allowed"
              readOnly
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg shadow-md hover:opacity-90"
          >
            Add Artifact
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArtifact;
