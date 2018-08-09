<template>
  <div class="bible-card-box">
    <div class="bible-card-content" v-bind:style="bibleCardStyle" v-on:click="goIndividualPage"></div>
  </div>
</template>
<script>
import { EventBus } from '../../event-bus.js'
import router from '../../../../router'
export default {
  props: ['cardId', 'cardImage'],
  name: 'BibleCard',
  data () {
    return {
      bibleCardStyle: {
        display: 'inline-block',
        background: 'url("' + this.cardImage + '")',
        backgroundSize: 'cover'
      }
    }
  },
  methods: {
    goIndividualPage () {
      EventBus.$emit('cardClick', 'click')
      router.push('/bible/' + this.cardId)
    }
  }
}
</script>
<style scoped>
@media (min-width: 1025px) {
  .bible-card-content {
    width: 19.5vw;
    height: 19.5vw;
    margin: 0 auto;
    cursor: pointer;
  }
  .bible-card-content:hover {
    opacity: 0.7;
  }
}
@media (max-width: 1024px) {
  .bible-card-content {
    width: 33vw;
    height: 33vw;
    margin: 0 auto;
  }
}
</style>
