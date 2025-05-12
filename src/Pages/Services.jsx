import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Services = () => {
  const services = useLoaderData();
  const navigate = useNavigate();
  
  return (
    <div className="w-full mx-auto p-6 bg-[#adc5dd]">
      <h2 className="text-2xl md:text-5xl font-bold text-center mb-6 uppercase text-base-300">Our Services</h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service._id}
            className="rounded-lg shadow-2xl p-4 transition transform hover:scale-105 bg-[#c4daf0] text-base-300 flex flex-col"
          >
            {/* Service Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-lg "
            />

            {/* Service Info */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold mt-3">{service.title}</h3>
              <p className="mt-2">{service.description.slice(0, 100)}...</p>
              <p className="font-medium mt-1">Category: {service.category}</p>
              <p className="font-semibold mt-1">Price: ${service.price}</p>
            </div>

            {/* See Details Button */}
            <button
              onClick={() => navigate(`/services/${service._id}`)}
              className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition glass"
            >
              See Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
