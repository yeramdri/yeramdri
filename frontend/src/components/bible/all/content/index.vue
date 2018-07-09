<template>
  <div class="content-wrapper">
    <Header/>
    <div>
      <h3>title</h3>
      <p>discription</p>
    </div>
    <div class="content">
      <img src='https://scontent-hkg3-1.xx.fbcdn.net/v/t31.0-8/26678673_884234425080756_8580593128220495703_o.jpg?_nc_cat=0&oh=2bba8acca720cf8802db20083edb6d42&oe=5BD5BD0E'>
    </div>
  </div>
</template>

<script>
import Header from '../../../common/Header.vue'

export default {
  name: 'BibleContent',
  components: {
    Header
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
/* mobile */
@media (max-width: 991px) {
  .content-wrapper {
    margin-top: 50px;
    background: green;
  }
  .content {
  }

  .content > img {
     width: 100vw;
   }
}
</style>
