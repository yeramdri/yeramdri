import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Create extends Component {
  state = {
    selectedFileList: [],
    imgPreviewUrlList: []
  }

  _handleFileSelect = e => {
    e.preventDefault();
    const fileList = Array.from(e.target.files);

    fileList.forEach(file => {
      let reader = new FileReader();
      reader.onloadend = () => {
        const { selectedFileList, imgPreviewUrlList } = this.state;
        this.setState(() => ({
          selectedFileList: selectedFileList.concat(file),
          imgPreviewUrlList: imgPreviewUrlList.concat(reader.result)
        }));
      }
      reader.readAsDataURL(file)
    });
  }

  _handleFileUpload = () => {
    const { selectedFile, selectedFile: { name } } = this.state;
    const fd = new FormData();
    fd.append('image', selectedFile, name);
    // api요청. axios의 네번째 인자로 콜백을 보내면, img업로드 퍼센트를 얻을 수 있다.
  }

  _renderPrevImg = imgSrcList => {
    return imgSrcList.map((imgSrc, i) =>
      <img src={imgSrc} key={i}></img>
    )
  }

  render() {
    const { imgPreviewUrlList } = this.state;
    return (
      <div>
        {imgPreviewUrlList.length !== 0
          && this._renderPrevImg(imgPreviewUrlList)}
        <input
          style={{ display: 'none' }}
          type="file"
          multiple
          onChange={this._handleFileSelect}
          ref={fileInput => this.fileInput = fileInput} />
        <button onClick={() => this.fileInput.click()}>Pick</button>
        <button onClick={this._handleFileUpload}>Create</button>
      </div>
    );
  }
}

Create.propTypes = {

};

export default Create;