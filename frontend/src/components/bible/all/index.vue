<template>
  <div class="all-container">
    <div class="all">
      <h1>Bible</h1>
      <p>말씀과의 조우</p>
      <Input/>
      <iframe class="all-video" src="https://www.youtube.com/embed/9xmdxhnIDT8" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
import Input from '../common/Input.vue'
export default {
  name: 'All',
  components: {
    Input
  }
}
</script>

<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
/* mobile */
@media (max-width: 991px) {
  h1 {
    text-align: center;
    font-size: 4rem;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 0;
  }
  p {
    text-align: center;
    font-size: 5vw;
    color: #c4bc27af;
    margin-top: 0;
    margin-bottom: 10vw;
  }
  .all-container {
    /* background: #27c456; */
    height: 91vh;
  }
  .all {
    margin: 60px auto 0px auto;
    width: 95vw;
    /* background-color: green; */
    padding-top: 3vh;
    padding-bottom: 3vh;
  }
  .all-video {
    background-color: #f6f6f6;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10vh;
    display: block;
    width: 90vw;
    height: 30vh;
    border: none;
    /* width: 420;
    height: 315; */
  }
}
</style>
