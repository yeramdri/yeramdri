<template>
  <div class="footer_div">
    <div class="footer_content">
      <h6>주소: 서울특별시 용산구 청파로 47길 34-2</h6>
      <h6>책임자: 박의용</h6>
      <h6>문의: yeramdri@gmail.com</h6>
      <h6>페이스북: <a class="footer_a_tag" href="https://www.facebook.com/yeramdri" target="_blank">https://www.facebook.com/yeramdri</a></h6>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
.footer_div {
  background-color: #414141;
}
.footer_content > h1 {
  margin-top: 0px;
  margin-bottom: 0px;
  font-family: 'Nanum Gothic', serif;
}
.footer_content > hr {
  margin-top: 0px;
  margin-bottom: 0px;
  color: #ccc;
}
.footer_content > h6 {
  margin-top: 0px;
  margin-bottom: 0px;
  font-family: 'Nanum Gothic', serif;
  color: #ccc;
}
.footer_a_tag {
  text-decoration: none;
  color: #4383D3;
}
@media (min-width: 1025px) {
  .footer_content > h6 {
    font-size: 1vw;
    margin: 5px;
  }
  .footer_div {
    padding-top: 3vw;
    padding-bottom: 2vw;
  }
  .footer_content {
    width: 80%;
    margin: 0 auto;
  }
}
@media (max-width: 1024px) {
  .footer_content > h6 {
    font-size: 1.5vh;
  }
  .footer_div {
    height: 12vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
