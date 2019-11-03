import React, { Component } from "react";
import { Link } from 'react-router-dom'
import classnames from 'classnames/bind';
import css from './index.scss';
import { getAllContents } from 'src/api';

const cx = classnames.bind(css);
const moduleName = 'NewContents';

class NewContents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contents: []
    }
  }

  componentDidMount() {
    getAllContents().then(({ data }) => {
      console.log(data)
      this.setState({contents: data});
    })
  }

  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        {this.state.contents.map((content) => (
            <div className={cx(`ContentCard`)} key={content.id}>
              <Link to={`/temp/contents/${content.id}`}>
                <div className={cx(`ContentCard-img`)} style={{backgroundImage: `url(${content.thumbnail})`}} />
                <div className={cx(`ContentCard-text`)}>
                  <p className={cx(`ContentCard-text-title`)}>{content.title}</p>
                  <p className={cx(`ContentCard-text-date`)}>{content.createdAt.slice(0,10)}</p>
                </div>
              </Link>
            </div>
        ))}
      </div>
    )
  }
}

export default NewContents;