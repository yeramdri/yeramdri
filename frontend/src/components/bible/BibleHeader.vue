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
        <i class="fas fa-book fa-2x bible-icon"></i>
    </div>
  </div>
</template>

<script>
import logo from '../yeramdri-logo.svg'
export default {
  name: 'BibleHeader',
  props: ['selectedTab', 'tabs', 'onClickAll', 'onClickSubject'],
  data () {
    return {
      logo
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
  .bible-icon {
    position: absolute;
    display: inline-block;
    top: 13px;
    right: 13px;
  }
}
</style>
