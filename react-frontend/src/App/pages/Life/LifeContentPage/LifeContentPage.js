import React, {Component} from 'react'
import {connect} from 'react-redux';
import classnames from 'classnames/bind'
import {loadContent} from 'src/redux/contents/actions'
import {linkRedirect} from 'src/utils'
import Content from 'src/components/Content'
import ArrowButton from 'src/components/ArrowButton'
import css from './LifeContentPage.scss'

const cx = classnames.bind(css)
const moduleName = 'LifeContentPage'

class LifeContentPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      content: null,
      contentIndex: 0
    }
  }

  componentDidMount() {

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

  // TODO: 삶, 말씀, ContentCard 에서 사용중이다. 컴포넌트로 분리 하자. className같은건 어떻게 해야할까..?, 어떤 폴더에 어떤 파일명으로 해야할 지도 모르겠다...
  renderTags = tag => {
    return tag.split(',').map((tag, index) => {
      return (
        <span key={index} className={cx(`${moduleName}-tag`)}>
          #{tag} &nbsp;
        </span>
      )
    })
  }

  _renderBibleText = scripture => {
    const {bibleTextVisible} = this.state
    return (
      <div className={cx(`${moduleName}-post-bibleTextWrapper`)}>
        <p
          className={cx(`${moduleName}-post-bibleText`,
            bibleTextVisible ? 'visible' : 'hidden')}
        >
          {scripture}
        </p>
        {!bibleTextVisible && <div className={cx(`background`)} />}
        <div
          className={cx(`${moduleName}-arrowIcon`)}
          onClick={this.toggleBibleText}
        >
          {!bibleTextVisible && <p>더 보기</p>}
          <i
            className={`fas fa-chevron-${bibleTextVisible ? 'up' : 'down'}`}
          />
        </div>
      </div>
    )
  }

  render() {
    const {
      contentState: {pending, fulfilled},
      content: {
        bibleSection, description, multiMedia,
        originalLink, scripture, tag, title
      }
    } = this.props;
    return (
      <div className={cx(`${moduleName}`)} >
        {pending && <h1>loading</h1>}
        {fulfilled &&
          <div>
            <div className={cx(`${moduleName}-main`)}>
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
                  disabled={this.state.contentIndex === multiMedia.length - 1}
                />
              </div>
              <div
                className={cx(`${moduleName}-ContentWrapper`)}
                style={{
                  transform: `translateX(-${this.state.contentIndex *
                    10 *
                    (100 / multiMedia.length)}%)`
                }}
              >
                {/* ArrowButton css를 이렇게 할 수 밖에 없는가....? 가독성과 사용성을 높일 수는 없을까.. */}
                {multiMedia.map((media, id) => (
                  <Content media={media} key={id} />
                ))}
              </div>
              <h3 className={cx(`${moduleName}-title`)}>{title}</h3>
            </div>
            <div className={cx(`${moduleName}-postWrapper`)}>
              <p className={cx(`${moduleName}-bibleRange`)}>{bibleSection}</p>
              {this._renderBibleText(scripture)}
              <p className={cx(`${moduleName}-description`)}>{description}</p>
              <div className={cx(`${moduleName}-tagWrapepr`)}>
                {this.renderTags(tag)}
              </div>
              <button
                className={cx(`${moduleName}-post-sharing-button`)}
                onClick={() => linkRedirect(originalLink)}>
                원문 말씀 보러가기
              </button>
            </div>
          </div>
        }
      </div >
    )
  }
}

const mapStateToProps = ({
  contents: {contentState, content}
}) => ({contentState, content});
const mapDispatchToProps = {loadContent};

export default connect(mapStateToProps, mapDispatchToProps)(LifeContentPage);
