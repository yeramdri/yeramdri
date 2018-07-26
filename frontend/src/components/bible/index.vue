<template>
  <div>
    <Header></Header>
    <div class="bible-box">
      <div>
        <All/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../common/Header.vue'
import All from './all'
export default {
  name: 'Bible',
  mounted () {
    this.$socket.emit('bible_card_data_req', 'ok')
  },
  components: {
    Header,
    All
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
