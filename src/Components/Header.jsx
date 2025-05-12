import React from "react";
import Lottie from "lottie-react";
import callCenter from "../assets/Animation - 1746940011893.json";
import electrical from "../assets/electrical-electrician-working.json";
import plumber from "../assets/plumber-bath-sink-water-repair.json";
import repairing from "../assets/man-repairing-motherboard.json";
import shopping from "../assets/fast-shopping-delivery.json";
import onlineDelivery from "../assets/online-delivery-service.json";
import packing from "../assets/worker-packing-the-goods.json";

const Header = () => {
  return (
    <div className="carousel max-h-[60vh] overflow-hidden bg-[#D9EAFD]">
     {/* slide 1 */}
      <div
        id="slide1"
        className="carousel-item relative w-full items-center justify-center flex-col"
      >
       
         <Lottie className="max-h-[50vh]"  animationData={callCenter} loop={true} />
       
       

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle bg-[#D8EAFC] text-base-300">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-[#D8EAFC] text-base-300">
            ❯
          </a>
        </div>
      </div>


      {/* slide 2 */}
      <div id="slide2" className="carousel-item relative w-full items-center justify-center ">
        
        <Lottie className="max-h-[75vh] md:py-10 " animationData={electrical} loop={true} />
        <Lottie className="max-h-[75vh] md:py-10 " animationData={plumber} loop={true} />
        <Lottie className="max-h-[75vh] md:py-10 " animationData={repairing} loop={true} />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle bg-[#D8EAFC] text-base-300">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-[#D8EAFC] text-base-300 ">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full items-center justify-center">
        <Lottie className="max-h-[70vh] " animationData={shopping} loop={true} />
        <Lottie className="max-h-[70vh] " animationData={packing} loop={true} />
        <Lottie className="max-h-[70vh] " animationData={onlineDelivery} loop={true} />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle bg-[#D8EAFC] text-base-300">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-[#D8EAFC] text-base-300">
            ❯
          </a>
        </div>
      </div>

    </div>
  );
};

export default Header;
