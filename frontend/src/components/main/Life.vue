<template>
  <div class="life" v-on:click="goLife">
    <div class="life-wrapper">
      <h2>삶</h2>
      <p>일상을 살아가기</p>
    </div>
    <a class="demo-arrow-cls forward" v-on:click="goLife"> &raquo; </a>
  </div>
</template>

<script>
import router from '../../router'
export default {
  name: 'Life',
  methods: {
    goLife () {
      router.push('/dailylife')
    }
  }
}
</script>

<style scoped>
@media (max-width: 1024px) {
  h2 {
    font-size: 3vh;
    margin-top: 0px;
    margin-bottom: 1vh;
  }
  p {
    font-size: 2vh;
    margin-top: 0px;
    margin-bottom: 0;
  }
  .life {
    font-family: 'Nanum Gothic', serif;
    color: rgba(216, 200, 100, 1);
    background: linear-gradient(0deg, rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('../../assets/life.jpg');
    opacity: 0.7;
    height: 20vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .demo-arrow-cls {
    float: right;
    position: absolute;
    width: 4vh;
    height: 4vh;
    background: transparent;
    border-top: 0.5vh solid rgba(216, 200, 100, 0.5);
    border-left: 0.5vh solid rgba(216, 200, 100, 1);
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
