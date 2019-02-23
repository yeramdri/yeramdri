import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import classnames from 'classnames/bind'

import css from './index.scss'

const cx = classnames.bind(css)
const moduleName = 'ContentCard'

class ContentCard extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  searchTag = (tag, type) => e => {
    const {push} = this.props.history
    push(`/${type}/results?search=${tag}`)
    e.preventDefault()
  }

  renderTags = (tag, type) => {
    return tag.split(',').map((tag, index) => (
      <span onClick={this.searchTag(tag, type)} key={index}>#{tag}</span>
    ))
  }

  render() {
    const {
      content: {type, typeId, title, thumbnail, tag}
    } = this.props
    return (
      <Link to={`/${type}/${typeId}`}>
        <div className={cx(`${moduleName}`)}>
          <img
            className={cx(`${moduleName}-img`)}
            src={thumbnail}
            alt="listImage"
          />
          <div className={cx(`${moduleName}-right`)}>
            <p>{title}</p>
            {this.renderTags(tag, type)}
          </div>
        </div>
      </Link>
    )
  }
}

export default withRouter(ContentCard)
