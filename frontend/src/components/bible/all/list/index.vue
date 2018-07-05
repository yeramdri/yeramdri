<template>
  <div class="list-container">
    <div class="list">
      <div class="Input-container">
        <Input class="Input"/>
      </div>
      <div class="bible-contents-container">
        <div class="bible-contents-row">
          <div class="bible-contents">
            1
          </div>
          <div class="bible-contents">
            2
          </div>
          <div class="bible-contents">
            3
          </div>
        </div>
        <div class="bible-contents-row">
          <div class="bible-contents">
            4
          </div>
          <div class="bible-contents">
            5
          </div>
          <div class="bible-contents">
            6
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '../../common/Input.vue'

export default {
  name: 'List',
  components: {
    Input
  }
}
</script>

<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
/* mobile */
@media (max-width: 991px) {
  .list-container {
  }
  .list {
    margin: 0px auto 0px auto;
    padding-bottom: 3vh;
  }
  .bible-contents-container {
    padding-top: 12vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bible-contents-row {
    margin-bottom: 3px;
  }
  .bible-contents {
    display: inline-block;
    background-color: rgb(201, 188, 8);
    width: 32vw;
    height: 18vh;
  }
  .Input-container {
    position: fixed;
    padding: 2vh 1.5vw 2vh 1.5vw;
    width: 97vw;
    background: #f6f6f6;
  }
  .Input {
    /* margin: 0 1.5vw 2vh 1.5vw; */
  }
}
</style>
