<template>
  <div class="introduce-box">
    <div class="introduce-content">
      <h1>미디어: 일상 속의 하나님의 나라</h1>
      <h3>주를 향한 일상 속의 기록물, 함께 만드는 자리</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainIntroduce'
}
</script>
<style scoped>
@media (min-width: 992px) {
  .introduce-content {
    background: linear-gradient(0deg,rgba(0,0,0,0.4), rgba(0,0, 0,0.4)), url("/assets/mediaIntroduce.jpg");
    background-size: cover;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    color: white;
    text-align: left;
    padding-top: 32vw;
    padding-left: 5vw;
  }
  .introduce-content > h1 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 4.5vw;
    color: white;
  }
  .introduce-content > h3 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 2.5vw;
    color: #C4BD27;
  }
  .introduce-box {
    position: relative;
    width: 100%;
    margin: 60px auto 0px auto;
  }
  .introduce-box:before {
    content: "";
    display: block;
    padding-top: 66.7%;
  }
}
@media (max-width: 991px) {
  .introduce-content {
    background: linear-gradient(0deg,rgba(0,0,0,0.4), rgba(0,0, 0,0.4)), url("/assets/mediaIntroduce.jpg");
    background-size: cover;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    color: white;
    text-align: left;
  }
  .introduce-content > h1 {
    margin-top: 0px;
    margin-bottom: 0px;
    color: white;
  }
  .introduce-content > h3 {
    margin-top: 0px;
    margin-bottom: 0px;
    color: #C4BD27;
  }
  .introduce-box {
    position: relative;
    width: 100%;
    margin: 60px auto 0px auto;
  }
  .introduce-box:before {
    content: "";
    display: block;
    padding-top: 66.7%;
  }
}
</style>
