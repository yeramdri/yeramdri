<template>
  <div class="App-header">
    <div class="header">
      <div>hambuger</div>
      <router-link to="/" class="headerLogo">
        <img v-bind:src="logo" class="logo" alt="logo" />
      </router-link>
      <div class="buttons">
        <button class="all" v-bind:class="{active: this.selectedTab === tabs[0]}" v-on:click="onClickAll">전체</button>
        <button class="subject" v-bind:class="{active: this.selectedTab === tabs[1]}" v-on:click="onClickSubject">주제</button>
      </div>
        <i class="fas fa-book fa-2x bible-icon" v-show="this.selectedTab === tabs[0]" v-on:click="toggleModal"></i>
    </div>
    <Modal v-if="showModal">
      <div slot="header" class="modal-header">
        <span>성경</span>
        <span>장</span>
      </div>
      <div slot="body">
        <ul>
          <li v-for="bible in bibles" v-bind:key="bible">
            <div>{{bible}}</div>
          </li>
        </ul>
      </div>
      <button slot="footer" v-on:click="toggleModal" >close</button>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'
import logo from '../yeramdri-logo.svg'
export default {
  name: 'BibleHeader',
  props: ['selectedTab', 'tabs', 'onClickAll', 'onClickSubject'],
  data () {
    return {
      logo,
      showModal: false,
      bibles: ['창세기', '출애굽기', '레위기', '민수기', '신명기', '여호수아', '사사기', '룻기', '사무엘상', '사무엘하']
    }
  },
  methods: {
    toggleModal () {
      this.showModal = !this.showModal
    }
  },
  components: {
    Modal
  }
}
</script>

<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
@media (max-width: 991px) {
  .buttons {
    width: 50vw;
    /* margin: 0 auto; */
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .all {
    font-size: 15px;
    margin-right: 1rem;
    color: #f4f4f4ec;
    background-color: rgba(224, 222, 61, 0.9);
    border-radius: 5px;
    height: 7vh;
    width: 20vw;
    border: none;
  }
  .all:focus {
    outline: none;
  }
  .subject {
    font-size: 15px;
    color: #f4f4f4ec;
    background-color: rgba(224, 222, 61, 0.9);
    border-radius: 5px;
    height: 20px;
    width: 20vw;
    border: none;
  }
  .subject:focus {
    outline: none;
  }
  .active {
    /* color: rgb(185, 183, 31); */
    color: #f4f4f4;
    background: rgb(238, 236, 153);
    border-bottom: solid 1px white;
  }
  .logo {
    width: 30px;
    height: 30px;
  }
  .App-header {
    position: fixed;
    top: 0px;
    width: 100%;
    height: 50px;
    /* background-color: rgba(255, 255, 255, 0.9); */
    background-color:#414141;
    color: black;
    z-index: 100;
  }
  .headerLogo {
    position: absolute;
    /* position: float; */
    top: 10px;
    left: 50%;
  }
  .header {
    position: relative;
    height: 50px;
    width: 100%;
  }
  .bible-icon {
    position: absolute;
    display: inline-block;
    top: 12px;
    right: 12px;
    color: white;
    font-size: 22px;
  }
  .bibleActive {
    display: hidden;
  }
  .modal-header {
    background-color: rgba(224, 222, 61, 0.9);
  }
}
</style>
