<template>
  <div class="bible-box">
    <div class="bible" v-on:click="goBible">
      <div class="bible-wrapper">
        <h2>말씀</h2>
        <p>예수, 나를 향한 사랑의 시작</p>
      </div>
      <a class="demo-arrow-cls forward" v-on:click="goBible"> &raquo; </a>
    </div>
  </div>
</template>
<script>
import { store } from '../bible/store.js'
import router from '../../router'
export default {
  name: 'bible',
  methods: {
    goBible () {
      store.state.searchValue = ''
      router.push('/bible')
    }
  }
}
</script>

<style scoped>
/* desktop */
@media (min-width: 1025px) {
  h2 {
    font-size: 7vh;
    margin-top: 0px;
    margin-bottom: 1vh;
  }
  p {
    font-size: 3vh;
    margin-top: 25px;
    margin-bottom: 0;
  }
  a {
    display: none;
  }
  .bible {
    width: 32vw;
    height: 32vw;
    font-family: 'Nanum Gothic', serif;
    background-color: #fafafa;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url('../../assets/bible.jpg');
    background-size: cover;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(214, 230, 240, 0.9);
    cursor: pointer;
  }
  .bible:hover {
    opacity: 0.7;
    color: rgb(190, 208, 210);
  }
}
@media (max-width: 1024px) {
  /* mobile */
  h2 {
    font-size: 2.2vh;
    margin-top: 0px;
    margin-bottom: 1vh;
  }
  p {
    font-size: 1.8vh;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .bible {
    font-family: 'Nanum Gothic', serif;
    background-color: #e4e4e4;
    background-size: cover;
    height: 12.5vh;
    width: 90vw;
    text-align: left;
    display: flex;
    align-items: center;
    color: #98d0d0;
    cursor: pointer;
  }
  .bible-wrapper {
    margin-left:5vw;
  }
  .bible-box {
    height: 14vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f6f6f6;
  }
  .demo-arrow-cls {
    float: right;
    position: absolute;
    margin-left: 10rem;
    width: 1.5vh;
    height: 1.5vh;
    background: transparent;
    border-top: 0.3vh solid #98d0d0;
    border-left: 0.3vh solid #98d0d0;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    color: transparent;
    right: 13vw !important;
  }
  .demo-arrow-cls.forward {
    transform: rotate(140deg);
    right: 5vw;
  }
}
</style>
