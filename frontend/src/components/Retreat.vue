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
import MainIntroduce from './retreat/MainIntroduce.vue'
import MainContent from './retreat/MainContent.vue'
import MainFooter from './common/Footer.vue'
export default {
  name: 'Retreat',
  components: ({
    MainHeader: MainHeader,
    MainIntroduce: MainIntroduce,
    MainContent: MainContent,
    MainFooter: MainFooter
  })
}
</script>
