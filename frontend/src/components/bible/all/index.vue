<template>
  <div class="all-container">
    <div class="all">
      <h1>Bible</h1>
      <!-- <p>Coram Deo: 하나님 마음에서 찾아보기</p> -->
      <!-- <p>Coram Deo: 하나님 다가섬 </p> -->
      <p>다가서기, 흔들리기, 말씀 안에서 </p>
      <Input v-on:@click="onClickBible" v-on:@submit="onSearch"/>
      <iframe class="all-video" src="https://www.youtube.com/embed/9xmdxhnIDT8" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <Modal class="bible-modal" v-show="showModal" @close="showModal = false">
      <h1 slot="header">Bible list</h1>
      <div slot="body">
        <ul>
          <li v-for="bible in bibles" v-bind:key="bible.id" v-on:click="goContentsList(bible)">
            {{ bible.bibleName }}
          </li>
        </ul>
      </div>
    </Modal>
  </div>
</template>

<script>
import router from '../../../router'

import BibleData from '../dommyModels/BibleModel.js'

import Input from '../common/Input.vue'
import Modal from '../common/Modal.vue'

export default {
  name: 'All',
  created: function () {
    this.fetchBible()
  },
  components: {
    Input,
    Modal
  },
  data () {
    return {
      showModal: false,
      bibles: []
    }
  },
  methods: {
    onClickBible () {
      this.showModal = true
    },
    onSearch (searchWord) {
      console.log('search 실행됨', searchWord)
      // Todo... 검색 api 호출하기
      // list 페이지로 넘어가기 (url path: /bible/list/keyword ? 꿈 )
      this.goSearchList(searchWord)
    },
    fetchBible () {
      BibleData.list().then(data => {
        this.bibles = data
      })
    },
    goContentsList (bible) {
      router.push({name: 'BibleList', params: { bibleId: bible.id }})
    },
    goSearchList (searchWord) {
      router.push({name: 'BibleList', params: { bibleId: searchWord }})
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
  .bible-modal ul {
    padding: 0;
  }
  .bible-modal li {
    color: #313131;
    text-align: center;
    list-style: none;
    font-size: 7vw;
    overflow: scroll;
    margin: 2vw;
  }
}
</style>
