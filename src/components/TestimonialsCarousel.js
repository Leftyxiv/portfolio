import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function TestimonialsCarousel() {
  return (
    <Carousel
    showArrows={true}
    infiniteLoop={true}
    showThumbs={false}
    showStatus={false}
    autoPlay={true}
    interval={4000}
    >
      <>
        <img src="/images/avatar-1.png" alt="John Doe 1" />
        <div className="myCarousel">
          <h3>John Doe 1</h3>
          <p>lorem ispum dolor sit amet</p>
        </div>
      </>
      <>
        <img src="/images/avatar-2.png" alt="Jane Doe 2" />
        <div className="myCarousel">
          <h3>Jane Doe 2</h3>
          <p>lorem ispum dolor sit amet</p>
        </div>
      </>
      <>
        <img src="/images/avatar-3.png" alt="John Doe 3" />
        <div className="myCarousel">
          <h3>John Doe 3</h3>
          <p>lorem ispum dolor sit amet</p>
        </div>
      </>
      <>
        <img src="/images/avatar-4.png" alt="John Doe 4" />
        <div className="myCarousel">
          <h3>John Doe 4</h3>
          <p>lorem ispum dolor sit amet</p>
        </div>
      </>
    </Carousel>
  );
}

export default TestimonialsCarousel;
