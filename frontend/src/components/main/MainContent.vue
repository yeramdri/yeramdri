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
