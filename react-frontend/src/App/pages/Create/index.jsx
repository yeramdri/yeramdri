import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createContent } from "src/redux/contents/actions";

import PrevImgSlick from "./PrevImgSlick";
import ImgUploadBtn from "./ImgUploadBtn";
import CreateTextFields from "./CreateTextFields";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFileList: [],
      imgPreviewUrlList: [],
      type: "bible",
      title: "",
      bibleSection: "",
      scripture: "",
      description: "",
      tag: "",
      originalLink: ""
    };
    this.fileInput = createRef();
  }

  _handleChangeInput = e => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  };

  _handleFileSelect = e => {
    e.preventDefault();
    const fileList = Array.from(e.target.files);

    const pFileList = fileList.map(file => {
      // reject 처리 어떻게 해야하는지 찾아보기..!
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onloadend = () => {
          resolve({ file, readerResult: reader.result });
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(pFileList).then(res => {
      const selectedFileList = res.map(v => v.file);
      const imgPreviewUrlList = res.map(v => v.readerResult);
      this.setState({ selectedFileList, imgPreviewUrlList });
    });
  };

  _handleFileUpload = e => {
    e.preventDefault();
    const {
      selectedFileList,
      type,
      title,
      bibleSection,
      scripture,
      description,
      tag,
      originalLink
    } = this.state;

    const fd = new FormData();
    selectedFileList.forEach(file => {
      fd.append("image", file, file.name);
    });
    fd.append("type", type);
    fd.append("title", title);
    fd.append("bibleSection", bibleSection);
    fd.append("scripture", scripture);
    fd.append("description", description);
    fd.append("tag", tag);
    fd.append("originalLink", originalLink);
    // api요청. axios의 네번째 인자로 콜백을 보내면, img업로드 퍼센트를 얻을 수 있다.
    this.props.createContent(fd);
  };

  _handleClickFileUpload = () => {
    this.fileInput.current.click();
  };

  render() {
    const { imgPreviewUrlList } = this.state;
    return (
      <section>
        <PrevImgSlick imgSrcList={imgPreviewUrlList}>
          <ImgUploadBtn
            onFileSelect={this._handleFileSelect}
            onClick={this._handleClickFileUpload}
            fileRef={this.fileInput}
            name={"Pick Img!!"}
          />
        </PrevImgSlick>
        <CreateTextFields onChange={this._handleChangeInput} />
        <button onClick={this._handleFileUpload}>Create</button>
      </section>
    );
  }
}

Create.propTypes = {};

const mapStateToProps = () => ({});
const mapDispatchToProps = { createContent };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
