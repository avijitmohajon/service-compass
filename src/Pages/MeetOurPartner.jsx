import React from "react";
import Marquee from "react-fast-marquee";

const MeetOurPartner = () => {
  const sponsors = [
    {
      name: "CineFlix",
      logo: "https://i.ibb.co.com/0jXYFsQG/logo1.jpg",
      description: "Unlimited movies & TV shows anytime.",
      website: "https://www.cineflix.com",
    },
    {
      name: "StreamX",
      logo: "https://i.ibb.co.com/jk74n5cs/logo2.jpg",
      description: "Your favorite content, anytime, anywhere.",
      website: "https://www.streamx.com",
    },
    {
      name: "Epic Films",
      logo: "https://i.ibb.co.com/7xy5ytwk/logo3.jpg",
      description: "Bringing cinematic magic to life.",
      website: "https://www.epicfilms.com",
    },
    {
      name: "Starlight Theaters",
      logo: "https://i.ibb.co.com/Kpfg5r81/logo4.jpg",
      description: "Big screens, bigger dreams.",
      website: "https://www.starlighttheaters.com",
    },
    {
      name: "MediaNext",
      logo: "https://i.ibb.co.com/yFW9hpZY/logo5.jpg",
      description: "Innovating digital entertainment.",
      website: "https://www.medianext.com",
    },
  ];

  return (
    <div className="py-10 bg-[#adc5dd]">
      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center text-base-200 mb-8">
        Meet Our Partner
      </h2>

      <Marquee pauseOnHover={true} gradient={false} speed={50}>
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-[#D9EAFD] shadow-lg rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-evenly text-center space-y-3 mx-3 sm:mx-5 w-[220px] sm:w-60 h-[260px] sm:h-60"
          >
            <div className="rounded-full flex items-center justify-center overflow-hidden border border-black w-20 h-20">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="object-cover w-full h-full"
              />
            </div>

            <h3 className="text-base sm:text-lg font-semibold mt-2">
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-600"
              >
                {sponsor.name}
              </a>
            </h3>

            <p className="text-sm sm:text-base text-gray-700 px-2">
              {sponsor.description}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MeetOurPartner;
