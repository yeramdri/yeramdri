<template>
  <div class="bible-content-card-div">
    <Header></Header>
    <BibleCardContainer :list="cardId(lists)" :length="cardId(lists).length"></BibleCardContainer>
  </div>
</template>
<script>
import Header from '../../common/DetailContentHeader'
import BibleCardContainer from './bible-card-container'
export default {
  name: 'BibleContentCard',
  data () {
    return {
      lists: [],
      IsDataFound: false
    }
  },
  mounted () {
    this.$socket.emit('bible_card_data_req', 'ok')
  },
  sockets: {
    bibleCard: function (data) {
      this.lists = data
    }
  },
  methods: {
    cardId: function (lists) {
      return lists.filter(function (list) {
        return list.id === parseInt(window.location.pathname.split('/')[2])
      })
    }
  },
  components: ({
    BibleCardContainer: BibleCardContainer,
    Header: Header
  })
}
</script>
