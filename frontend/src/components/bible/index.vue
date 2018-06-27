<template>
  <div>
    <BibleHeader v-bind:selectedTab="selectedTab" v-bind:tabs="tabs" :on-click-all="onClickAll" :on-click-subject="onClickSubject"/>
    <div class="bible-box">
      <All/>
      <Subject/>
    </div>

  </div>
</template>

<script>
import BibleHeader from './BibleHeader.vue'
import All from './All.vue'
import Subject from './Subject.vue'
export default {
  name: 'Bible',
  data () {
    return {
      selectedTab: '전체',
      tabs: ['전체', '주제']
    }
  },
  methods: {
    onClickAll () {
      // todo ...
      // all 컴포넌트 렌더해주기 url은 바뀌지 않고 ㅇㅇ (데이터 가져와야 하는것들이 너무 많아서 무거워져서 느려지면 어떡하지???)
      this.selectedTab = this.tabs[0]
    },
    onClickSubject () {
      // todo ...
      // subject 컴포넌트 렌더해주기
      this.selectedTab = this.tabs[1]
    }
  },
  components: {
    BibleHeader,
    All,
    Subject
  }
}
</script>

<style scoped >
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
@media (max-width: 991px) {
  .bible-box {
    margin: 60px auto 0px auto;
    width: 100%;
  }
}
</style>
