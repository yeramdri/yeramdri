import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadAllContents } from 'src/redux/contents/actions'

class ContentPage extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    this.props.loadAllContents()
  }

  render() {
    return (
      <div>
        요거는 컨텐츠 카드야
        <p>{this.props.currentContentId}</p>
      </div>
    )
  }
}

export default connect(
  ({ contents }) => ({ currentContentId: contents.currentContentId }),
  {
    loadAllContents
  }
)(ContentPage)
