<template>
  <div class="introduce-box">
    <div class="introduce-content">
      <div class="content-text">
        <h1>예람드리</h1>
        <h3>예배자들의 삶, 아름드리 꽃피우길.</h3>
      </div>
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
@import url(https://fonts.googleapis.com/css?family=Do+Hyeon);
@import url(https://fonts.googleapis.com/css?family=Gothic+A1);
@media (min-width: 1025px) {
  .introduce-content {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url('../../assets/mainIntroduceMobile.jpg');
    height: 40vw;
    margin-top: 7vh;
    opacity: 0.9;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content-text > h1 {
    font-size: 9vh;
    margin-top: 0px;
    margin-bottom: 2vh;
    font-family: 'Nanum Gothic', serif;
    font-weight: 700;
    color: #f4f4f4;
    text-align: center;
  }
  .content-text > h3 {
    font-size: 6vh;
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: 'Nanum Gothic', serif;
    font-weight: 700;
    color: rgb(216, 200, 100);
    text-align: center;
  }
}
@media (max-width: 1024px) {
  /* mobile */
  .introduce-content {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url('../../assets/mainIntroduceMobile.jpg');
    opacity: 0.9;
    background-size: cover;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    color: white;
    text-align: left;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 10vh;
    /* align-items: center; */
  }
  .content-text > h1 {
    font-size: 20px;
    margin-top: 0px;
    margin-bottom: 1vh;
    font-family: 'Nanum Gothic', serif;
    font-weight: 700;
    color: #f4f4f4;
    text-align: center;
  }
  .content-text > h3 {
    font-size: 12px;
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: 'Nanum Gothic', serif;
    font-weight: 700;
    color: rgb(216, 200, 100);
    text-align: center;
  }
  .introduce-box {
    position: relative;
    width: 100%;
    height: 35vh;
    margin: 0px auto;
  }
  .introduce-box:before {
    content: '';
    display: block;
  }
}
</style>
