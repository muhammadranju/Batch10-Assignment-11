/* eslint-disable no-unused-vars */
import { useState } from "react";
import Swal from "sweetalert"; // For SweetAlert

import { IoMdClose } from "react-icons/io";

const MyArtifacts = () => {
  // Dummy Data for Artifacts added by the logged-in user
  const userArtifacts = [
    {
      id: 1,
      name: "Ancient Sword",
      image: "https://via.placeholder.com/300x200",
      type: "Weapon",
      createdAt: "500 BC",
      discoveredAt: "1234",
      discoveredBy: "Explorer John",
      location: "Museum of History",
    },
    {
      id: 2,
      name: "Royal Scroll",
      image: "https://via.placeholder.com/300x200",
      type: "Document",
      createdAt: "200 BC",
      discoveredAt: "1500",
      discoveredBy: "Explorer Jane",
      location: "National Library",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentArtifact, setCurrentArtifact] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    name: "",
    image: "",
    type: "",
    createdAt: "",
    discoveredAt: "",
    discoveredBy: "",
    location: "",
  });

  // Handle Update Button Click
  const handleUpdateClick = (artifact) => {
    setCurrentArtifact(artifact);
    setUpdatedData({ ...artifact }); // Pre-populate the form with existing data
    setIsModalOpen(true); // Open the modal
  };

  // Handle Delete Button Click
  const handleDeleteClick = (artifactId) => {
    Swal({
      title: "Are you sure?",
      text: "Once deleted, this artifact cannot be recovered!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Simulate deleting the artifact
        Swal("Deleted!", "Your artifact has been deleted.", "success");
        // Logic for deleting the artifact from the database goes here
      }
    });
  };

  // Handle Form Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle Update Submission
  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    // Simulate successful update
    Swal.fire("Updated!", "Your artifact has been updated.", "success");
    setIsModalOpen(false);
    // Logic for updating the artifact data in your database should go here
  };

  return (
    <div className="py-16 px-6 w-11/12 lg:w-11/12 md:w-11/12 xl:container mx-auto ">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
        My Artifacts
      </h1>

      {/* Check if user has any artifacts */}
      {userArtifacts.length === 0 ? (
        <div className="text-center text-xl text-gray-600">
          You don&apos;t have any artifacts yet. Add some artifacts to your
          collection!
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {userArtifacts.map((artifact) => (
            <div
              key={artifact.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={artifact.image}
                alt={artifact.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {artifact.name}
                </h3>
                <p className="text-gray-600 mt-2">Type: {artifact.type}</p>
                <p className="text-gray-600 mt-2">
                  Created At: {artifact.createdAt}
                </p>
                <p className="text-gray-600 mt-2">
                  Discovered At: {artifact.discoveredAt}
                </p>
                <p className="text-gray-600 mt-2">
                  Location: {artifact.location}
                </p>

                {/* Update Button */}
                <button
                  onClick={() => handleUpdateClick(artifact)}
                  className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Update
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => handleDeleteClick(artifact.id)}
                  className="mt-4 ml-4 text-red-600 hover:text-red-800 font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal for Update Artifact */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[30%]">
            <div className="flex justify-between items-center ">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Update Artifact
              </h2>
              <span className="text-gray-600 hover:text-gray-800 cursor-pointer text-xl">
                <IoMdClose onClick={() => setIsModalOpen(false)} />
              </span>
            </div>

            <form onSubmit={handleUpdateSubmit}>
              {/* Artifact Name */}
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Artifact Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={updatedData.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />

              {/* Artifact Image URL */}
              <label className="block text-gray-700 mb-2" htmlFor="image">
                Artifact Image (valid URL)
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={updatedData.image}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />

              {/* Artifact Type */}
              <label className="block text-gray-700 mb-2" htmlFor="type">
                Artifact Type
              </label>
              <select
                id="type"
                name="type"
                value={updatedData.type}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              >
                <option value="Weapon">Weapon</option>
                <option value="Document">Document</option>
                <option value="Tool">Tool</option>
                <option value="Writing">Writing</option>
                {/* Add more options as needed */}
              </select>

              {/* Created At */}
              <label className="block text-gray-700 mb-2" htmlFor="createdAt">
                Created At
              </label>
              <input
                type="text"
                id="createdAt"
                name="createdAt"
                value={updatedData.createdAt}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />

              {/* Discovered At */}
              <label
                className="block text-gray-700 mb-2"
                htmlFor="discoveredAt"
              >
                Discovered At
              </label>
              <input
                type="text"
                id="discoveredAt"
                name="discoveredAt"
                value={updatedData.discoveredAt}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />

              {/* Discovered By */}
              <label
                className="block text-gray-700 mb-2"
                htmlFor="discoveredBy"
              >
                Discovered By
              </label>
              <input
                type="text"
                id="discoveredBy"
                name="discoveredBy"
                value={updatedData.discoveredBy}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />

              {/* Present Location */}
              <label className="block text-gray-700 mb-2" htmlFor="location">
                Present Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={updatedData.location}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />

              {/* Update Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-800"
              >
                Update Artifact
              </button>
            </form>

            {/* Close Modal Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-600"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyArtifacts;
