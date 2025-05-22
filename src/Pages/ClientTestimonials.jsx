import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    image: "https://i.pravatar.cc/100?img=1",
    rating: 5,
    quote: "Service Compass has been a game-changer for our business. Their team is professional and always on time. Highly recommend!",
  },
  {
    name: "Michael Chen",
    role: "Freelancer",
    image: "https://i.pravatar.cc/100?img=2",
    rating: 4,
    quote: "Very efficient and responsive service. They always deliver what they promise. I’m a happy client!",
  },
  {
    name: "Ayesha Begum",
    role: "IT Manager",
    image: "https://i.pravatar.cc/100?img=3",
    rating: 5,
    quote: "Excellent customer support and reliable technical assistance. We’ve partnered with Service Compass for years now!",
  },
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) stars.push(<FaStar key={i} className="text-yellow-400" />);
    else if (i - 0.5 === rating) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
  }
  return stars;
};

const ClientTestimonials = () => {
  return (
    <section className="bg-[#D8EAFC] px-4 py-16 md:px-10 lg:px-20 overflow-x-hidden text-base-300 ">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-base-300">What Our Clients Say</h2>
      </div>

      <div className="flex overflow-x-auto gap-8 snap-x snap-mandatory pb-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="min-w-[280px] md:min-w-[350px] snap-start flex-shrink-0 bg-transparent border-l-4 border-primary px-6 py-4"
          >
            <p className="italic text-gray-700 mb-4">“{testimonial.quote}”</p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-base font-semibold text-base-300">{testimonial.name}</h4>
                <p className="text-xs text-base-300">{testimonial.role}</p>
                <div className="flex mt-1">{renderStars(testimonial.rating)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientTestimonials;
