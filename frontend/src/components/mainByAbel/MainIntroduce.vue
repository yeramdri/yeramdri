<template>
  <div class="introduce-box">
    <div class="introduce-content">
      <h1>예람드리</h1>
      <h3>예배자들의 삶이 아름드리 꽃피우길</h3>
      <div class="bible">
        <p>우리가 알거니와 하나님을 사랑하는 자<br> 곧 그의 뜻대로 부르심을 입은 자들에게는<br> 모든 것이 합력하여 선을 이루느니라</p>
        <p>- 로마서 8장 28절 -</p>
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

@media (min-width: 992px) {
  .introduce-content {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url('/assets/mainIntroduce.jpg');
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
    color: #c4bd27;
  }
  .introduce-box {
    position: relative;
    width: 100%;
    margin: 60px auto 0px auto;
  }
  .introduce-box:before {
    content: '';
    display: block;
    padding-top: 66.7%;
  }
}
@media (max-width: 991px) {
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
    /* height: 5vh; */
    color: white;
    text-align: left;
    width: 100vw;
    /* padding-top: 32vw; */
    /* padding-left: 5vw; */
  }
  .introduce-content > h1 {
    font-size: 6vw;
    font-family: 'Nanum Gothic', serif;
    font-weight: 700;
    color: #f4f4f4;
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 8px;
  }
  .introduce-content > h3 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 4vw;
    font-family: 'Nanum Gothic', serif;
    font-weight: 700;
    color: #c4bd27;
    text-align: center;
  }
  .introduce-box {
    position: relative;
    width: 100%;
    height: 35vh;
    margin: 60px auto 0px auto;
  }
  .introduce-box:before {
    content: '';
    display: block;
    padding-top: 66.7%;
  }
  .bible {
    /* text-align: center; */
    margin: 0 auto;
    margin-top: 7vh;
    width: 90vw;
  }
  .bible > p {
    font-size: 0.5rem;
    color: #f4f4f4;
  }
}
</style>
