/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert"; // For SweetAlert
import { AuthContext } from "../../context/AuthProvider";

const AddArtifact = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    artifactName: "",
    imageUrl: "",
    artifactType: "",
    historicalContext: "",
    createdAt: "",
    discoveredAt: "",
    discoveredBy: "",
    presentLocation: "",
    name: user?.displayName,
    email: user?.email,
  });

  const [artifactName, setArtifactName] = useState("");
  const [imageUrl, setImageUrlsetImageUrl] = useState("");
  const [artifactType, setArtifactType] = useState("Tools");
  const [historicalContext, setHistoricalContext] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [discoveredAt, setDiscoveredAt] = useState("");
  const [discoveredBy, setDiscoveredBy] = useState("");
  const [presentLocation, setPresentLocation] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation (e.g., check if fields are filled, valid URL for image)
    const {
      artifactName,
      imageUrl,
      historicalContext,
      createdAt,
      discoveredAt,
      discoveredBy,
      presentLocation,
    } = formData;
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

    // Simulating API call to store the artifact (replace with actual API call)
    try {
      // await api.addArtifact(newArtifact); // Uncomment and replace with actual API call
      Swal("Success", "Artifact added successfully!", "success");
    } catch (error) {
      Swal("Error", "Failed to add artifact. Please try again.", "error");
    }
  };
  console.log(formData);

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20 bg-white rounded-lg lg:shadow-lg mb-20 ">
      <Helmet>
        <title>Add Artifact Page | Historical Artifacts</title>
      </Helmet>
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
            value={formData.artifactName}
            onChange={handleChange}
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
            value={formData.imageUrl}
            onChange={handleChange}
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
            value={formData.artifactType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Select Artifact Type</option>
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
            value={formData.historicalContext}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter historical context of the artifact"
            rows="4"
          />
        </div>

        {/* Created At */}

        <div className="flex justify-between items-center gap-x-5">
          <div className="w-full">
            <label
              htmlFor="createdAt"
              className="block text-gray-700 font-medium"
            >
              Created At<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="createdAt"
              value={formData.createdAt}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 100 BC"
            />
          </div>

          {/* Discovered At */}
          <div className="w-full">
            <label
              htmlFor="discoveredAt"
              className="block text-gray-700 font-medium"
            >
              Discovered At<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="discoveredAt"
              value={formData.discoveredAt}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 1799"
            />
          </div>
        </div>

        {/* Discovered By */}
        <div className="flex justify-between items-center gap-x-5">
          <div className="w-full">
            <label
              htmlFor="discoveredBy"
              className="block text-gray-700 font-medium"
            >
              Discovered By<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="discoveredBy"
              value={formData.discoveredBy}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter name of the person who discovered"
            />
          </div>

          {/* Present Location */}
          <div className="w-full">
            <label
              htmlFor="presentLocation"
              className="block text-gray-700 font-medium"
            >
              Present Location<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="presentLocation"
              value={formData.presentLocation}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Where is the artifact located now?"
            />
          </div>
        </div>

        {/* Logged-In User Info (Read-Only) */}
        <div className="flex justify-between">
          <div>
            <label className="block text-gray-700 font-medium">
              Added By (Name)
            </label>
            <input
              type="text"
              value={user?.displayName}
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
              value={user?.email}
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
