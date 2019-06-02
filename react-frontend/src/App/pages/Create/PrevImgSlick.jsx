import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import classnames from "classnames/bind";
import styles from "./PrevImgSlick.scss";

const cx = classnames.bind(styles);

function PrevImgSlick({ imgSrcList, children }) {
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

  const _renderPlzUpload = () => {
    return (
      <div className={cx("PrevImgSlick-plzUpload")}>
        <h3>이미지를 업로드 해주세요 🏙🌉🎑</h3>
        {children}
      </div>
    );
  };

  return (
    <section className={cx("PrevImgSlick")}>
      {imgSrcList.length === 0 ? (
        _renderPlzUpload()
      ) : (
        <Slider {...settings}>{_renderImgs(imgSrcList)}</Slider>
      )}
    </section>
  );
}

PrevImgSlick.propTypes = {
  imgSrcList: PropTypes.array,
  children: PropTypes.element
};

export default PrevImgSlick;
