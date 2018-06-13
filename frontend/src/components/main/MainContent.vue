<template>
  <div class="content-div">
    <div class="bible-div">
      <div class="bible-main">
        <h1>우리가 알거니와 하나님을 사랑하는 자</h1>
        <h1>곧 그의 뜻대로 부르심을 입은 자들에게는</h1>
        <h1>모든 것이 합력하여 선을 이루느니라</h1>
      </div>
      <div class="bible-title">
        <h3>- 로마서 8장 28절 -</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainContent'
}
</script>
<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);

@media (min-width: 992px){
  .bible-div {
    background-color: #ddd;
  }
  .bible-main > h1 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: 'Nanum Gothic', serif;
    font-weight: 700;
    text-align: center;
    color: #414141;
  }
  .bible-title > h3 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: 'Nanum Gothic', serif;
    font-weight: 700;
    text-align: center;
    color: #414141;
  }
}
@media (max-width: 991px){
  .bible-div {
    padding-top: 4vw;
    padding-bottom: 4vw;
    background-color: #ddd;
  }
  .bible-main {
    margin-bottom: 2vw;
  }
  .bible-main > h1 {
    font-size: 4vw;
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: 'Nanum Gothic', serif;
    font-weight: 700;
    text-align: center;
    color: #414141;
  }
  .bible-title > h3 {
    font-size: 3vw;
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: 'Nanum Gothic', serif;
    font-weight: 700;
    text-align: center;
    color: #414141;
  }
}
</style>
