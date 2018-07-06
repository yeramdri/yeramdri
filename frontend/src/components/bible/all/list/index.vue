<template>
  <div class="list-container">
    <Header/>
    <div class="list">
      <div class="Input-container">
        <Input class="Input"/>
      </div>
      <div class="bible-contents-container">
          <div v-for="(list, index) in formattedContentsList" v-bind:key="index" class="bible-contents-row">
            <div v-for="(item) in list"
                 v-bind:key="item.id"
                 v-bind:style="{ 'background-image': 'url(' + item.img + ')' }"
                 class="bible-contents">
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import GenerationModel from '../../dommyModels/GenerationModel.js'

import Header from '../../../common/Header.vue'
import Input from '../../common/Input.vue'

export default {
  name: 'List',
  created: function () {
    this.fetchContentsList()
  },
  data () {
    return {
      contentsList: [],
      formattedContentsList: []
    }
  },
  methods: {
    fetchContentsList () {
      GenerationModel.list().then(data => {
        this.contentsList = data
        this.formatContentsList()
      })
    },
    formatContentsList () {
      while (this.contentsList.length) {
        this.formattedContentsList.push(this.contentsList.splice(0, 3))
      }
      console.log('원본', this.contentsList, this.contentsList.length)
      console.log('새배열', this.formattedContentsList)
    }
  },
  components: {
    Input,
    Header
  }
}
</script>

<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
/* mobile */
@media (max-width: 991px) {
  .list-container {
  }
  .list {
    margin: 0px auto 0px auto;
    padding-bottom: 3vh;
  }
  .bible-contents-container {
    padding-top: 19vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bible-contents-row {
    margin-bottom: 1px;
    display: flex;
    align-content: flex-start;
    width: 100vw;
  }
  .bible-contents {
    display: inline-block;
    background-color: rgb(201, 188, 8);
    background-size: 33vw;
    width: 33vw;
    height: 18vh;
    margin: 0 0.5px;
  }
  .Input-container {
    position: fixed;
    padding: 60px 1.5vw 10px 1.5vw;
    width: 97vw;
    background: #f6f6f6;
  }
  .Input {
  }
}
</style>
