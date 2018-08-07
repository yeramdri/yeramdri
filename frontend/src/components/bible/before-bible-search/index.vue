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
