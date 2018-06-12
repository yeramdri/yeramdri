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
import MainIntroduce from './main/MainIntroduce.vue'
import MainContent from './main/MainContent.vue'
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
