<template>
  <div class="bible-title">
    <div class="text-div">
      <h1>말씀</h1>
      <h4>예수, 나를 향한 사랑의 시작</h4>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BibleTitle'
}
</script>
<style scoped>
@media (max-width: 1024px) {
  .bible-title {
    height: 32vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text-div {
    text-align: center;
    color: rgb(190,206,210);
  }
  .text-div > h1 {
    font-size: 8vh;
    margin-top: 0px;
    margin-bottom: 2vh;
  }
  .text-div > h4 {
    font-size: 3vh;
    margin-top: 0px;
    margin-bottom: 0px;
  }
}
</style>
