import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const ServiceDetails = () => {
  const service = useLoaderData(); 
  
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  // Load existing reviews
  useEffect(() => {
    if (service?._id) {
      fetch(`https://service-compass-server.vercel.app/reviews?serviceId=${service._id}`)
        .then((res) => res.json())
        .then((data) => setReviews(data))
        // .catch((error) => console.error("Error fetching reviews:", error));
    }
  }, [service]);

  // Handle  submission
  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      return Swal.fire("Error!", "You must be logged in to submit a review.", "error");
    }

    const newReview = {
      serviceId: service._id,
      userName: user.displayName,
      userPhoto: user.photoURL || "https://via.placeholder.com/50",
      reviewText,
      rating,
      reviewDate: new Date().toLocaleDateString(),
      email: user.email,
    };

    // console.log("Submitting review:", newReview); 

    try {
      const response = await fetch("https://service-compass-server.vercel.app/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });
      const data = await response.json();

      // console.log("Server Response:", data); 

      if (data.insertedId) {
        Swal.fire("Success!", "Your review has been added.", "success");
        setReviews([...reviews, newReview]);
        setReviewText("");
        setRating(0);
      }
    } catch (error) {
      // console.error("Error submitting review:", error);
      Swal.fire("Error!", "Failed to submit review. Try again later.", "error");
    }
  };

  if (!service) {
    return <p className="text-center text-lg font-semibold">Loading service details...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 my-6 border shadow-lg rounded-lg bg-[#e2f2fd] ">
      {/* Service Image */}
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-96 object-cover rounded-lg shadow-md"
      />

      {/* Service Info */}
      <div className="mt-6">
        <h2 className="text-3xl font-bold text-gray-800">{service.title}</h2>
        <p className="text-gray-700 text-lg mt-2">{service.description}</p>

        <div className="flex justify-between mt-4 text-lg">
          <span className="font-semibold text-blue-600">Category: {service.category}</span>
          <span className="font-semibold text-green-600">Price: ${service.price}</span>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8 ">
        <h3 className="text-2xl font-semibold text-gray-800">Reviews ({reviews.length})</h3>
        <div className="mt-4 space-y-4">
          {reviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet. Be the first to add one!</p>
          ) : (
            reviews.map((review, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-lg text-base-300">
                <div className="flex items-center space-x-4">
                  <img
                    src={review.userPhoto}
                    alt={review.userName}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{review.userName}</h4>
                    <p className="text-sm text-gray-500">{review.reviewDate}</p>
                  </div>
                </div>
                <p className="mt-2">{review.reviewText}</p>
                <Rating
                  initialRating={review.rating}
                  readonly
                  emptySymbol={<span className="text-gray-400 text-2xl">☆</span>}
                  fullSymbol={<span className="text-yellow-700 text-2xl">★</span>}
                />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Add Review Section */}
      <div className="mt-8 border-gray-600 border-2 p-6 rounded-lg shadow-2xl">
        <h3 className="text-2xl font-semibold text-gray-700 ">Add a Review</h3>
        {user ? (
          <form onSubmit={handleReviewSubmit} className="mt-4">
            {/* Review Textarea */}
            <textarea
              className="w-full border rounded-lg p-2"
              placeholder="Write your review..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              required
            ></textarea>

            {/* Rating Input */}
            <div className="mt-4">
              <label className="block text-black font-medium">Rating:</label>
              <Rating
                initialRating={rating}
                emptySymbol={<span className="text-black  text-2xl">☆</span>}
                fullSymbol={<span className="text-yellow-700 text-2xl">★</span>}
                onChange={(value) => {
                  // console.log("Selected rating:", value); 
                  setRating(value);
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition"
            >
              Submit Review
            </button>
          </form>
        ) : (
          <p className="text-black mt-2">You must be logged in to add a review.</p>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
