<template>
  <div class="bible-index">
    <Header></Header>
    <div v-bind:class="[searchValue==''?'hiddenFakeDiv': 'visibleFakeDiv']"></div>
    <div v-bind:class="[searchValue===''?'visibleClass':'hiddenClass']">
      <BibleTitle></BibleTitle>
    </div>
    <div class="bible-search">
      <div class="input-div">
        <input class="search-input" v-on:keyup="upEvent()" id="search-input" placeholder="Search Bible" v-model="searchValue"/>
      </div>
    </div>
    <div v-bind:class="[searchValue===''?'visibleClass':'hiddenClass']">
      <BeforeBibleSearch></BeforeBibleSearch>
    </div>
    <div v-bind:class="[searchValue===''?'hiddenClass':'visibleClass']">
      <AfterBibleSearch :lists="tag(lists)"></AfterBibleSearch>
    </div>
  </div>
</template>
<script>
import Header from '../common/Header'
import BibleTitle from './bible-title'
import BeforeBibleSearch from './before-bible-search'
import AfterBibleSearch from './after-bible-search'
import { store } from './store.js'
import { EventBus } from './event-bus.js'
export default {
  name: 'index',
  data () {
    return {
      searchValue: store.state.searchValue,
      lists: []
    }
  },
  mounted () {
    this.$socket.emit('bible_card_data_req', 'ok')
    var self = this
    EventBus.$on('cardClick', function () {
      store.state.searchValue = self.searchValue
    })
  },
  sockets: {
    bibleCard: function (data) {
      this.lists = data
    }
  },
  methods: {
    tag: function (lists) {
      var self = this
      return lists.filter(function (list) {
        var trueOrFalse
        var isStringInTag = list.tag.indexOf(self.searchValue)
        var isStringInBibleTitle = list.bibleTitle1.indexOf(self.searchValue)
        if (isStringInTag !== -1 || isStringInBibleTitle !== -1) {
          trueOrFalse = true
        } else {
          trueOrFalse = false
        }
        return trueOrFalse
      })
    },
    upEvent: function () {
      window.scrollTo(0, 0)
      this.searchValue = document.getElementById('search-input').value
    }
  },
  components: ({
    Header: Header,
    BibleTitle: BibleTitle,
    BeforeBibleSearch: BeforeBibleSearch,
    AfterBibleSearch: AfterBibleSearch
  })
}
</script>
<style scoped>
.visibleClass {
  visibility: visible;
}
.hiddenClass {
  visibility: hidden;
  height: 0px;
}
@media (min-width: 1025px) {
  .bible-search {
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-input {
    font-size: 18px;
    padding-top: 0.5vh;
    padding-left: 10px;
    padding-bottom: 0.5vh;
    width: 654px;
    height: 30px;
    border: 1px solid rgba(185, 185, 185, 0.701);
    border-radius: 2px;
    box-shadow: 0.1vh 0.1vh 0.05vh rgba(128, 128, 128, 0.454);
  }
  .search-input:focus {
    outline: none;
    box-shadow: 0.4vh 0.4vh 0.2vh rgba(128, 128, 128, 0.708);
  }
  .hiddenFakeDiv {
    visibility: hidden;
    height: 0px;
  }
  .visibleFakeDiv {
    visibility: visible;
    height: 50px;
  }
}
@media (max-width: 1024px) {
  .bible-search {
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-input {
    font-size: 3.5vh;
    padding-top: 0.5vh;
    padding-left: 0.5vh;
    padding-bottom: 0.5vh;
    width: 80vw;
  }
  .search-input:focus {
    outline: none;
    box-shadow: 0.4vh 0.4vh 0.2vh grey;
  }
  .hiddenFakeDiv {
    height: 0px;
    visibility: hidden;
  }
  .visibleFakeDiv {
    height: 0px;
    visibility: hidden;
  }
}
</style>
