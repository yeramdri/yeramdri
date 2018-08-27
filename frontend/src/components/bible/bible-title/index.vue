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
@media (min-width: 1025px) {
  .bible-title {
    margin: 7vh auto 0 auto;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text-div {
    text-align: center;
    color: rgb(190,206,210);
    /*margin-top: 100px;*/
  }
  .text-div > h1 {
    font-size: 90px;
    font-weight: 400;
    margin-top: 0px;
    margin-bottom: 0;
  }
  .text-div > h4 {
    font-size: 30px;
    font-weight: 300;
    margin-top: 0px;
    margin-bottom: 0px;
  }
}
@media (max-width: 1024px) {
  /* mobile */
  .bible-title {
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 15px;
  }
  .text-div {
    text-align: center;
    color: rgb(190,206,210);
  }
  .text-div > h1 {
    font-size: 38px;
    margin-top: 0px;
    margin-bottom: 0px;
    font-weight: 400;
  }
  .text-div > h4 {
    font-size: 18px;
    font-weight: 400;
    margin-top: 0px;
    margin-bottom: 0px;
  }
}
</style>
