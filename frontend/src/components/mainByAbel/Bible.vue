<template>
  <div class="bible">
    <div clss="bible-wrapper">
      <h2>말씀</h2>
      <p>예수, 나를 향한 사랑의 시작</p>
    </div>
    <a href="" class="demo-arrow-cls forward" v-on:click="goBible"> &raquo; </a>
  </div>
</template>

<script>
import router from '../../router'
export default {
  name: 'bible',
  methods: {
    goBible () {
      router.push('/bible')
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
  .bible {
    font-family: 'Nanum Gothic', serif;
    background-color: #fafafa;
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
    border-top: 1.5px solid #c4bd27;
    border-left: 1.5px solid #c4bc2793;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    color: transparent;
  }
  .demo-arrow-cls:hover {
    border-top: 1.5px solid #c4bc2791;
    border-left: 1.5px solid #c4bc272a;
    border-width: 2px;
  }
  /* .demo-arrow-cls:before {
    display: block;
    height: 200%;
    width: 200%;
    margin-left: -50%;
    margin-top: -50%;
    content: '';
    transform: rotate(45deg);
  } */
  .demo-arrow-cls.forward {
    transform: rotate(140deg);
    right: 1.5rem;
  }
}
</style>
