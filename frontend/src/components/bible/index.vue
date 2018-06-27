<template>
  <div>
    <BibleHeader v-bind:selectedTab="selectedTab" v-bind:tabs="tabs" :on-click-all="onClickAll" :on-click-subject="onClickSubject" />
    <div class="bible-box">
      <div v-if="selectedTab === tabs[0]">
        <All/>
      </div>
      <div v-else>
        <Subject/>
      </div>
    </div>

  </div>
</template>

<script>
import BibleHeader from './BibleHeader.vue'
import All from './all'
import Subject from './subject'
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
      this.selectedTab = this.tabs[0]
    },
    onClickSubject () {
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

<style>
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
