<template>
  <div>
    <Header></Header>
    <Topics></Topics>
    hi
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
// import BibleHeader from './BibleHeader.vue'
import Header from '../common/Header.vue'
import Topics from './common/Topics.vue'
// import All from './all'
// import Subject from './subject'
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
    Header,
    Topics
    // All,
    // Subject
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
