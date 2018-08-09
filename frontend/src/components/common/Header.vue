<template>
  <div class="App-header">
    <div class="header">
      <router-link to="/" class="headerLogo">
        <img v-bind:src="logo" class="logo" alt="logo" />
      </router-link>
      <button v-on:click='fade=!fade' ref='button' class="hamburger">&#9776;</button>
      <button class="goBible" v-on:click="goBible">말씀</button>
      <button class="goDaily">삶</button>
      <button class="goDuty">사역</button>
      <span class="headerSearch">
        <img v-bind:src="search" class="search" alt="search"/>
      </span>
    </div>
    <div v-bind:class="[fade?'home-clickTri-active':'home-clickTri']">
      <button v-bind:class="[fade?'home-clickBible-active':'home-clickBible']" v-on:click="goBible">말씀</button>
      <button v-bind:class="[fade?'home-clickDaily-active':'home-clickDaily']">삶</button>
      <button v-bind:class="[fade?'home-clickDuty-active':'home-clickDuty']">사역</button>
    </div>
  </div>
</template>
<script>
import router from '../../router'
import logo from '../yeramdri-logo.svg'
import search from '../search.svg'
export default {
  name: 'Header',
  data () {
    return {
      logo: logo,
      search: search,
      fade: false
    }
  },
  methods: {
    goBible () {
      router.push('/bible')
    },
    goDaily () {
      router.push('/dailylife')
    },
    goDuty () {
      router.push('/column')
    }
  }
}
</script>
<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
.logo {
  width: 30px;
  height: 30px;
}
.logo:hover {
  filter: opacity(50%);
}
.search {
  width: 25px;
  height: 25px;
}
.search:hover {
  filter: opacity(50%);
  cursor: pointer;
}
.App-header {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  z-index:100;
}
@media (min-width: 1025px) {
  .App-header {
    position: fixed;
    top: 0px;
    width: 100%;
    height: 7vh;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    z-index:100;
  }
  .hamburger {
    position: absolute;
    height: 0px;
    width: 0px;
    font-size: 0px;
    visibility: hidden;
  }
  .logo {
    width: 5vh;
    height: 5vh;
  }
  .search {
    width: 4vh;
    height: 4vh;
  }
  .header {
    max-width: 1280px;
    position: relative;
    height: 7vh;
    width: 75%;
    margin: 0 auto;
  }
  .headerLogo {
    position: absolute;
    top: 1vh;
    left: 10px;
  }
  .headerSearch {
    position: absolute;
    top: 1.5vh;
    right: 10px;
  }
  .goBible {
    visibility: visible;
  }
  .goBible:hover {
    filter: opacity(50%);
  }
  .goBible:focus {
    outline: none;
  }
  .goDaily {
    visibility: visible;
  }
  .goDaily:hover {
    filter: opacity(50%);
  }
  .goDaily:focus {
    outline: none;
  }
  .goDuty {
    visibility: visible;
  }
  .goDuty:hover {
    filter: opacity(50%);
  }
  .goDuty:focus {
    outline: none;
  }
  .goYeramdriMedia {
    visibility: visible;
  }
  .goYeramdriMedia:hover {
    color: #414141;
  }
  .goYeramdriMedia:focus {
    outline: none;
  }
  .goRetreat {
    visibility: visible;
  }
  .goRetreat:hover {
    color: #414141;
  }
  .goRetreat:focus {
    outline: none;
  }
  .home-clickTri {
    height: 0px;
    visibility: hidden;
  }
  .home-clickTri-active {
    height: 0px;
    visibility: hidden;
  }
  .home-clickBible-active {
    height: 0px;
    visibility: hidden;
  }
  .home-clickBible {
    height: 0px;
    visibility: hidden;
  }
  .home-clickDaily-active {
    height: 0px;
    visibility: hidden;
  }
  .home-clickDaily {
    height: 0px;
    visibility: hidden;
  }
  .home-clickDuty-active {
    height: 0px;
    visibility: hidden;
  }
  .home-clickDuty {
    height: 0px;
    visibility: hidden;
  }
  .home-clickYeramdriMedia-active {
    height: 0px;
    visibility: hidden;
  }
  .home-clickYeramdriMedia {
    height: 0px;
    visibility: hidden;
  }
  .home-clickRetreat-active {
    height: 0px;
    visibility: hidden;
  }
  .home-clickRetreat {
    height: 0px;
    visibility: hidden;
  }
}
/* mobile */
@media (max-width: 1024px) {
  .App-header {
    position: relative;
    width: 100%;
    height: 8vh;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    z-index:100;
  }
  .logo {
    width: 5vh;
    height: 5vh;
  }
  .headerLogo {
    text-decoration: none;
    cursor: pointer;
    height: 5vh;
  }
  .hamburger {
    visibility: visible;
    position: absolute;
    border: none;
    background-color: transparent;
    top: 1.5vh;
    left: 1.5vh;
    font-size: 3vh;
    font-weight: 100;
    cursor: pointer;
    color: white;
  }
  .hamburger:focus {
    outline: none;
  }
  .header {
    position: relative;
    height: 8vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .headerSearch{
    display: none;
  }
  .goBible {
    visibility: hidden;
  }
  .goDaily {
    visibility: hidden;
  }
  .goDuty {
    visibility: hidden;
  }
  .home-clickTri {
    height: 0px;
    visibility: hidden;
    position: absolute;
    top: 0px;
  }
  .home-clickTri-active {
    visibility: visible;
    position: relative;
    background-color: rgba(255, 255, 255, 0.9);
    height: 15vh;
  }
  .home-clickBible-active {
    visibility: visible;
    position: absolute;
    top: 0px;
    left: 0px;
    border-left: none;
    border-right: none;
    border-top:  none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.473);
    background-color: rgba(0, 0, 0, 0.61);
    width: 100%;
    height: 5vh;
    color: rgba(255, 255, 255, 0.9);
    font-size: 2vh;
    font-weight: 700;
    cursor: pointer;
  }
  .home-clickBible-active:hover {
    color: #414141;
  }
  .home-clickBible-active:focus {
    outline: none;
  }
  .home-clickBible {
    height: 0px;
    visibility: hidden;
    position: absolute;
    top: 0px;
  }
  .home-clickDaily-active {
    visibility: visible;
    position: absolute;
    top: 5vh;
    left: 0px;
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.473);
    background-color: rgba(0, 0, 0, 0.61);
    width: 100%;
    height: 5vh;
    color: rgba(255, 255, 255, 0.9);
    font-size: 2vh;
    font-weight: 700;
    cursor: pointer;
  }
  .home-clickDaily-active:hover {
    color: #414141;
  }
  .home-clickDaily-active:focus {
    outline: none;
  }
  .home-clickDaily {
    height: 0px;
    visibility: hidden;
    position: absolute;
    top: 0px;
  }
  .home-clickDuty-active {
    visibility: visible;
    position: absolute;
    top: 10vh;
    left: 0px;
    border-left: none;
    border-right: none;
    border-top: none;
    background-color: rgba(0, 0, 0, 0.61);
    width: 100%;
    height: 5vh;
    color: rgba(255, 255, 255, 0.9);
    font-size: 2vh;
    font-weight: 700;
    cursor: pointer;
  }
  .home-clickDuty-active:hover {
    color: #414141;
  }
  .home-clickDuty-active:focus {
    outline: none;
  }
  .home-clickDuty {
    height: 0px;
    visibility: hidden;
    position: absolute;
    top: 0px;
  }
}
.goBible {
  position: absolute;
  top: 2vh;
  left: 23%;
  text-decoration: none;
  background-color: transparent;
  padding: 0.2vh 1vh 0.1vh 1vh;
  border: none;
  color: #f4f4f4;
  font-size: 2vh;
  font-family: 'Nanum Gothic' sans-serif;
  font-weight: 100;
  cursor: pointer;
}
.goDaily {
  position: absolute;
  top: 2vh;
  left: 48%;
  text-decoration: none;
  background-color: transparent;
  padding: 0.2vh 1vh 0.1vh 1vh;
  border: none;
  color: #f4f4f4;
  font-size: 2vh;
  font-family: 'Nanum Gothic' sans-serif;
  font-weight: 100;
  cursor: pointer;
}
.goDuty {
  position: absolute;
  top: 2vh;
  left: 73%;
  text-decoration: none;
  background-color: transparent;
  padding: 0.2vh 1vh 0.1vh 1vh;
  border: none;
  color: #f4f4f4;
  font-size: 2vh;
  font-family: 'Nanum Gothic' sans-serif;
  font-weight: 100;
  cursor: pointer;
}
.goYeramdriMedia {
  position: absolute;
  top: 17.5px;
  right: 65px;
  text-decoration: none;
  background-color: transparent;
  padding: 2px 10px 1px 10px;
  border: none;
  color: rgb(43,144,216);
  font-size: 15px;
  cursor: pointer;
}
.goRetreat {
  position: absolute;
  top: 17.5px;
  right: 10px;
  text-decoration: none;
  background-color: transparent;
  padding: 2px 10px 1px 10px;
  border: none;
  color: rgb(43,144,216);
  font-size: 15px;
  cursor: pointer;
}
</style>
