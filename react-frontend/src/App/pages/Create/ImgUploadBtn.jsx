import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import styles from "./ImgUploadBtn.scss";

const cx = classnames.bind(styles);

function ImgUploadBtn({ onClick, onFileSelect, fileRef, name = "Pick Img!!" }) {
  return (
    <div className={cx("ImgUploadBtn")}>
      <input
        style={{ display: "none" }}
        type="file"
        multiple
        onChange={onFileSelect}
        ref={fileRef}
      />
      <button onClick={onClick}>{name}</button>
    </div>
  );
}

ImgUploadBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  fileRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  onFileSelect: PropTypes.func.isRequired,
  name: PropTypes.string
};

export default ImgUploadBtn;
