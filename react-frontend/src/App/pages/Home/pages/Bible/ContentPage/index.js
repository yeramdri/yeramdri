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
      content: null,
      contentIndex: 0
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

  nextContentItem = () => {
    // const newIndex = this.state.property.index+1;
    this.setState({
      contentIndex: this.state.contentIndex + 1
    })
  }

  prevContentItem = () => {
    // const newIndex = this.state.property.index-1;
    this.setState({
      contentIndex: this.state.contentIndex - 1
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
          <button
            onClick={() => this.nextContentItem()}
            // disabled={property.index === data.properties.length-1}
          >
            Next
          </button>
          <button
            onClick={() => this.prevContentItem()}
            // disabled={property.index === 0}
          >
            Prev
          </button>

          <div className={cx(`${moduleName}-contentCardSlider`)}>
            <div
              className={cx(`${moduleName}-contentCardSlider-wrapper`)}
              style={{
                transform: `translateX(-${this.state.contentIndex * 15 *
                  (100 / content.multiMedia.length)}%)`
                //selectedContentIndex
              }}
            >
              {content.multiMedia.map((media, id) => {
                // 아래의 코드들이 카드 컴포넌트가 되어야 한다.
                if (media.type === 'video') {
                  return (
                    <div className={cx(`${moduleName}-contentCard`)} key={id}>
                      <iframe
                        className={cx(`${moduleName}-video`)}
                        title="introduceVideo"
                        src={media.url}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    </div>
                  )
                } else if (media.type === 'image') {
                  return (
                    <div className={cx(`${moduleName}-contentCard`)} key={id}>
                      <img src={media.url} alt="mediaImg" />
                    </div>
                  )
                }
                return <div />
              })}
            </div>
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
