<template>
    <div class="topics-container">
        <div class="topic">
            <i class="fas fa-search topic-search"></i>
            <p>Search</p>
        </div>
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
    background-color: rgba(255,255,255,0.7);
    margin-top: 50px;
    height: 86px;
    color: rgba(0, 0, 0, 0.8);
    display: flex;
    /* justify-content: center; */
    padding-top: 12px;
    padding-bottom: 12px;
    border-bottom: solid 1px f6f6f6;

    overflow: auto;
    white-space: nowrap;
  }
  .topic {
    display: inline-block;
    /* padding-left: 18px;
    padding-right: 18px; */
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    width: 90px;
    text-align: center;

    display: inline-block;
    text-decoration: none;
  }
  .topic:first-child {
    padding-right: 25px !important;
  }
  .topic:first-child > p {
    margin-left: 15px;
  }
  .topic:hover {
    color: #777;
  }
  .topic > i {
    font-size: 40px;
    margin-left: 25%;
    margin-right: 25%;
  }
  .topic > p {
    font-size: 10px;
    text-align: center;
    margin-top: 5px;
  }
}
</style>
