import React, {Component} from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import classnames from 'classnames/bind'
import {searchKeyword} from 'src/redux/search/actions'

import css from './index.scss'

const cx = classnames.bind(css)
const moduleName = 'ContentCard'
const TYPE_COLOR = {
  bible: '#fc747b',
  life: '#349dee',
  ministry: '#be4bdb'
}
class ContentCard extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  handleClick = (tag, type) => e => {
    // this.props.searchKeyword(tag, type)
    this.searchTag(tag,type)
    e.preventDefault()
  }
  
  searchTag = (tag, type) => {
    const {push} = this.props.history
    push(`/${type}/results?search=${tag}`)
  }

  renderTags = (tag, type) => {
    return tag.split(',').map((tag, index) => (
      <span
        onClick={this.handleClick(tag, type)}
        style={{color: TYPE_COLOR[type]}}
        key={index}
      >
        #{tag}
      </span>
    ))
  }

  render() {
    const {
      content: {type, typeId, title, thumbnail, tag}
    } = this.props
    return (
      <Link to={`/${type}/${typeId}`}>
        <div className={cx(`${moduleName}`, `${moduleName}-${type}`)}>
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

export default connect(()=>({}),{
  searchKeyword
})(withRouter(ContentCard))
