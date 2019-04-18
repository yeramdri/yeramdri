import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames/bind";
import { loadContent } from "src/redux/contents/actions";
import { linkRedirect } from "src/utils";
import { searchTag } from "src/utils/contentsUtils";
import ContentSlick from "./ContentSlick";
import css from "./index.scss";

const cx = classnames.bind(css);
const moduleName = "ContentDetail";
const MAX_HEIGHT = 115;

class ContentDetail extends Component {
  constructor(props) {
    super(props)
    this.bibleTextEl = null;
    this.state = {
      bibleTextHeight: 0,
      bibleTextVisible: false
    };
  }

  componentDidMount() {
    this._loadContent();
  }

  componentDidUpdate() {
    if (this.bibleTextEl && !this.state.bibleTextHeight) {
      this.setState({ bibleTextHeight: this.bibleTextEl.clientHeight })
    }
  }

  _isShowMoreRender = () => this.state.bibleTextHeight >= MAX_HEIGHT;

  _renderShowMore = () => {
    const { bibleTextVisible } = this.state;
    return (<Fragment>
      {!bibleTextVisible && <div className={cx(`background`)} />}
      <div
        className={cx(`${moduleName}-arrowIcon`)}
        onClick={this.toggleBibleText}
      >
        {!bibleTextVisible && <p>더 보기</p>}
        <i className={`fas fa-chevron-${bibleTextVisible ? "up" : "down"}`} />
      </div>
    </Fragment>)
  }

  _loadContent = () => {
    const {
      loadContent,
      match: { url }
    } = this.props;
    const [, category, id] = url.split("/");
    loadContent(category, id);
  };

  toggleBibleText = () => {
    this.setState({ bibleTextVisible: !this.state.bibleTextVisible });
  };

  renderTags(tag) {
    const {
      history: {
        location: { pathname },
        push
      }
    } = this.props;
    return tag.split(",").map((tag, index) => {
      return (
        <span
          onClick={() => searchTag(tag, pathname, push)}
          className={cx(`${moduleName}-post-sharing-tag`)}
          key={index}
        >
          #{tag}
        </span>
      );
    });
  }

  _renderBibleText = scripture => {
    const { bibleTextVisible } = this.state;
    return (
      <div className={cx(`${moduleName}-post-bibleTextWrapper`)}>
        <p
          className={cx(
            `${moduleName}-post-bibleText`,
            bibleTextVisible ? "visible" : "hidden"
          )}
          ref={el => this.bibleTextEl = el}
        >
          {scripture}
        </p>
        {this._isShowMoreRender() && this._renderShowMore()}
      </div>
    );
  };

  render() {
    const {
      contentState: { pending, fulfilled },
      content: {
        bibleSection,
        description,
        multiMedia,
        originalLink,
        scripture,
        tag,
        title
      }
    } = this.props;
    return (
      <div className={cx(`${moduleName}`)}>
        {pending && <h1>Loading</h1>}
        {fulfilled && (
          <div className={cx(`${moduleName}-wrapper`)}>
            <div className={cx(`${moduleName}-contentWrapper`)}>
              <ContentSlick multiMedia={multiMedia} />
              <h3 className={cx(`${moduleName}-contentWrapper-title`)}>
                {title}
              </h3>
            </div>
            <div className={cx(`${moduleName}-post`)}>
              <p className={cx(`${moduleName}-post-bibleRange`)}>
                {bibleSection}
              </p>
              {scripture && this._renderBibleText(scripture)}
              <div className={cx(`${moduleName}-post-sharing`)}>
                <p className={cx(`${moduleName}-post-sharing-advice`)}>
                  {description}
                </p>
                <div className={cx(`${moduleName}-post-sharing-tagWrapper`)}>
                  {this.renderTags(tag)}
                </div>
                {originalLink && <button
                  className={cx(`${moduleName}-post-sharing-button`)}
                  onClick={() => linkRedirect(originalLink)}
                >
                  원문 말씀 보러가기
                </button>}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

ContentDetail.propTypes = {
  content: PropTypes.object,
  contentState: PropTypes.object,
  loadContent: PropTypes.func
};

const mapStateToProps = ({ contents: { content, contentState } }) => ({
  content,
  contentState
});
const mapDispatchToProps = { loadContent };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentDetail);
