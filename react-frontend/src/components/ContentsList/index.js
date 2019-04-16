import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames/bind';
import ContentCard from 'src/components/ContentCard'
import css from './index.scss';
const cx = classnames.bind(css);
const moduleName = 'ContentsList';
class ContentsList extends PureComponent {
  state = { contentsNumber: this.props.contentsCount };

  _isHideArrow = () => {
    const { contentsNumber } = this.state
    const { contents } = this.props;
    return contents.length <= contentsNumber
  }

  _showMoreContents = () => {
    this.setState({ contentsNumber: this.state.contentsNumber + this.props.contentsCount })
  }

  _renderContentCards = () => {
    const { contentsNumber } = this.state
    const { contents } = this.props
    return contents.slice(0, contentsNumber).map(content => (
      <ContentCard key={content._id} content={content} />
    ))
  };

  render() {
    const { contentsState: { pending, fulfilled, rejected }, title, columnOneLine } = this.props;
    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-${columnOneLine ? 'onelineWrapper' : 'wrapper'}`)}>
          <p className={cx(`${moduleName}-title`)}>{title}</p>
          <div>
            {pending && <div>Loading</div>}
            {rejected && <div>Error</div>}
            {fulfilled && this._renderContentCards()}
            <div className={cx(`${moduleName}-downIcon`, { hide: this._isHideArrow() })}>
              <i
                className="fas fa-chevron-down"
                onClick={this._showMoreContents} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ContentsList.propTypes = {
  contentsState: PropTypes.object,
  contents: PropTypes.array,
  title: PropTypes.string,
  columnOneLine: PropTypes.number
}

ContentsList.defaultProps = {
  contentsCount: 4
}

const mapStateToProps = ({ contents: { contentsState, contents } }) => ({ contentsState, contents });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContentsList);