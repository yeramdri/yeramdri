<template>
  <div class="life-box">
    <div class="life">
      <div class="life-wrapper">
        <h2>삶</h2>
        <p>일상을 살아가기</p>
      </div>
      <a class="demo-arrow-cls forward"> &raquo; </a>
    </div>
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
  .life {
    font-family: 'Nanum Gothic', serif;
    color: rgba(216, 200, 100, 1);
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url('../../assets/life.jpg');
    width: 32vw;
    height: 32vw;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .life:hover {
    opacity: 0.7;
    color: rgb(192, 178, 70);
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
    margin-bottom: 0;
  }
  .life {
    font-family: 'Nanum Gothic', serif;
    color: rgba(216, 200, 100, 1);
    background-color: #e4e4e4;
    height: 12.5vh;
    width: 90vw;
    text-align: left;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .life-wrapper {
    margin-left:5vw;
  }
  .life-box {
    height: 14vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f6f6f6;
  }
  .demo-arrow-cls {
    float: right;
    position: absolute;
    width: 1.5vh;
    height: 1.5vh;
    background: transparent;
    border-top: 0.3vh solid rgba(216, 200, 100, 1);
    border-left: 0.3vh solid rgba(216, 200, 100, 1);
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
