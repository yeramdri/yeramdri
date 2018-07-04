<template>
  <div class="all-container">
    <div class="all">
      <h1>Bible</h1>
      <p>말씀과의 조우</p>
      <Input v-on:@click="onClickBible" v-on:@submit="onSearch"/>
      <iframe class="all-video" src="https://www.youtube.com/embed/9xmdxhnIDT8" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <Modal class="bible-modal" v-show="showModal" @close="showModal = false">
      <h2 slot="header">Bible list</h2>
      <div slot="body">
        <p>창세기</p>
        <p>출애굽기</p>
        <p>레위기</p>
        <p>민수기</p>
        <p>신경기</p>
      </div>
    </Modal>
  </div>
</template>

<script>
import Input from '../common/Input.vue'
import Modal from '../common/Modal.vue'
export default {
  name: 'All',
  components: {
    Input,
    Modal
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    onClickBible () {
      this.showModal = true
    },
    onSearch (searchWord) {
      console.log('search 실행됨', searchWord)
      // Todo... 검색 api 호출하기
    }
  }
}
</script>

<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
/* mobile */
@media (max-width: 991px) {
  h1 {
    text-align: center;
    font-size: 4rem;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 0;
  }
  p {
    text-align: center;
    font-size: 5vw;
    color: #c4bc27af;
    margin-top: 0;
    margin-bottom: 10vw;
  }
  .all-container {
    /* background: #27c456; */
    height: 91vh;
  }
  .all {
    margin: 60px auto 0px auto;
    width: 95vw;
    /* background-color: green; */
    padding-top: 3vh;
    padding-bottom: 3vh;
  }
  .all-video {
    background-color: #f6f6f6;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10vh;
    display: block;
    width: 90vw;
    height: 30vh;
    border: none;
    /* width: 420;
    height: 315; */
  }
  .bible-modal p {
    color: black;
  }
}
</style>
