<template>
  <div class="App">
    <MainHeader></MainHeader>
    <MainIntroduce></MainIntroduce>
    <MainContent></MainContent>
    <MainFooter></MainFooter>
  </div>
</template>
<script>
import MainHeader from './common/Header.vue'
import MainIntroduce from './mainByAbel/MainIntroduce.vue'
import MainContent from './mainByAbel/MainContent.vue'
import MainFooter from './common/Footer.vue'
export default {
  name: 'Main',
  components: ({
    MainHeader: MainHeader,
    MainIntroduce: MainIntroduce,
    MainContent: MainContent,
    MainFooter: MainFooter
  })
}
</script>
