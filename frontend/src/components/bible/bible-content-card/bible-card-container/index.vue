<template>
  <div class="bible-card-container-div">
    <Found v-if="length !== 0" v-for="item in list"
      :key="item.id"
      :title="item.title"
      :image="item.image"
      :tag="item.tag.split(',')"
      :bibleTitle1="item.bibleTitle1"
      :bibleTitle2="item.bibleTitle2"
      :bibleContent="item.bibleContent"
      :bibleQuestion="item.bibleQuestion"
      :bibleAdvice="item.bibleAdvice"
      :link="item.link"></Found>
    <NotFound v-if="length === 0"></NotFound>
  </div>
</template>
<script>
import Found from './found'
export default {
  props: ['list', 'length'],
  name: 'BibleCardContainer',
  components: ({
    Found: Found
  })
}
</script>
