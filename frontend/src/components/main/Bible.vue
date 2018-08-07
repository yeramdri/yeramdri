<template>
  <div class="bible" v-on:click="goBible">
    <div class="bible-wrapper">
      <h2>말씀</h2>
      <p>예수, 나를 향한 사랑의 시작</p>
    </div>
    <a class="demo-arrow-cls forward" v-on:click="goBible"> &raquo; </a>
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
@media (min-width: 1025px) {

}
@media (max-width: 1024px) {
  h2 {
    font-size: 3vh;
    margin-top: 0px;
    margin-bottom: 1vh;
  }
  p {
    font-size: 2vh;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .bible {
    font-family: 'Nanum Gothic', serif;
    background-color: #fafafa;
    background: linear-gradient(0deg, rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('../../assets/bible.jpg');
    background-size: cover;
    height: 20vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(214, 230, 240, 0.9);
  }
  .demo-arrow-cls {
    float: right;
    /* display: inline-block; */
    position: absolute;
    margin-left: 10rem;
    width: 4vh;
    height: 4vh;
    background: transparent;
    border-top: 0.5vh solid rgba(214, 230, 240, 0.4);
    border-left: 0.5vh solid rgba(214, 230, 240, 0.9);
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    color: transparent;
  }
  .demo-arrow-cls.forward {
    transform: rotate(140deg);
    right: 5vw;
  }
}
</style>
