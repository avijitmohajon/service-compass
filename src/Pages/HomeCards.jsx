import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomeCards = ({ services }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("title");

  if (!services || services.length === 0) {
    return <div>No services found</div>;
  }

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedServices = filteredServices.sort((a, b) => {
    if (sortBy === "price") {
      return a.price - b.price;
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  const limitedServices = sortedServices.slice(0, 6);

  return (
    <div className="w-full mx-auto p-4 sm:p-6 bg-[#adc5dd]">
      <h2 className="text-2xl md:text-5xl font-bold text-center mb-6 md:mt-10 uppercase text-base-300">
        Explore Our Services
      </h2>

     

<section className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 px-4">
  {/* Search Bar */}
  <div className="flex w-full md:w-72 items-center space-x-2 border border-black rounded-md p-2">
    <FaSearch className="text-black" />
    <input
      type="text"
      placeholder="Search Services By Title"
      className="flex-1 p-2 outline-none bg-transparent text-lg text-black placeholder-black"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  </div>

  {/* Sort Dropdown */}
  <div className="w-full md:w-auto">
    <label htmlFor="sortBy" className="mr-2 text-lg text-black">
      Sort By:
    </label>
    <select
      id="sortBy"
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="p-2 bg-transparent border text-black border-base-200 h-12 rounded-md w-full md:w-44 outline-none"
    >
      <option value="title">Title</option>
      <option value="price">Price</option>
      <option value="category">Category</option>
    </select>
  </div>
</section>


      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:pb-10 ">
        {limitedServices.map((service) => (
          <div
            key={service._id}
            className="rounded-lg shadow-2xl p-4 transition transform hover:scale-105 bg-[#c4daf0] text-base-300 flex flex-col h-full"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-lg"
            />

            <h3 className="text-xl font-semibold mt-3">{service.title}</h3>
            
            <p className="font-medium mt-1">Category: {service.category}</p>
            <p className="font-semibold mt-1">Price: ${service.price}</p>

            <button
              onClick={() => navigate(`/services/${service._id}`)}
              className="mt-auto w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition"
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
