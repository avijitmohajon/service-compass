import React from "react";

import { useLoaderData } from "react-router-dom";
import HomeCards from "./HomeCards";
import Stats from "./Stats";
import MeetOurPartner from "./MeetOurPartner";
import Header from "../Components/Header";

const HomePage = () => {
  const services = useLoaderData();
  return (
    <div >
      <Header></Header>
      <Stats></Stats>
      <HomeCards services={services}></HomeCards>
      <MeetOurPartner></MeetOurPartner>
      
    </div>
  );
};

export default HomePage;
