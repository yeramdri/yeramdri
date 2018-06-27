<template>
    <div class="all">
        <h1>Bible</h1>
        <Input/>
        <video class="all-video" src=""></video>
    </div>
</template>

<script>
import Input from '../common/Input.vue'
export default {
  name: 'All',
  components: {
    Input
  }
}
</script>

<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
@media (max-width: 991px) {
  H1 {
    text-align: center;
    font-size: 4rem;
    margin-top: 20vh;
  }
  .all {
    margin: 60px auto 0px auto;
    width: 95vw;
  }
  .all-input{
    background: green;
  }
  .all-video {
    background-color: #C4BD27;

  }
}
</style>
