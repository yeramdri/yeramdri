import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

function PrevImgSlick({ imgSrcList }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const _renderImgs = imgSrcList => {
    return imgSrcList.map((src, i) => {
      return <img src={src} key={i} />;
    });
  };

  return (
    <div>
      hi
      <Slider {...settings}>{_renderImgs(imgSrcList)}</Slider>
    </div>
  );
}

PrevImgSlick.propTypes = {
  imgSrcList: PropTypes.array
};

export default PrevImgSlick;
