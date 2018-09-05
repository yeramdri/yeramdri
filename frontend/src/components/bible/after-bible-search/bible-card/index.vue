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
  .bible-card-box {
    width: 24.95vw;
    height: 24.95vw;
    max-width: 426.6px;
    max-height: 426.6px;
    margin: 0 auto;
    display: inline-block;
  }
  .bible-card-content {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .bible-card-content:hover {
    opacity: 0.7;
  }
}
@media (max-width: 1024px) {
  /* mobile */
  .bible-card-box {
    width: 30vw;
    height: 30vw;
    /* margin: 0 auto; */
    margin: 0.5vw;
    display: inline-block;
  }
  .bible-card-content {
    width: 100%;
    height: 100%;
  }
}
</style>
