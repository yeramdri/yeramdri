<template>
  <div class="App-header">
    <div class="header">
      <router-link to="/" class="headerLogo">
        <img v-bind:src="logo" class="logo" alt="logo" />
      </router-link>
      <button v-on:click='fade=!fade' ref='button' class="hamburger">&#9776;</button>
      <button class="goYeramdriIntroduce" v-on:click="goYeramdriIntroduce">Bible</button>
      <button class="goConsulting" v-on:click="goConsulting">Daily</button>
      <button class="goYeramdriColumn" v-on:click="goYeramdriColumn">Duty</button>
      <span class="headerSearch">
        <img v-bind:src="search" class="search" alt="search"/>
      </span>
      <!-- <button class="goYeramdriMedia" v-on:click="goYeramdriMedia">미디어</button>
      <button class="goRetreat" v-on:click="goRetreat">수련회</button> -->
    </div>
    <div v-bind:class="[fade?'home-clickTri-active':'home-clickTri']">
      <button v-bind:class="[fade?'home-clickBible-active':'home-clickBible']" v-on:click="goYeramdriIntroduce">Bible</button>
      <button v-bind:class="[fade?'home-clickDaily-active':'home-clickDaily']" v-on:click="goConsulting">Daily</button>
      <button v-bind:class="[fade?'home-clickDuty-active':'home-clickDuty']" v-on:click="goYeramdriColumn">Duty</button>
      <!-- <button v-bind:class="[fade?'home-clickYeramdriMedia-active':'home-clickYeramdriMedia']" v-on:click="goYeramdriMedia">미디어</button>
      <button v-bind:class="[fade?'home-clickRetreat-active':'home-clickRetreat']" v-on:click="goRetreat">수련회</button> -->
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
    goYeramdriIntroduce () {
      router.push('/introduce')
    },
    goConsulting () {
      router.push('/consulting')
    },
    goYeramdriColumn () {
      router.push('/column')
    },
    goYeramdriMedia () {
      router.push('/media')
    },
    goRetreat () {
      router.push('/retreat')
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
@media (min-width: 992px) {
  .hamburger {
    position: absolute;
    height: 0px;
    width: 0px;
    font-size: 0px;
    visibility: hidden;
  }
  .header {
    max-width: 1280px;
    position: relative;
    height: 50px;
    width: 75%;
    margin: 0 auto;
  }
  .headerLogo {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .headerSearch {
    position: absolute;
    top: 12.5px;
    right: 10px;
  }
  .goYeramdriIntroduce {
    visibility: visible;
  }
  .goYeramdriIntroduce:hover {
    filter: opacity(50%);
  }
  .goYeramdriIntroduce:focus {
    outline: none;
  }
  .goConsulting {
    visibility: visible;
  }
  .goConsulting:hover {
    filter: opacity(50%);
  }
  .goConsulting:focus {
    outline: none;
  }
  .goYeramdriColumn {
    visibility: visible;
  }
  .goYeramdriColumn:hover {
    filter: opacity(50%);
  }
  .goYeramdriColumn:focus {
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
@media (max-width: 991px) {
  .hamburger {
    visibility: visible;
    position: absolute;
    border: none;
    background-color: transparent;
    top: 10px;
    left: 10px;
    font-size: 20px;
    font-weight: 100;
    cursor: pointer;
    color: white;
  }
  .hamburger:focus {
    outline: none;
  }
  .headerLogo {
    position: absolute;
    top: 10px;
    margin-left: 46.25%;
    margin-right: 50%;
  }
  .header {
    position: relative;
    height: 50px;
    width: 100%;
  }
  .headerSearch{
    display: none;
  }
  .goYeramdriIntroduce {
    visibility: hidden;
  }
  .goConsulting {
    visibility: hidden;
  }
  .goYeramdriColumn {
    visibility: hidden;
  }
  .goYeramdriMedia {
    visibility: hidden;
  }
  .goRetreat {
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
    height: 120px;
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
    height: 40px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 15px;
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
    top: 40px;
    left: 0px;
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.473);
    background-color: rgba(0, 0, 0, 0.61);
    width: 100%;
    height: 40px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 15px;
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
    top: 80px;
    left: 0px;
    border-left: none;
    border-right: none;
    border-top: none;
    background-color: rgba(0, 0, 0, 0.61);
    width: 100%;
    height: 40px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 15px;
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
  .home-clickYeramdriMedia-active {
    visibility: visible;
    position: absolute;
    top: 120px;
    left: 0px;
    border-left: none;
    border-right: none;
    border-top: none;
    background-color: transparent;
    width: 100%;
    height: 40px;
    color: rgb(43,144,216);
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
  }
  .home-clickYeramdriMedia-active:hover {
    color: #414141;
  }
  .home-clickYeramdriMedia-active:focus {
    outline: none;
  }
  .home-clickYeramdriMedia {
    height: 0px;
    visibility: hidden;
    position: absolute;
    top: 0px;
  }
  .home-clickRetreat-active {
    visibility: visible;
    position: absolute;
    top: 160px;
    left: 0px;
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: none;
    background-color: rgb(43,144,216);
    width: 100%;
    height: 40px;
    color: white;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
  }
  .home-clickRetreat-active:hover {
    color: #414141;
    background-color: transparent;
    border-bottom: 1px solid #aaa;
  }
  .home-clickRetreat {
    height: 0px;
    visibility: hidden;
    position: absolute;
    top: 0px;
  }
}
.goYeramdriIntroduce {
  position: absolute;
  top: 12.5px;
  left: 23%;
  text-decoration: none;
  background-color: transparent;
  padding: 2px 10px 1px 10px;
  border: none;
  color: #f4f4f4;
  font-size: 15px;
  font-family: 'Nanum Gothic' sans-serif;
  font-weight: 100;
  cursor: pointer;
}
.goConsulting {
  position: absolute;
  top: 12.5px;
  left: 48%;
  text-decoration: none;
  background-color: transparent;
  padding: 2px 10px 1px 10px;
  border: none;
  color: #f4f4f4;
  font-size: 15px;
  font-family: 'Nanum Gothic' sans-serif;
  font-weight: 100;
  cursor: pointer;
}
.goYeramdriColumn {
  position: absolute;
  top: 15px;
  left: 73%;
  text-decoration: none;
  background-color: transparent;
  padding: 2px 10px 1px 10px;
  border: none;
  color: #f4f4f4;
  font-size: 15px;
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
