<template>
  <div class="ministry-box">
    <div class="ministry">
        <div class="ministry-wrapper">
            <h2>사역</h2>
            <p>더 많은 사역을 당신에게</p>
        </div>
        <a class="demo-arrow-cls forward"> &raquo; </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ministry'
}
</script>
<style scoped>
@media (min-width: 1025px) {
  h2 {
    font-size: 7vh;
    margin-top: 0px;
    margin-bottom: 2vhs;
  }
  p {
    font-size: 3vh;
    margin-top: 25px;
    margin-bottom: 0;
  }
  a {
    display: none;
  }
  .ministry {
    font-family: 'Nanum Gothic', serif;
    color: #f4f4f4;
    background: linear-gradient(0deg, rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('../../assets/ministry.jpg');
    background-size: cover;
    height: 32vw;
    width: 32vw;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .ministry:hover {
    opacity: 0.7;
    color: rgb(220, 222, 214);
  }
}
@media (max-width: 1024px) {
  /* mobile */
  h2 {
    font-size: 2.2vh;
    margin-top: 0px;
    margin-bottom: 1vh;
  }
  p {
    font-size: 1.8vh;
    margin-top: 0px;
    margin-bottom: 0;
  }
  .ministry {
    font-family: 'Nanum Gothic', serif;
    background-color: #e4e4e4;
    background-size: cover;
    height: 12.5vh;
    width: 90vw;
    text-align: left;
    display: flex;
    align-items: center;
    color: #797979;
    cursor: pointer;
  }
  .ministry-wrapper {
    margin-left: 5vw;
  }
  .ministry-box {
    height: 14vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f6f6f6;
  }
  .demo-arrow-cls {
    float: right;
    position: absolute;
    margin-left: 10rem;
    width: 1.5vh;
    height: 1.5vh;
    background: transparent;
    border-top: 0.3vh solid #797979;
    border-left: 0.3vh solid #797979;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    color: transparent;
    right: 13vw !important;
  }
  .demo-arrow-cls.forward {
    transform: rotate(140deg);
    right: 5vw;
  }
}
</style>
