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
