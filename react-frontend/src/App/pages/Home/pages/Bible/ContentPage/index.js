import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames/bind'

import { loadAllContents } from 'src/redux/contents/actions'

import css from './index.scss'
const cx = classnames.bind(css)
const moduleName = 'ContentPage'

class ContentPage extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    this.props.loadAllContents()
  }

  render() {
    console.log(this.props.allContents)
    return (
      <div className={cx(`${moduleName}`)}>
        {/* <p>{this.props.currentContentId}</p> */}
        <div className={cx(`${moduleName}-contentWrapper`)}>
          <iframe
            className={cx(`${moduleName}-video`)}
            title="introduceVideo"
            src="https://www.youtube.com/embed/9xmdxhnIDT8"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
        <div className={cx(`${moduleName}-post`)}>
          <h3 className={cx(`${moduleName}-post-title`)}>
            1등만 기억하는 세상에서
          </h3>
          <p className={cx(`${moduleName}-post-bibleRange`)}>
            마가복음 10장 10절 ~~12
          </p>
          <p className={cx(`${moduleName}-post-bibleText`)}>
            35 세베대의 아들 야고보와 요한이 주께 나아와 여짜오되 선생님이여
            무엇이든지 우리가 구하는 바를 우리에게 하여 주시기를 원하옵나이다 36
            이르시되 너희에게 무엇을 하여 주기를 원하느냐 37 여짜오되 주의
            영광중에서 우리를 하나는 주의 우편에, 하나는 좌편에 앉게 하여
            주옵소서 38 예수께서 이르시되 너희는 너희가 구하는 것을 알지
            못하는도다 내가 마시는 잔을 너희가 마실 수 있으며 내가 받는 세례를
            너희가 받을 수 있느냐 39 그들이 말하되 할 수 있나이다 예수께서
            이르시되 너희는 내가 마시는 잔을 마시며 내가 받는 세례를 받으려니와
            40 내 좌우편에 앉는 것은 내가 줄 것이 아니라 누구를 위하여
            준비되었든지 그들이 얻을 것이니라 41 열 제자가 듣고 야고보와 요한에
            대하여 화를 내거늘 42 예수께서 불러다가 이르시되 이방인의 집권자들이
            그들을 임의로 주관하고 그 고관들이 그들에게 권세를 부리는 줄을
            너희가 알거니와 43 너희 중에는 그렇지 않을지니 너희 중에 누구든지
            크고자 하는 자는 너희를 섬기는 자가 되고 44 너희 중에 누구든지
            으뜸이 되고자 하는 자는 모든 사람의 종이 되어야 하리라 45 인자가 온
            것은 섬김을 받으려 함이 아니라 도리어 섬기려 하고 자기 목숨을 많은
            사람의 대속물로 주려 함이니라
          </p>
          <div className={cx(`${moduleName}-post-sharing`)}>
            <p className={cx(`${moduleName}-post-sharing-question`)}>
              1. 내가 목표로 하는 것들을 이루려 하는지 잠시 돌아보아요. 그리고
              그것이 나를 위한 것인지, 내 이웃을 위한 것인지 생각해 보아요.
            </p>
            <p className={cx(`${moduleName}-post-sharing-question`)}>
              2. 예수님 닮은 ‘섬김의 삶’을 살아내야 할 나의 삶의 현장은 무엇이
              있을까요. 그 곳에서 예수님이라면 어떻게 사셨을까요.
            </p>
            <p className={cx(`${moduleName}-post-sharing-advice`)}>
              힘을 내길 바래요. 예수님이 그 곳에 함께 하실 것이고, 각자의 삶의
              현장에서 말씀대로 살아내려 애쓰는 동역자들이 있으니, 용기를 얻길!
            </p>
            <span className={cx(`${moduleName}-post-sharing-tag`)}>#고지론</span>
            <span className={cx(`${moduleName}-post-sharing-tag`)}>#성공</span>
            <span className={cx(`${moduleName}-post-sharing-tag`)}>#1등</span>
            <span className={cx(`${moduleName}-post-sharing-tag`)}>#노력</span>
            <span className={cx(`${moduleName}-post-sharing-tag`)}>#꿈</span>
            <div className={cx(`${moduleName}-post-sharing-button`)}>원문 말씀 보러가기</div>
          </div>
        </div>
      </div>
    )
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
