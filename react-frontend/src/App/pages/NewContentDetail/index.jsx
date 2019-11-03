import React, { Component } from 'react';
import { tempGetContent } from 'src/api';
import classnames from 'classnames/bind';
import css from './index.scss';
import ContentSlick from "src/App/pages/ContentDetail/ContentSlick";
import { lineBreakText } from "src/utils/string";

const cx = classnames.bind(css);

class NewContentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        multiMedia: [],
        createdAt: ''
      }
    }
  }

  componentDidMount() {
    tempGetContent(this.props.match.params.id).then(({data}) => {
      this.setState({ content: data[0] });
    })
  }

  render() {
    const { content: { title, multiMedia, createdAt, description }} = this.state;
    return (
      <div className={cx(`ContentDetail`)}>
        <div className={cx(`ContentDetail-left`)}>
          <ContentSlick multiMedia={multiMedia} />
        </div>
        <div className={cx(`ContentDetail-right`)}>
          <h1 className={cx(`ContentDetail-right-title`)}>{title}</h1>
          <p className={cx(`ContentDetail-right-createdAt`)}>{createdAt.slice(0,10)}</p>
          <div className={cx(`ContentDetail-right-description`)}>{lineBreakText(description)}</div>
        </div>
      </div>
    )
  }
}

export default NewContentDetail;