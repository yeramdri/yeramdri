<template>
  <div class="content-div">
    <Bible></Bible>
    <Life></Life>
    <Ministry></Ministry>
  </div>
</template>
<script>
import Bible from './Bible.vue'
import Life from './Life.vue'
import Ministry from './Ministry.vue'
export default {
  name: 'MainContent',
  components: {
    Bible,
    Life,
    Ministry
  }
}
</script>
<style scoped>
@media (min-width: 1025px){
  .content-div {
    display: flex;
    justify-content: space-around;
    padding-top: 1vw;
    padding-bottom: 1vw;
    padding-right: 0.5vw;
    padding-left: 0.5vw;
  }
}
@media (max-width: 1025px){
  .content-div {
    padding-top: 1.5vh;
    padding-bottom: 1.5vh;
  }
}
</style>
