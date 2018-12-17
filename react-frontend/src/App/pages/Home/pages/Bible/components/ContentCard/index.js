import React, { Component } from 'react'
import { connect } from 'react-redux'
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

  render() {
    const {
      content: { id, title, image }
    } = this.props
    return (
      <div className={cx(`${moduleName}-contentCard`)}>
        <Link to={`/bible/${id}`}>
          <img src={image} alt="listImage" />
          <p>{title}</p>
        </Link>
      </div>
    )
  }
}

export default connect(
  () => ({}),
  {}
)(ContentCard)