import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import classnames from 'classnames/bind'

import css from './index.scss'

const cx = classnames.bind(css)
const moduleName = 'ContentCard'

class ContentCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  searchTag = tag => e => {
    const { location, push } = this.props.history
    const [, category] = location.pathname.split('/')
    push(`/${category}/results?search=${tag}`)
    e.preventDefault()
  }

  renderTags = tag => {
    return tag.split(',').map((tag, index) => {
      return <span onClick={this.searchTag(tag)} key={index}>#{tag}</span>
    })
  }

  render() {
    const {
      content: { id, title, thumbnail, tag },
      location
    } = this.props
    const [, category] = location.pathname.split('/')
    return (
      <Link to={`/${category}/${id}`}>
        <div className={cx(`${moduleName}`)}>
          <img
            className={cx(`${moduleName}-img`)}
            src={thumbnail}
            alt="listImage"
          />
          <div className={cx(`${moduleName}-right`)}>
            <p>{title}</p>
            {this.renderTags(tag)}
          </div>
        </div>
      </Link>
    )
  }
}

export default withRouter(ContentCard)
