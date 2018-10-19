import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames/bind'
import axios from 'axios'

import { loadAllContents } from 'src/redux/contents/actions'
import { getCurrentContentId } from 'src/utils/contentsUtils'

import css from './index.scss'
const cx = classnames.bind(css)
const moduleName = 'ContentPage'

class ContentPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: null
    }
  }

  componentDidMount() {
    this.getBibleContent(getCurrentContentId(document.URL))
  }

  linkRedirect(contentLink) {
    window.location.href = contentLink
  }

  getBibleContent(id) {
    axios.get(`http://localhost:6508/bible-card/result/${id}`).then(res => {
      const [content] = res.data
      this.setState({ content })
    })
  }

  renderBibleQuestion(bibleQuestions) {
    return bibleQuestions.map(question => {
      return (
        <p
          className={cx(`${moduleName}-post-sharing-question`)}
          key={question.id}
        >
          {question.id}. {question.text}
        </p>
      )
    })
  }

  renderTags(tag) {
    return tag.split(',').map((tag, index) => {
      return (
        <span className={cx(`${moduleName}-post-sharing-tag`)} key={index}>
          #{tag} &nbsp;
        </span>
      )
    })
  }

  render() {
    const { content } = this.state
    let returnComponent
    if (!content) {
      returnComponent = <h1>Loading</h1>
    } else {
      returnComponent = (
        <div className={cx(`${moduleName}`)}>
          <div className={cx(`${moduleName}-contentWrapper`)}>
            {content.multimedia.map(media => {
              if (media.type === 'video') {
                return (
                  <iframe
                    className={cx(`${moduleName}-video`)}
                    title="introduceVideo"
                    src={media.url}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                )
              } else if (media.type === 'image') {
                return <img src={media.url} alt="mediaImg" />
              }
              return <div />
            })}
            {/* <iframe
              className={cx(`${moduleName}-video`)}
              title="introduceVideo"
              src={content.contentVideo}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            /> */}
          </div>
          <div className={cx(`${moduleName}-post`)}>
            <h3 className={cx(`${moduleName}-post-title`)}>{content.title}</h3>
            <p className={cx(`${moduleName}-post-bibleRange`)}>
              {content.bibleTitle1}
              {content.bibleTitle2}절
            </p>
            <p className={cx(`${moduleName}-post-bibleText`)}>
              {content.bibleContent}
            </p>
            <div className={cx(`${moduleName}-post-sharing`)}>
              {this.renderBibleQuestion(content.bibleQuestion)}
              <p className={cx(`${moduleName}-post-sharing-advice`)}>
                {content.bibleAdvice}
              </p>
              {this.renderTags(content.tag)}
              <button
                className={cx(`${moduleName}-post-sharing-button`)}
                onClick={() => {
                  this.linkRedirect(content.link)
                }}
              >
                원문 말씀 보러가기
              </button>
            </div>
          </div>
        </div>
      )
    }
    return returnComponent
  }
}

export default connect(
  ({ contents }) => ({
    currentContentId: contents.currentContentId,
    allContents: contents.allContents
  }),
  {
    loadAllContents
  }
)(ContentPage)
