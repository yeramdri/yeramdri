import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Create extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedFileList: [],
      imgPreviewUrlList: [],
      category: '',
      bibleSection: '',
      scripture: '',
      description: '',
      tag: '',
    }
    this.fileInput = null;
  }

  _handleChange = e => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
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
        <select name="category" onChange={this._handleChange}>
          <option value="bible">말씀</option>
          <option value="life">삶</option>
        </select>
        <input
          name="bibleSection"
          onChange={this._handleChange}
          type="text"
          placeholder="말씀 구간을 입력해 주세요" />
        <textarea
          name="scripture"
          onChange={this._handleChange}
          placeholder="말씀을 입력해 주세요" />
        <textarea
          name="description"
          onChange={this._handleChange}
          placeholder="설명 또는 나눔을 입력해 주세요" />
        <input
          name="tag"
          onChange={this._handleChange}
          type="text"
          placeholder="태그를 입력해 주세요(#을 사용해 주세요)" />
        <button onClick={this._handleFileUpload}>Create</button>
      </div>
    );
  }
}

Create.propTypes = {

};

export default Create;