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

  render() {
    const {
      content: { id, title, thumbnail },
      location
    } = this.props
    const [, category] = location.pathname.split('/')
    return (
      <div className={cx(`${moduleName}-contentCard`)}>
        <Link to={`/${category}/${id}`}>
          <img src={thumbnail} alt="listImage" />
          <p>{title}</p>
        </Link>
      </div>
    )
  }
}

export default withRouter(ContentCard)
