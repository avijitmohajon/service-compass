import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { DNA, Vortex } from "react-loader-spinner";

const Stats = () => {
  const [userCount, setUserCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [serviceCount, setServiceCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        
        const userResponse = await fetch("https://service-compass-server.vercel.app/users/count");
        const reviewResponse = await fetch("https://service-compass-server.vercel.app/reviews/count");
        const serviceResponse = await fetch("https://service-compass-server.vercel.app/service/count");


        if (!userResponse.ok || !reviewResponse.ok || !serviceResponse.ok) {
          throw new Error("One or more fetch requests failed");
        }

        const userData = await userResponse.json();
        const reviewData = await reviewResponse.json();
        const serviceData = await serviceResponse.json();

    
        setUserCount(userData.count);
        setReviewCount(reviewData.count);
        setServiceCount(serviceData.count);
      } catch (error) {
        // console.error("Error fetching counts:", error);
      } finally {
        setLoading(false);
      }
    };

   
    fetchCounts();
  }, []);

  if (loading) {
    return (<div className="flex bg-[#79b7bd] justify-center items-center p-8"> <Vortex
      visible={true}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      /></div>);
  }

  return (
    <div className="flex justify-center space-x-8 p-8 bg-[#5a979c] flex-col md:flex-row gap-5">
      <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Users</h2>
        <CountUp
          end={userCount|| 5}
          duration={2}
          separator=","
          className="text-4xl font-bold text-blue-600"
        />
      </div>
      <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Reviews</h2>
        <CountUp
          end={reviewCount}
          duration={2}
          separator=","
          className="text-4xl font-bold text-green-600"
        />
      </div>
      <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Services</h2>
        <CountUp
          end={serviceCount}
          duration={2}
          separator=","
          className="text-4xl font-bold text-red-600"
        />
      </div>
    </div>
  );
};

export default Stats;
