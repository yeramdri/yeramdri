<template>
  <div>
    <Header></Header>
    <Topics></Topics>
    <div class="dailyLife-box">
      <div>
          <Search/>
      </div>
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
import Header from '../common/Header.vue'
import Topics from './common/Topics.vue'
import Search from './search'
// import All from './all'
// import Subject from './subject'
export default {
  name: 'DailyLife',
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
    Topics,
    Search
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
