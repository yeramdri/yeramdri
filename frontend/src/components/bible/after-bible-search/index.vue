<template>
  <div class="after-bible-search-div">
    <BibleCard v-for="item in lists"
      :key="item.id"
      :cardId="item.id"
      :cardImage="item.image"></BibleCard>
  </div>
</template>
<script>
import BibleCard from './bible-card'
export default {
  props: ['lists'],
  name: 'AfterBibleSearch',
  components: ({
    BibleCard: BibleCard
  })
}
</script>
<style scoped>
@media (min-width: 1025px) {
  .after-bible-search-div {
    width: 75vw;
    margin: 0 auto;
    max-width: 1280px;
  }
}
@media (max-width: 1024px) {
  /* mobile */
  .after-bible-search-div {
    width: 96vw;
    margin: 0 auto;
  }
}
</style>
