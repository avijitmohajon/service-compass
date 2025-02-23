import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddService = () => {
  const categories = [
    "Accounting Services",
    "Advertising & Marketing",
    "App Development",
    "Appliance Repair",
    "Architecture & Interior Design",
    "Auto Repair & Maintenance",
    "Babysitting & Childcare",
    "Banking & Financial Services",
    "Beauty & Salon Services",
    "Business Consulting",
    "Car Rental Services",
    "Carpet Cleaning",
    "Catering Services",
    "Cloud Computing Services",
    "Coaching & Mentoring",
    "Commercial Cleaning",
    "Construction Services",
    "Content Writing & Copywriting",
    "Courier & Delivery Services",
    "Customer Support Services",
    "Cybersecurity Services",
    "Data Analytics & Insights",
    "Digital Marketing",
    "Driving Schools",
    "Education & Tutoring",
    "Electrical Services",
    "Event Management",
    "Facility Management",
    "Farming & Agriculture Consulting",
    "Fashion & Tailoring Services",
    "Fitness & Personal Training",
    "Florist & Decoration Services",
    "Food Delivery Services",
    "Freelance Photography",
    "Furniture Assembly",
    "Game Development",
    "Gardening & Landscaping",
    "Graphic Design Services",
    "Grocery Delivery",
    "Hair & Makeup Services",
    "Handyman Services",
    "Health & Wellness Coaching",
    "Home Cleaning Services",
    "Home Inspection Services",
    "Home Remodeling",
    "Home Security Installation",
    "Hospitality & Hotel Services",
    "HR & Recruitment Services",
    "HVAC Repair & Maintenance",
    "Immigration & Visa Assistance",
    "Insurance Services",
    "Interior Decoration",
    "IT Support & Solutions",
    "Janitorial Services",
    "Jewelry Repair Services",
    "Language Translation Services",
    "Laundry & Dry Cleaning",
    "Legal Consultation & Law Services",
    "Locksmith Services",
    "Logistics & Supply Chain",
    "Massage Therapy",
    "Media Production",
    "Mobile Repair Services",
    "Moving & Relocation Services",
    "Music Lessons & Training",
    "Network Installation & Support",
    "Notary Public Services",
    "Online Coaching & Mentoring",
    "Online Store Setup & E-commerce",
    "Painting Services",
    "Party & Event Planning",
    "Pest Control Services",
    "Pet Grooming & Care",
    "Photography & Videography",
    "Plumbing Services",
    "Printing & Publishing Services",
    "Private Investigation Services",
    "Professional Resume Writing",
    "Property Management",
    "Public Relations (PR) Services",
    "Real Estate Consulting",
    "Recruitment & Staffing Solutions",
    "Recycling & Waste Management",
    "Repair & Maintenance Services",
    "SEO & Content Optimization",
    "Social Media Management",
    "Software Development",
    "Solar Panel Installation",
    "Sound System & DJ Services",
    "Spiritual & Counseling Services",
    "Sports Coaching & Training",
    "Tax Preparation Services",
    "Tech Support & Troubleshooting",
    "Tour & Travel Agencies",
    "Translation & Interpretation Services",
    "Transportation & Logistics",
    "Upholstery & Furniture Repair",
    "Virtual Assistant Services",
    "Web Design & Development",
    "Wedding Planning & Coordination",
  ];

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    company: "",
    website: "",
    description: "",
    category: "",
    price: "",
    addedDate: new Date().toISOString().split("T")[0],
    userEmail: user?.email || "",
  });
  useEffect(() => {
    if (user?.email) {
      setFormData((prevData) => ({ ...prevData, userEmail: user.email }));
    }
  }, [user]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch("https://service-compass-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Your Service Added in Database",
            icon: "success",
            draggable: true,
          });
        }
    });
    setFormData({
        image: "",
        title: "",
        company: "",
        website: "",
        description: "",
        category: "",
        price: "",
        addedDate: new Date().toISOString().split("T")[0],
        userEmail: user?.email || "",
      });
    navigate("/");
    
  };

  return (
    <div className="max-w-4xl mx-auto p-6 border shadow-lg rounded-lg my-10">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Add a New Service
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Service Image */}
        <div>
          <label className="block font-medium">Service Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1"
            required
          />
        </div>

        {/* Service Title */}
        <div>
          <label className="block font-medium">Service Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1"
            required
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block font-medium">Company Name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1"
            required
          />
        </div>

        {/* Website */}
        <div>
          <label className="block font-medium">Company Website</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1"
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium">Price ($)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1"
            required
          />
        </div>

        {/* Description */}
        <div className="col-span-1 md:col-span-2">
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Added Date (Auto-filled) */}
        <div>
          <label className="block font-medium">Added Date</label>
          <input
            type="text"
            value={formData.addedDate}
            disabled
            className="w-full border rounded-lg p-2 mt-1 "
          />
        </div>

        {/* User Email (Auto-filled) */}
        <div>
          <label className="block font-medium">Your Email</label>
          <input
            type="email"
            value={formData.userEmail}
            disabled
            className="w-full border rounded-lg p-2 mt-1 "
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
