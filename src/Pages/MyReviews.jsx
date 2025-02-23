import React, { useContext, useEffect, useState } from "react"; 
import Swal from "sweetalert2";
import Rating from "react-rating";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [editingReview, setEditingReview] = useState(null);
  const [updatedText, setUpdatedText] = useState("");
  const [updatedRating, setUpdatedRating] = useState(0);
  const [error, setError] = useState(null);  // Added state to handle errors

  useEffect(() => {
    if (user?.email) {
      fetch(`https://service-compass-server.vercel.app/user-reviews?email=${user.email}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch reviews');
          }
          return res.json();
        })
        .then((data) => {
          if (Array.isArray(data)) {
            setReviews(data);
          } else {
            setError('Invalid response format');
          }
        })
        .catch((error) => {
          // console.error("Error fetching reviews:", error);
          setError(error.message);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://service-compass-server.vercel.app/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setReviews(reviews.filter((review) => review._id !== id));
              Swal.fire("Deleted!", "Your review has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleEdit = (review) => {
    setEditingReview(review);
    setUpdatedText(review.reviewText);
    setUpdatedRating(review.rating);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    fetch(`https://service-compass-server.vercel.app/reviews/${editingReview._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reviewText: updatedText, rating: updatedRating }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Your review has been updated.", "success");
          setReviews(
            reviews.map((r) =>
              r._id === editingReview._id
                ? { ...r, reviewText: updatedText, rating: updatedRating }
                : r
            )
          );
          setEditingReview(null);
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 my-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">My Reviews</h2>
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : reviews.length === 0 ? (
        <p className="text-gray-500 text-center">
          You haven't submitted any reviews yet.
        </p>
      ) : (
        reviews.map((review) => (
          <div
            key={review._id}
            className="border p-4 rounded-lg shadow-md mb-4"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {review.serviceTitle}
            </h3>
            <p className="mt-2 text-gray-600">{review.reviewText}</p>
            <Rating
              initialRating={review.rating}
              readonly
              emptySymbol={<span className="text-gray-400 text-2xl">☆</span>}
              fullSymbol={<span className="text-yellow-600 text-2xl">★</span>}
            />
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={() => handleEdit(review)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(review._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

     
      {editingReview && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-xl font-semibold mb-4 text-black">Edit Review</h3>
            <form onSubmit={handleUpdate}>
              <label className="block mb-2 font-medium text-black">
                Service Title (Read-only)
              </label>
              <input
                type="text"
                value={editingReview.serviceTitle}
                readOnly
                className="w-full p-2 border rounded-lg bg-gray-100"
              />
              <label className="block mt-4 mb-2 font-medium text-black">Review</label>
              <textarea
                className="w-full p-2 border rounded-lg"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
                required
              ></textarea>
              <label className="block mt-4 mb-2 font-medium text-black ">Rating</label>
              <Rating
              
                initialRating={updatedRating}
                emptySymbol={<span className="text-gray-400 text-2xl">☆</span>}
                fullSymbol={<span className="text-yellow-600 text-2xl ">★</span>}
                onChange={(value) => setUpdatedRating(value)}
              />
              <div className="flex justify-end mt-4 space-x-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg"
                >
                  Update
                </button>
                <button
                  onClick={() => setEditingReview(null)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
