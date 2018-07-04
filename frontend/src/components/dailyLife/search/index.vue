<template>
    <div>
        <div class="search">
            <h1>Daily Life</h1>
            <p>일상을 살아가기</p>
            <Input/>
            <iframe class="search-video" src="https://www.youtube.com/embed/PByUk9LDA24" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
import Input from '../common/Input.vue'
export default {
  name: 'search',
  components: {
    Input
  }
}
</script>

<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
/* mobile */
@media (max-width: 991px) {
  h1 {
    text-align: center;
    font-size: 2.5rem;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 0;
    margin-top: 0;
  }
  p {
    text-align: center;
    font-size: 5vw;
    color: rgba(121, 154, 198, 0.94);;
    margin-top: 0;
    margin-bottom: 10vw;
  }
  .search-container {
    /* background: #27c456; */
    height: 91vh;
  }
  .search {
    margin: 30px auto 0px auto;
    width: 95vw;
    /* background-color: green; */
    /* padding-top: 3vh; */
    padding-bottom: 3vh;
  }
  .search-video {
    background-color: #f6f6f6;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10vh;
    display: block;
    width: 90vw;
    height: 30vh;
    border: none;
    /* width: 420;
    height: 315; */
  }
}
</style>
