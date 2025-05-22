import React, { Suspense } from "react";
import { useLoaderData } from "react-router-dom";
import Loading from "../Components/Loading";

// Lazy load components to improve performance
const Header = React.lazy(() => import("../Components/Header"));
const HomeCards = React.lazy(() => import("./HomeCards"));
const Stats = React.lazy(() => import("./Stats"));
const MeetOurPartner = React.lazy(() => import("./MeetOurPartner"));
const FAQ = React.lazy(() => import("./FAQ"));
const WhatWeOffer = React.lazy(() => import("./WhatWeOffer"));
const ClientTestimonials = React.lazy(() => import("./ClientTestimonials"));

const HomePage = () => {
  const services = useLoaderData();

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Header />
        <HomeCards services={services} />
        <Stats />
        <MeetOurPartner />
        <ClientTestimonials />
        <WhatWeOffer />
        <FAQ />
      </Suspense>
    </div>
  );
};

export default HomePage;
