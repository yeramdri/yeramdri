import React, { Component } from "react";
import Slider from "react-slick";

class Slick extends Component {
  _renderMultiMedia = multiMedia => {
    return multiMedia.map(({ type, url }) => {
      switch (type) {
        case "img":
          return (
            <div>
              <img src={url} alt="mediaImg" />
            </div>
          );
        case "video":
          return (
            <div>
              <iframe
                title="introduceVideo"
                src={url}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          );
      }
    });
  };

  render() {
    const { multiMedia } = this.props;
    console.log("asdfas", multiMedia);
    var settings = {
      dots: true
    };

    return (
      <div>
        <Slider {...settings}>{this._renderMultiMedia(multiMedia)}</Slider>
      </div>
    );
  }
}

export default Slick;
