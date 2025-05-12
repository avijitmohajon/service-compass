import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { Vortex } from "react-loader-spinner";
import Loading from "../Components/Loading";

const Stats = () => {
  const [userCount, setUserCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [serviceCount, setServiceCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const userRes = await fetch("https://service-compass-server.vercel.app/users/count");
        const reviewRes = await fetch("https://service-compass-server.vercel.app/reviews/count");
        const serviceRes = await fetch("https://service-compass-server.vercel.app/service/count");

        if (!userRes.ok || !reviewRes.ok || !serviceRes.ok) {
          throw new Error("Failed to fetch stats");
        }

        const userData = await userRes.json();
        const reviewData = await reviewRes.json();
        const serviceData = await serviceRes.json();

        setUserCount(userData.count);
        setReviewCount(reviewData.count);
        setServiceCount(serviceData.count);
      } catch (err) {
        // console.error("Error loading stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px] max-h-screen">
        <Loading/>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 bg-[#D9EAFD]  shadow-xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Platform Statistics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <StatCard label="Users" value={10} color="text-indigo-600" />
        <StatCard label="Reviews" value={reviewCount} color="text-[#2DAA9E]" />
        <StatCard label="Services" value={serviceCount} color="text-[#DF6D14]" />
      </div>
    </div>
  );
};

const StatCard = ({ label, value, color }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
    <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">{label}</h3>
    <CountUp
      end={value || 0}
      duration={2}
      separator=","
      className={`text-4xl md:text-5xl font-extrabold ${color}`}
    />
  </div>
);

export default Stats;
