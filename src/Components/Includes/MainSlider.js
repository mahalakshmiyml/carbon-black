import { Carousel } from "bootstrap";
import React from "react";
import image1 from "../../images/banner.png"

const MainSlider = () => {

    // const slideImages = {
    //     id:1,
    //     imageurl: image1
    // }
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MainSlider;
