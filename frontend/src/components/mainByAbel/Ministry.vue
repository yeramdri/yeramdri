<template>
    <div class="ministry">
        <div class="ministry-wrapper">
            <h2>사역</h2>
            <p>더 많은 사역을 당신에게</p>
        </div>
        <a href="#" class="demo-arrow-cls forward"> &raquo; </a>
    </div>
</template>

<script>
export default {
  name: 'Ministry'
}
</script>

<style scoped>
@media (max-width: 991px) {
  h2 {
    /* padding-top: 5vh; */
    margin-top: 0px;
    margin-bottom: 1vh;
  }
  p {
    margin-top: 1vh;
    margin-bottom: 0;
  }
  .ministry {
    font-family: 'Nanum Gothic', serif;
    color: #f4f4f4;
    background: url('../../assets/ministryMobile.jpg');
    opacity: 0.8;
    height: 20vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .demo-arrow-cls {
    float: right;
    /* display: inline-block; */
    position: absolute;
    margin-left: 10rem;
    width: 30px;
    height: 30px;
    background: transparent;
    border-top: 1.5px solid rgba(208, 206, 206, 0.789);
    border-left: 1.5px solid #f4f4f4;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    color: transparent;
  }
  .demo-arrow-cls:hover {
    border-top: 1.5px solid rgba(208, 206, 206, 0.276);
    border-left: 1.5px solid #f4f4f468;
    border-width: 2px;
  }
  .demo-arrow-cls.forward {
    transform: rotate(140deg);
    right: 1.5rem;
  }
}
</style>
