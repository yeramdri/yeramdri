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
      <button>상담</button>
      <button>칼럼</button>
      <button>미디어</button>
      <button>수련회</button>
    </div>
  </div>
</template>
<script>
// import router from '../../router'
import logo from '../yeramdri-logo.svg'
export default {
  name: 'Header',
  data () {
    return {
      logo: logo
    }
  }
}
</script>
<style scoped>
.logo {
  width:40px;
  height: 40px;
}
</style>
