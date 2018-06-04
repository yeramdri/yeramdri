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
import MainIntroduce from './introduce/MainIntroduce.vue'
import MainContent from './introduce/MainContent.vue'
import MainFooter from './common/Footer.vue'
export default {
  name: 'Introduce',
  components: ({
    MainHeader: MainHeader,
    MainIntroduce: MainIntroduce,
    MainContent: MainContent,
    MainFooter: MainFooter
  })
}
</script>
