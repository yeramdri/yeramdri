<template>
  <div class="content-div">
    <Words></Words>
    <Life></Life>
    <Ministry></Ministry>
  </div>
</template>
<script>
import Words from './Words.vue'
import Life from './Life.vue'
import Ministry from './Ministry.vue'
export default {
  name: 'MainContent',
  components: {
    Words,
    Life,
    Ministry
  }
}
</script>
<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);

@media (min-width: 992px) {
  .bible-div {
    background-color: #ddd;
  }
  .bible-main > h1 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: 'Nanum Gothic', serif;
    font-weight: 700;
    text-align: center;
    color: #414141;
  }
  .bible-title > h3 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: 'Nanum Gothic', serif;
    font-weight: 700;
    text-align: center;
    color: #414141;
  }
}
@media (max-width: 991px) {
  .bible-div {
    padding-top: 4vw;
    padding-bottom: 4vw;
    background-color: #ddd;
  }
  .bible-main {
    margin-bottom: 2vw;
  }
  .bible-main > h1 {
    font-size: 4vw;
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: 'Nanum Gothic', serif;
    font-weight: 700;
    text-align: center;
    color: #414141;
  }
  .bible-title > h3 {
    font-size: 3vw;
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: 'Nanum Gothic', serif;
    font-weight: 700;
    text-align: center;
    color: #414141;
  }
}
</style>
