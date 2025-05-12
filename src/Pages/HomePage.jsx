import React from "react";

import { useLoaderData } from "react-router-dom";
import HomeCards from "./HomeCards";
import Stats from "./Stats";
import MeetOurPartner from "./MeetOurPartner";
import Header from "../Components/Header";
import FAQ from "./FAQ";
// import TopReviews from "./TopReviews";

const HomePage = () => {
  const services = useLoaderData();
  
  return (
    <div>
      <Header></Header>
      <HomeCards services={services}></HomeCards>
      <Stats></Stats>
      {/* <TopReviews serviceId={services[0]?._id}/> */}
      <MeetOurPartner></MeetOurPartner>
      <FAQ></FAQ>
      
    </div>
  );
};

export default HomePage;
