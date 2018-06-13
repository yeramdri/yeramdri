<template>
  <div class="App-header">
    <div class="header">
      <router-link to="/" class="headerLogo">
        <img v-bind:src="logo" class="logo" alt="logo" />
      </router-link>
      <button v-on:click='fade=!fade' ref='button' class="hamburger">&#9776;</button>
      <button class="goYeramdriIntroduce" v-on:click="goYeramdriIntroduce">소개</button>
      <button class="goConsulting" v-on:click="goConsulting">상담</button>
      <button class="goYeramdriColumn" v-on:click="goYeramdriColumn">칼럼</button>
      <button class="goYeramdriMedia" v-on:click="goYeramdriMedia">미디어</button>
      <button class="goRetreat" v-on:click="goRetreat">수련회</button>
    </div>
    <div v-bind:class="[fade?'home-clickTri-active':'home-clickTri']">
      <button v-bind:class="[fade?'home-clickYeramdriIntroduce-active':'home-clickYeramdriIntroduce']" v-on:click="goYeramdriIntroduce">소개</button>
      <button v-bind:class="[fade?'home-clickConsulting-active':'home-clickConsulting']" v-on:click="goConsulting">상담</button>
      <button v-bind:class="[fade?'home-clickYeramdriColumn-active':'home-clickYeramdriColumn']" v-on:click="goYeramdriColumn">칼럼</button>
      <button v-bind:class="[fade?'home-clickYeramdriMedia-active':'home-clickYeramdriMedia']" v-on:click="goYeramdriMedia">미디어</button>
      <button v-bind:class="[fade?'home-clickRetreat-active':'home-clickRetreat']" v-on:click="goRetreat">수련회</button>
    </div>
  </div>
</template>
<script>
import router from '../../router'
import logo from '../yeramdri-logo.svg'
export default {
  name: 'Header',
  data () {
    return {
      logo: logo,
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
  width:40px;
  height: 40px;
}
.App-header {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.9);
  color:black;
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
    height: 60px;
    margin: 0 auto;
  }
  .headerLogo {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .goYeramdriIntroduce {
    visibility: visible;
  }
  .goYeramdriIntroduce:hover {
    color: #414141;
  }
  .goYeramdriIntroduce:focus {
    outline: none;
  }
  .goConsulting {
    visibility: visible;
  }
  .goConsulting:hover {
    color: #414141;
  }
  .goConsulting:focus {
    outline: none;
  }
  .goYeramdriColumn {
    visibility: visible;
  }
  .goYeramdriColumn:hover {
    color: #414141;
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
  .home-clickYeramdriIntroduce-active {
    height: 0px;
    visibility: hidden;
  }
  .home-clickYeramdriIntroduce {
    height: 0px;
    visibility: hidden;
  }
  .home-clickConsulting-active {
    height: 0px;
    visibility: hidden;
  }
  .home-clickConsulting {
    height: 0px;
    visibility: hidden;
  }
  .home-clickYeramdriColumn-active {
    height: 0px;
    visibility: hidden;
  }
  .home-clickYeramdriColumn {
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
@media (max-width: 991px) {
  .hamburger {
    visibility: visible;
    position: absolute;
    border: none;
    background-color: transparent;
    top: 17.5px;
    right: 10px;
    font-size: 15px;
    cursor: pointer;
  }
  .hamburger:focus {
    outline: none;
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
    height: 200px;
  }
  .home-clickYeramdriIntroduce-active {
    visibility: visible;
    position: absolute;
    top: 0px;
    left: 0px;
    border-left: none;
    border-right: none;
    background-color: transparent;
    width: 100%;
    height: 40px;
    color: rgb(43,144,216);
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
  }
  .home-clickYeramdriIntroduce-active:hover {
    color: #414141;
  }
  .home-clickYeramdriIntroduce-active:focus {
    outline: none;
  }
  .home-clickYeramdriIntroduce {
    height: 0px;
    visibility: hidden;
    position: absolute;
    top: 0px;
  }
  .home-clickConsulting-active {
    visibility: visible;
    position: absolute;
    top: 40px;
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
  .home-clickConsulting-active:hover {
    color: #414141;
  }
  .home-clickConsulting-active:focus {
    outline: none;
  }
  .home-clickConsulting {
    height: 0px;
    visibility: hidden;
    position: absolute;
    top: 0px;
  }
  .home-clickYeramdriColumn-active {
    visibility: visible;
    position: absolute;
    top: 80px;
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
  .home-clickYeramdriColumn-active:hover {
    color: #414141;
  }
  .home-clickYeramdriColumn-active:focus {
    outline: none;
  }
  .home-clickYeramdriColumn {
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
  top: 17.5px;
  right: 210px;
  text-decoration: none;
  background-color: transparent;
  padding: 2px 10px 1px 10px;
  border: none;
  color: rgb(43,144,216);
  font-size: 15px;
  cursor: pointer;
}
.goConsulting {
  position: absolute;
  top: 17.5px;
  right: 165px;
  text-decoration: none;
  background-color: transparent;
  padding: 2px 10px 1px 10px;
  border: none;
  color: rgb(43,144,216);
  font-size: 15px;
  cursor: pointer;
}
.goYeramdriColumn {
  position: absolute;
  top: 17.5px;
  right: 120px;
  text-decoration: none;
  background-color: transparent;
  padding: 2px 10px 1px 10px;
  border: none;
  color: rgb(43,144,216);
  font-size: 15px;
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
