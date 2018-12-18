import React, { Component } from 'react'
import classnames from 'classnames/bind'
import axios from 'axios'

import { getCurrentContentId } from 'src/utils/contentsUtils'
import Content from 'src/components/Content'
import ArrowButton from 'src/components/ArrowButton'

import css from './LifeContentPage.scss'

const cx = classnames.bind(css)
const moduleName = 'LifeContentPage'

class LifeContentPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: null,
      contentIndex: 0
    }
  }

  componentDidMount() {
    this.getLifeContent(getCurrentContentId(document.URL))
  }

  getLifeContent(id) {
    axios.get(`http://localhost:6508/life-card/result/${id}`).then(res => {
      const {
        data: [content]
      } = res
      this.setState({ content })
    })
  }

  nextContentItem = () => {
    this.setState({
      contentIndex: this.state.contentIndex + 1
    })
  }

  prevContentItem = () => {
    this.setState({
      contentIndex: this.state.contentIndex - 1
    })
  }

  // TODO: 삶, 말씀 에서 사용중이다. util로 분리 하자. className같은건 어떻게 해야할까..?
  renderTags = tag => {
    return tag.split(',').map((tag, index) => {
      return (
        <span key={index} className={cx(`${moduleName}-tag`)}>
          #{tag} &nbsp;
        </span>
      )
    })
  }

  render() {
    const { content } = this.state
    return content ? (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-leftArrow`)}>
          <ArrowButton
            direction={'left'}
            onClick={this.prevContentItem}
            disabled={this.state.contentIndex === 0}
          />
        </div>
        <div className={cx(`${moduleName}-rightArrow`)}>
          <ArrowButton
            direction={'right'}
            onClick={this.nextContentItem}
            disabled={this.state.contentIndex === content.multiMedia.length - 1}
          />
        </div>
        <div
          className={cx(`${moduleName}-ContentWrapper`)}
          style={{
            transform: `translateX(-${this.state.contentIndex *
              10 *
              (100 / content.multiMedia.length)}%)`
          }}
        >
          {/* ArrowButton css를 이렇게 할 수 밖에 없는가....? 가독성과 사용성을 높일 수는 없을까.. */}
          {content.multiMedia.map((media, id) => (
            <Content media={media} key={id} />
          ))}
        </div>
        <div className={cx(`${moduleName}-postWrapper`)}>
          <h3 className={cx(`${moduleName}-title`)}>{content.title}</h3>
          <p className={cx(`${moduleName}-content`)}>{content.content}</p>
          {this.renderTags(content.tag)}
        </div>
      </div>
    ) : (
      <h1>Loading</h1>
    )
  }
}

export default LifeContentPage
