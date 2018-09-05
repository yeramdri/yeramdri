<template>
  <div class="bible-not-found-div">
    <h1>Page not found!</h1>
    <h4>please return to back page!</h4>
  </div>
</template>
<script>
export default {
  name: 'NotFound'
}
</script>
<style scoped>
@media (min-width: 1025px) {
  .bible-not-found-div {
    height: 97vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center; 
  }
  .bible-not-found-div > h1 {
    font-size: 4vh;
  }
  .bible-not-found-div > h4 {
    font-size: 2vh;
  }
}
@media (max-width: 1024px) {
  .bible-not-found-div {
    height: 97vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bible-not-found-div > h1 {
    font-size: 4vh;
  }
  .bible-not-found-div > h4 {
    font-size: 2vh;
  }
}
</style>
