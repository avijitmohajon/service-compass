import React from "react";
import {
  FaTools,
  FaHeadset,
  FaBolt,
  FaShieldAlt,
  FaClock,
  FaThumbsUp,
} from "react-icons/fa";

const WhatWeOffer = () => {
  const services = [
    {
      icon: <FaTools className="text-4xl text-primary mb-3" />,
      title: "Expert Maintenance",
      description: "Reliable and professional service to keep your systems running smoothly.",
    },
    {
      icon: <FaHeadset className="text-4xl text-primary mb-3" />,
      title: "24/7 Customer Support",
      description: "Always here to assist you, anytime, anywhere.",
    },
    {
      icon: <FaBolt className="text-4xl text-primary mb-3" />,
      title: "Fast Response",
      description: "Quick and efficient service when you need it most.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-primary mb-3" />,
      title: "Secure Solutions",
      description: "Your data and privacy are always protected with our services.",
    },
    {
      icon: <FaClock className="text-4xl text-primary mb-3" />,
      title: "On-Time Delivery",
      description: "Punctual service guaranteed, every single time.",
    },
    {
      icon: <FaThumbsUp className="text-4xl text-primary mb-3" />,
      title: "Quality Assurance",
      description: "We ensure each service meets the highest standards of quality.",
    },
  ];

  return (
    <section className="bg-[#ACC5DC] px-4 py-14 md:px-10 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-base-300 mb-4">What We Offer</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 text-center">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center justify-center px-4">
            {service.icon}
            <h3 className="text-xl font-semibold text-base-300 mb-2">{service.title}</h3>
            <p className="text-base-300 md:text-base text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
