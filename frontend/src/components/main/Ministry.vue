<template>
    <div class="ministry">
        <div class="ministry-wrapper">
            <h2>사역</h2>
            <p>더 많은 사역을 당신에게</p>
        </div>
        <a class="demo-arrow-cls forward"> &raquo; </a>
    </div>
</template>

<script>
export default {
  name: 'Ministry'
}
</script>

<style scoped>
@media (max-width: 1024px) {
  h2 {
    font-size: 3vh;
    margin-top: 0px;
    margin-bottom: 1vh;
  }
  p {
    font-size: 2vh;
    margin-top: 0px;
    margin-bottom: 0;
  }
  .ministry {
    font-family: 'Nanum Gothic', serif;
    color: #f4f4f4;
    background: linear-gradient(0deg, rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('../../assets/ministry.jpg');
    background-size: cover;
    opacity: 0.8;
    height: 20vh;
    width: 100vw;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .demo-arrow-cls {
    float: right;
    position: absolute;
    margin-left: 10rem;
    width: 4vh;
    height: 4vh;
    background: transparent;
    border-top: 0.5vh solid rgba(208, 206, 206, 0.789);
    border-left: 0.5vh solid #f4f4f4;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    color: transparent;
  }
  .demo-arrow-cls.forward {
    transform: rotate(140deg);
    right: 5vw;
  }
}
</style>
