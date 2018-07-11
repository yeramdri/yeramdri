<template>
  <div class="content-wrapper">
    <Header/>
    <div>
      <h3>1등만 기억하는 세상 속에서</h3>
    </div>
    <div class="content">
      <img src='https://scontent-hkg3-1.xx.fbcdn.net/v/t31.0-8/26678673_884234425080756_8580593128220495703_o.jpg?_nc_cat=0&oh=2bba8acca720cf8802db20083edb6d42&oe=5BD5BD0E'>
    </div>
    <div class="posts">
      <div class="tags">
        <!-- a태그로 해야하나...? -->
        <span>#고지론</span>
        <span>#성공</span>
        <span>#1등</span>
        <span>#노력</span>
        <span>#꿈</span>
      </div>
      <div class="bible">
        <p class="bibleSection">마가복음 10장 35-45</p>
        <p class="bibleText">
        35  세베대의 아들 야고보와 요한이 주께 나아와 여짜오되 선생님이여 무엇이든지 우리가 구하는 바를 우리에게 하여 주시기를 원하옵나이다
        36  이르시되 너희에게 무엇을 하여 주기를 원하느냐
        37  여짜오되 주의 영광중에서 우리를 하나는 주의 우편에, 하나는 좌편에 앉게 하여 주옵소서
        38  예수께서 이르시되 너희는 너희가 구하는 것을 알지 못하는도다 내가 마시는 잔을 너희가 마실 수 있으며 내가 받는 세례를 너희가 받을 수 있느냐
        39  그들이 말하되 할 수 있나이다 예수께서 이르시되 너희는 내가 마시는 잔을 마시며 내가 받는 세례를 받으려니와
        40  내 좌우편에 앉는 것은 내가 줄 것이 아니라 누구를 위하여 준비되었든지 그들이 얻을 것이니라
        41  열 제자가 듣고 야고보와 요한에 대하여 화를 내거늘
        42  예수께서 불러다가 이르시되 이방인의 집권자들이 그들을 임의로 주관하고 그 고관들이 그들에게 권세를 부리는 줄을 너희가 알거니와
        43  너희 중에는 그렇지 않을지니 너희 중에 누구든지 크고자 하는 자는 너희를 섬기는 자가 되고
        44  너희 중에 누구든지 으뜸이 되고자 하는 자는 모든 사람의 종이 되어야 하리라
        45  인자가 온 것은 섬김을 받으려 함이 아니라 도리어 섬기려 하고 자기 목숨을 많은 사람의 대속물로 주려 함이니라
        </p>
      </div>
      <div class="sharing">
        <p>1. 내가 목표로 하는 것들을 이루려 하는지 잠시 돌아보아요. 그리고 그것이 나를 위한 것인지, 내 이웃을 위한 것인지 생각해 보아요</p>
        <p>2. 예수님 닮은 ‘섬김의 삶’을 살아내야 할 나의 삶의 현장은 무엇이 있을까요. 그 곳에서 예수님이라면 어떻게 사셨을까요.</p>
        <p>힘을 내길 바래요. 예수님이 그 곳에 함께 하실 것이고, 각자의 삶의 현장에서 말씀대로 살아내려 애쓰는 동역자들이 있으니, 용기를 얻길!</p>
      </div>
      <div class="others">
        <a class="url" href="https://www.samilchurch.com/index.php?mid=sermonsub&category=663522&document_srl=1590832">원문 설교 보러가기</a>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../../common/Header.vue'

export default {
  name: 'BibleContent',
  components: {
    Header
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
/* mobile */
@media (max-width: 991px) {
  h3 {
    color: #262626;
    margin: 0;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    font-size: 15px;
  }
  .content-wrapper {
    margin-top: 50px;
    /* background: green; */
  }
  .content {
  }

  .content > img {
     width: 100vw;
   }

  .posts {
    /* background: yellow; */
    margin: 10px 10px;
    margin-bottom: 20px;
  }
  .tags {
    color: #003569;
  }
  .bible {
  }
  .bibleSection {
    margin-top: 3px;
    margin-bottom: 3px;
  }
  .bibleText {
    height: 150px;
    overflow: scroll;
    font-size: 14px;
  }
  .sharing {
    font-size: 15px;
  }
  .url {
    width: 200px;
    height: 30px;
    display: block;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 14px;
    font-weight: 500;
    line-height: 30px;
    border: 1.5px solid #dbdbdb;
    border-radius: 5px;
    color: #262626;
    text-align: center;
    text-decoration: none;
  }
  .url:hover {
    background: #f6f6f67c;
    color: #2626267c;
  }
}
</style>
