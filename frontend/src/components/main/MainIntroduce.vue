<template>
  <div class="introduce-box">
    <div class="introduce-content">
      <h1>예람드리: 십자가, 일상에서</h1>
      <h3>예배자들의 삶이 아름드리 꽃피우길</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainIntroduce'
}
</script>
<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);

@media (min-width: 992px) {
  .introduce-content {
    background: linear-gradient(0deg,rgba(0,0,0,0.4), rgba(0,0, 0,0.4)), url("/assets/mainIntroduce.jpg");
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
    font-family: 'Nanum Gothic', serif;
    font-weight: 700;
    font-size: 4.5vw;
    color: white;
  }
  .introduce-content > h3 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: 'Nanum Gothic', serif;
    font-weight: 700;
    font-size: 2.5vw;
    color: #C4BD27;
  }
  .introduce-box {
    position: relative;
    width: 100%;
    margin: 50px auto 0px auto;
  }
  .introduce-box:before {
    content: "";
    display: block;
    padding-top: 66.7%;
  }
}
@media (max-width: 991px) {
  .introduce-content {
    background: linear-gradient(0deg,rgba(0,0,0,0.4), rgba(0,0, 0,0.4)), url("/assets/mainIntroduce.jpg");
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
    font-size: 5vw;
    font-family: 'Nanum Gothic', serif;
    font-weight: 700;
    color: white;
  }
  .introduce-content > h3 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 3vw;
    font-family: 'Nanum Gothic', serif;
    font-weight: 700;
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
