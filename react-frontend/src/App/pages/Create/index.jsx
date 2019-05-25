import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Create extends Component {
  state = {
    selectedFile: null,
    imgPreviewUrl: null
  }

  _handleFileSelect = e => {
    e.preventDefault();
    let file = e.target.files[0]
    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({ selectedFile: file, imgPreviewUrl: reader.result });
    }

    reader.readAsDataURL(file)
  }

  _handleFileUpload = () => {
    const { selectedFile, selectedFile: { name } } = this.state;
    const fd = new FormData();
    fd.append('image', selectedFile, name);
    // api요청. axios의 네번째 인자로 콜백을 보내면, img업로드 퍼센트를 얻을 수 있다.
  }

  _renderPrevImg = imgSrc => {
    return <img src={imgSrc}></img>
  }

  render() {
    const { imgPreviewUrl } = this.state;
    return (
      <div>
        {imgPreviewUrl && this._renderPrevImg(imgPreviewUrl)}
        <input
          style={{ display: 'none' }}
          type="file"
          multiple="multiple"
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