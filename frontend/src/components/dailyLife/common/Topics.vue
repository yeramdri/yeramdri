<template>
    <div class="topics-container">
        <div class="topic">
            <i class="fas fa-check-square"></i>
            <p>True or False<br>in church</p>
        </div>
        <div class="topic">
            <i class="fas fa-globe"></i>
            <p>Eye for the world</p>
        </div>
        <div class="topic">
            <i class="fas fa-question-circle"></i>
            <p>What shall we do?</p>
        </div>
    </div>

</template>

<script>
export default {
  name: 'Topics'
}
</script>

<style scoped>
/* mobile */
@media (max-width: 991px) {
  .topics-container {
    background-color: #141414;
    margin-top: 50px;
    height: 86px;
    color: white;
    display: flex;
    justify-content: center;
    padding-top: 12px;
    padding-bottom: 12px;
  }
  .topic {
    display: inline-block;
    padding-left: 18px;
    padding-right: 18px;
    padding-top:10px;
    width: 90px;
    text-align: center;
  }
  .topic > i {
    font-size: 40px;
    margin-left: 25%;
    margin-right: 25%;
  }
  .topic > p {
    font-size: 2px;
    text-align: center;
    margin-top: 5px;
  }
}
</style>
