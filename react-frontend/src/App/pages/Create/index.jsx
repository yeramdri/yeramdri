import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Create extends Component {
  state = {
    selectedFile: null
  }

  fileSelectedHandler = e => {
    this.setState({ selectedFile: e.target.files[0] })
  }

  fileUploadHandler = () => {
    const { selectedFile, selectedFile: { name } } = this.state;
    const fd = new FormData();
    fd.append('image', selectedFile, name);
    // api요청. axios의 네번째 인자로 콜백을 보내면, img업로드 퍼센트를 얻을 수 있다.
  }

  render() {
    return (
      <div>
        <input
          style={{ display: 'none' }}
          type="file"
          onChange={this.fileSelectedHandler}
          ref={fileInput => this.fileInput = fileInput} />
        <button onClick={() => this.fileInput.click()}>Pick</button>
        <button onClick={this.fileUploadHandler}>Create</button>
      </div>
    );
  }
}

Create.propTypes = {

};

export default Create;