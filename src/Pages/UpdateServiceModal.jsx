import React, { useState, useEffect } from "react";

const UpdateServiceModal = ({ isOpen, onClose, service, onSave }) => {
  const [updatedService, setUpdatedService] = useState(service);

  useEffect(() => {
    if (service) {
      setUpdatedService(service);
    }
  }, [service]);

  if (!isOpen || !updatedService) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedService((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(updatedService);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Edit Service</h2>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Title:</label>
            <input
              type="text"
              name="title"
              value={updatedService.title}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Category:</label>
            <input
              type="text"
              name="category"
              value={updatedService.category}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Price:</label>
            <input
              type="number"
              name="price"
              value={updatedService.price}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Image URL:</label>
            <input
              type="text"
              name="image"
              value={updatedService.image}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Update
            </button>

            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateServiceModal;
