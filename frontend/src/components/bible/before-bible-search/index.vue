<template>
  <div class="before-bible-search-div">
    <iframe class="before-bible-search-video" src="https://www.youtube.com/embed/9xmdxhnIDT8" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </div>
</template>
<script>
export default {
  name: 'BeforeBibleSearch'
}
</script>
<style scoped>
@media (min-width: 1024px) {
  .before-bible-search-div {
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .before-bible-search-video {
    width: 664px;
    height: 35vh;
    border: none;
    box-shadow: 0.4vh 0.4vh 0.2vh rgba(128, 128, 128, 0.454);
  }
}
@media (max-width: 1024px) {
  .before-bible-search-div {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .before-bible-search-video {
    width: 80vw;
    height: 40vh;
    border: none;
  }
}
</style>
