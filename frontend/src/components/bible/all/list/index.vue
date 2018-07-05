<template>
  <div class="list-container">
    <Header/>
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
import Header from '../../../common/Header.vue'
import Input from '../../common/Input.vue'

export default {
  name: 'List',
  components: {
    Input,
    Header
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
    padding-top: 19vh;
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
    padding: 60px 1.5vw 10px 1.5vw;
    width: 97vw;
    background: #f6f6f6;
  }
  .Input {
  }
}
</style>
