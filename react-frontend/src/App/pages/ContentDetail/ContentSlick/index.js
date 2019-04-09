import React, { Component } from "react";
import Slider from "react-slick";
import classnames from "classnames/bind";
import css from "./index.scss";

const cx = classnames.bind(css);
const moduleName = "ContentSlick";

class ContentSlick extends Component {
  _renderMultiMedia = multiMedia => {
    return multiMedia.map(({ type, url }) => {
      switch (type) {
        case "img":
          return <img src={url} alt="mediaImg" key={url} />;
        case "video":
          return (
            <iframe
              className={cx(`${moduleName}-video`)}
              key={url}
              title="introduceVideo"
              src={url}
              frameBorder="0"
              allowFullScreen
            />
          );
        default:
          return null;
      }
    });
  };

  render() {
    const { multiMedia } = this.props;
    const settings = {
      dots: true,
      dotsClass: "slick-dots",
      speed: 500,
      infinite: false
    };
    return (
      <div className={cx(moduleName)}>
        <Slider {...settings}>{this._renderMultiMedia(multiMedia)}</Slider>
      </div>
    );
  }
}

export default ContentSlick;
