import React from 'react';
import { TECarousel, TECarouselItem } from "tw-elements-react";
import "../compenents/section4.css";
import pic1 from "../assets/aitbenheddou.jpg"
import pic2 from "../assets/dessert.jpg"
import pic3 from "../assets/marrakesh.jpg"
import test from "../assets/test.jpg"
import pic5 from "../assets/studio.jpg"

function Section4() {
  return (
    <div className='section4' style={{ height: '100vh', width: '100vh' }}>
        <TECarousel className='section4_' showControls showIndicators ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={pic5}
              className="block w-full object-fit"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">AIT BEN HEDDOU</h5>
              <p>
              Ancient desert fortress, UNESCO heritage in Morocco.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={pic2}
              className="block w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={pic3}
              className="block w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={4}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={test}
              className="block w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">AIT BEN HEDDOU</h5>
              <p>
              Ancient desert fortress, UNESCO heritage in Morocco.
              </p>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>

    </div>
  );
}

export default Section4;
