<template>
  <div class="subject-container">
    <div class="subject">
      <Input/>
      <div class="dommy-contents-container">
        <div class="dommy-contents-row">
          <div class="dommy-contents">
            1
          </div>
          <div class="dommy-contents">
            2
          </div>
          <div class="dommy-contents">
            3
          </div>
        </div>
        <div class="dommy-contents-row">
          <div class="dommy-contents">
            4
          </div>
          <div class="dommy-contents">
            5
          </div>
          <div class="dommy-contents">
            6
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '../common/Input.vue'
export default {
  name: 'Subject',
  components: {
    Input
  }
}
</script>

<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
@media (max-width: 991px) {
  .subject-container {
    height: 91vh;
  }
  .subject {
    margin: 60px auto 0px auto;
    width: 95vw;
    padding-top: 3vh;
    padding-bottom: 3vh;
  }
  .dommy-contents-container {
    padding-top: 1vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .dommy-contents-row {
    margin-bottom: 3px;
  }
  .dommy-contents {
    display: inline-block;
    background-color: rgb(201, 188, 8);
    width: 30vw;
    height: 18vh;
  }
}
</style>
