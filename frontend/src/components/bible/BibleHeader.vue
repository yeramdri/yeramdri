<template>
  <div class="App-header">
    <div class="header">
      <router-link to="/" class="headerLogo">
        <img v-bind:src="logo" class="logo" alt="logo" />
      </router-link>
      <div class="buttons">
        <button class="all" v-bind:class="{active: this.selectedTab === tabs[0]}" v-on:click="onClickAll">전체</button>
        <button class="subject" v-bind:class="{active: this.selectedTab === tabs[1]}" v-on:click="onClickSubject">주제</button>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '../yeramdri-logo.svg'
export default {
  name: 'BibleHeader',
  data () {
    return {
      logo,
      selectedTab: '전체',
      tabs: ['전체', '주제']
    }
  },
  created () {

  },
  methods: {
    onClickAll () {
      // todo ...
      // all 컴포넌트 렌더해주기 url은 바뀌지 않고 ㅇㅇ (데이터 가져와야 하는것들이 너무 많아서 무거워져서 느려지면 어떡하지???)
      this.selectedTab = this.tabs[0]
    },
    onClickSubject () {
      // todo ...
      // subject 컴포넌트 렌더해주기
      this.selectedTab = this.tabs[1]
    }
  }
}
</script>

<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
@media (max-width: 991px) {
  .buttons {
    width: 50vw;
    margin: 0 auto;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .all {
    font-size: 1.3rem;
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
    font-size: 1.3rem;
    color: #f4f4f4ec;
    background-color: rgba(224, 222, 61, 0.9);
    border-radius: 5px;
    height: 7vh;
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
  }
  .logo {
    width: 40px;
    height: 40px;
  }
  .App-header {
    position: fixed;
    top: 0px;
    width: 100%;
    height: 60px;
    /* background-color: rgba(255, 255, 255, 0.9); */
    background-color: rgba(224, 222, 61, 0.9);
    color: black;
    z-index: 100;
  }
  .headerLogo {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .header {
    position: relative;
    height: 60px;
    width: 100%;
  }
}
</style>
