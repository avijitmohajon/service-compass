import React, { useState } from "react"; 
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomeCards = ({ services }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("title"); // Default sort by title

  if (!services || services.length === 0) {
    return <div>No services found</div>;
  }

  // Filtered services based on the search query
  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sorting logic based on selected sort option
  const sortedServices = filteredServices.sort((a, b) => {
    if (sortBy === "price") {
      return a.price - b.price; // Sort by price (ascending)
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category); 
    } else {
      return a.title.localeCompare(b.title); 
    }
  });

  // Limit to 6 services for home to show cards
  const limitedServices = sortedServices.slice(0, 6);

  return (
    <div className="w-full mx-auto p-6 bg-[#79b7bd]">
      <h2 className="text-2xl md:text-5xl font-bold text-center mb-6 uppercase text-[#d7fbf3] ">
        Explore Our Services
      </h2>

      <section className="flex flex-col md:flex-row justify-between items-center ">
        {/* Search Bar for title*/}
        <div className="flex  w-72 items-right space-x-2 border border-black rounded-md p-2 mb-6">
          <FaSearch className="mt-3 text-black" />
          <input
            type="text"
            placeholder="Search Services By Title"
            className="flex-1 p-2 outline-none bg-transparent text-lg text-black placeholder-black "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Sort Dropdown */}
        <div className="mb-6 ">
          <label htmlFor="sortBy" className="mr-2 text-lg text-black">
            Sort By:
          </label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 bg-transparent border text-black border-base-200 h-14 rounded-md w-44 outline-none"
          >
            <option value="title">Title</option>
            <option value="price">Price</option>
            <option value="category">Category</option>
          </select>
        </div>
      </section>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {limitedServices.map((service) => (
          <div
            key={service._id}
            className="rounded-lg shadow-2xl p-4 transition transform hover:scale-105 hover:shadow-xl bg-[#06364a]"
          >
            
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-lg "
            />

            {/* Service Info */}
            <h3 className="text-xl font-semibold mt-3">{service.title}</h3>
            <p className="mt-2">{service.description.slice(0, 100)}...</p>
            <p className="font-medium mt-1">Category: {service.category}</p>
            <p className="font-semibold mt-1">Price: ${service.price}</p>

            {/* See Details Button */}
            <button
              onClick={() => navigate(`/services/${service._id}`)}
              className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              See Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
