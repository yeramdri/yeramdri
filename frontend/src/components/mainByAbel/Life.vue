<template>
  <div class="life">
    <div class="life-wrapper">
      <h2>Daily Life</h2>
      <p>일상을 살아가기</p>
    </div>
    <a href="#" class="demo-arrow-cls forward" v-on:click="goLife"> &raquo; </a>
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
@media (max-width: 991px) {
  h2 {
    /* padding-top: 5vh; */
    margin-top: 0px;
    margin-bottom: 1vh;
  }
  p {
    margin-top: 1vh;
    margin-bottom: 0;
  }
  .life {
    font-family: 'Nanum Gothic', serif;
    color: rgba(121, 154, 198, 0.94);
    background: url('../../assets/life.jpg');
    opacity: 0.7;
    height: 20vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .demo-arrow-cls {
    float: right;
    /* display: inline-block; */
    position: absolute;
    margin-left: 10rem;
    width: 30px;
    height: 30px;
    background: transparent;
    border-top: 1.5px solid #0c0f18;
    border-left: 1.5px solid rgba(121, 154, 198, 0.94);
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    color: transparent;
  }
  .demo-arrow-cls:hover {
    border-top: 1.5px solid rgba(208, 206, 206, 0.276);
    border-left: 1.5px solid #f4f4f468;
    border-width: 2px;
  }
  .demo-arrow-cls.forward {
    transform: rotate(140deg);
    right: 1.5rem;
  }
}
</style>
