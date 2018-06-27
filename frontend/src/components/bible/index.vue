<template>
    <div>
        <BibleHeader/>
        hi im bible
        <All/>
    </div>
</template>

<script>
import BibleHeader from './BibleHeader.vue'
import All from './All.vue'
export default {
  name: 'Bible',
  components: {
    BibleHeader,
    All
  }
}
</script>

<style>
</style>
