<template>
  <div class="bible-found-div">
    <!--<div class="bible-found-title-div">-->
      <!--<h3>{{title}}</h3>-->
    <!--</div>-->
    <div class="bible-found-image-div">
      <!-- <img class="bible-found-image" :src="image" alt="말씀사진"-->
      <iframe class="bible-found-image" :src="contentVideo"></iframe>
    </div>
    <div class="bible-found-posts-div">
      <div class="bible-found-title-div">
        <h3>{{title}}</h3>
      </div>
      <!--<div class="bible-found-tags-div">-->
        <!--<span v-for="item in tag" :key="item">#{{item}}</span>-->
      <!--</div>-->
      <div class="bible-found-content-div">
        <p class="bible-found-section">{{bibleTitle1}} {{bibleTitle2}}</p>
        <p class="bible-found-text">{{bibleContent}}</p>
      </div>
      <div class="bible-found-sharing-div">
        <p class="bible-found-question" v-for="item in bibleQuestion" :key="item.id">{{item.id}}. {{item.text}}</p>
        <p class="bible-found-advice">{{bibleAdvice}}</p>
        <span class="bible-found-tag" v-for="item in tag" :key="item">#{{item}}</span>
      </div>
      <div class="bible-found-link-div">
        <button class="bible-found-link" v-on:click="goSermon">원문 설교 보러가기</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title', 'contentVideo', 'image', 'tag', 'bibleTitle1', 'bibleTitle2', 'bibleContent', 'bibleQuestion', 'bibleAdvice', 'link'],
  name: 'Found',
  methods: {
    goSermon () {
      window.open(this.link, '_blank')
    }
  }
}
</script>
<style scoped>
@media (min-width: 1025px) {
  /* desktop */
  .bible-found-div {
    margin: 0 auto 0 auto;
  }
  .bible-found-title-div {
    margin: 0 auto;
    padding-top: 2vh;
    padding-bottom: 1vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bible-found-title-div > h3 {
    margin: 0px;
    font-size: 4vmin;
  }
  .bible-found-image-div {
    position: absolute;
    height: 80vh;
    width: 50vw;
    top: 9vh;
    left: 7vw;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
  }
  .bible-found-image {
    width: 100%;
  }
  .bible-found-posts-div {
    position: relative;
    width: 35vw;
    height: 80vh;
    margin: 0 7vw 0 auto;
    overflow: scroll;
  }
  .bible-found-text {
    height: 30vh;
    font-size: 2vh;
    overflow: scroll;
    margin-top: 0px;
  }
  .bible-found-tags-div {
    margin-top: 1vh;
  }
  .bible-found-tags-div > span {
    font-size: 1.9vh;
    background-color: rgb(60, 122, 252);
    color: white;
    padding: 1vh;
    margin-right: 1vh;
  }
  .bible-found-tag {
    color: rgb(60, 122, 252);
    background-color: transparent;
    margin-right: 0.25vh;
    margin-left: 0.25vh;
  }
  .bible-found-section {
    font-size: 3vh;
    margin-top: 1.5vh;
    margin-bottom: 1.5vh
  }
  .bible-found-sharing-div {
    margin-top: 1.5vh;
    margin-bottom: 1.5vh
  }
  .bible-found-question {
    margin-top: 0px;
    margin-bottom: 1vh;
    font-size: 2vh;
    color: #777;
  }
  .bible-found-advice {
    font-size: 2vh;
    color: #777;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .bible-found-link-div {
    margin-top: 2vh;
    margin-bottom: 1vh;
    text-align: center;
  }
  .bible-found-link {
    text-decoration: none;
    color: black;
    font-size: 2.5vh;
    padding: 1vh 3vh;
    width: 55%;
    font-weight: 700;
    background-color: white;
    border: 0.5vh solid black;
  }
  .bible-found-link:hover {
    color: white;
    background-color: black;
  }
  .bible-found-link:focus {
    outline: none;
  }
}
@media (max-width: 1024px) {
  /* mobile */
  .bible-found-div {
    margin: 8vh auto 0 auto;
  }
  .bible-found-title-div {
    /* padding-left: 10px; */
  }
  .bible-found-title-div > h3 {
    height: 40px;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    line-height: 40px;
    color: #262626;
  }
  .bible-found-posts-div {
    width: 92%;
    margin: 0 auto;
  }
  .bible-found-tags-div {
    /* margin-top: 1vh; */
  }
  .bible-found-tags-div > span {
    font-size: 10px;
    /* background-color: rgb(60, 122, 252); */
    color: #003569;
    /* padding: 0.5vh; */
    margin-right: 0.5vh;
  }
  .bible-found-tag {
    background-color: transparent;
    color: #003569;
    font-size: 13px;
    margin-left: 0.25vh;
    margin-right: 0.25vh;
    padding-top: 10px;
    display: inline-block;
  }
  .bible-found-section {
    margin-top: 3.5px;
    margin-bottom: 3.5px;
    font-size: 14px;
    font-weight: 500;
  }
  .bible-found-image {
    width: 100vw;
    height: 70vw;
    margin-top: 15px;
    border: none;
  }
  .bible-found-text {
    height: 20vh;
    font-size: 1.9vh;
    overflow: scroll;
    margin-top: 0px;
  }
  .bible-found-sharing-div {
    margin-top: 1vh;
    margin-bottom: 1vh
  }
  .bible-found-question {
    margin-top: 0px;
    margin-bottom: 1vh;
    font-size: 2vh;
    color: #777;
  }
  .bible-found-advice {
    font-size: 2vh;
    color: #777;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .bible-found-link-div {
    margin-top: 20px;
    margin-bottom: 25px;
    text-align: center;
  }
  .bible-found-link {
    text-decoration: none;
    color: #262626;
    font-size: 13px;
    padding: 1vh 3vh;
    width: 50vw;
    font-weight: 600;
    background-color: #f6f6f6;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
  }
}
</style>
