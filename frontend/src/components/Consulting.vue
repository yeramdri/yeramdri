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
import MainIntroduce from './consulting/MainIntroduce.vue'
import MainContent from './consulting/MainContent.vue'
import MainFooter from './common/Footer.vue'
export default {
  name: 'Consulting',
  components: ({
    MainHeader: MainHeader,
    MainIntroduce: MainIntroduce,
    MainContent: MainContent,
    MainFooter: MainFooter
  })
}
</script>
