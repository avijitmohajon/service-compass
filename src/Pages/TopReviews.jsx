// import React, { useEffect, useState } from "react";
// import Rating from "react-rating";

// const TopReviews = ({ serviceId }) => {
    
//   const [topReviews, setTopReviews] = useState([]);

//   useEffect(() => {
//     if (serviceId) {
//       fetch(`https://service-compass-server.vercel.app/reviews?serviceId=${serviceId}`)
//         .then((res) => res.json())
//         .then((data) => {
//           const sorted = data.sort((a, b) => b.rating - a.rating); // Highest rating first
//           setTopReviews(sorted.slice(0, 3)); // Top 3 reviews
//         })
//         .catch((error) => console.error("Error fetching top reviews:", error));
//     }
//   }, [serviceId]);

//   return (
//     <div className="my-10 max-w-4xl mx-auto px-4">
//       <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
//         Top Reviews
//       </h2>
//       {topReviews.length === 0 ? (
//         <p className="text-center text-gray-600">No reviews found for this service.</p>
//       ) : (
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {topReviews.map((review, index) => (
//             <div key={index} className="border p-4 rounded-lg shadow-lg bg-white">
//               <div className="flex items-center space-x-3 mb-2">
//                 <img
//                   src={review.userPhoto}
//                   alt={review.userName}
//                   className="w-10 h-10 rounded-full"
//                 />
//                 <div>
//                   <h4 className="font-semibold text-gray-800">{review.userName}</h4>
//                   <p className="text-sm text-gray-500">{review.reviewDate}</p>
//                 </div>
//               </div>
//               <p className="text-gray-700 mb-2">{review.reviewText}</p>
//               <Rating
//                 initialRating={review.rating}
//                 readonly
//                 emptySymbol={<span className="text-gray-300 text-xl">☆</span>}
//                 fullSymbol={<span className="text-yellow-600 text-xl">★</span>}
//               />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TopReviews;
