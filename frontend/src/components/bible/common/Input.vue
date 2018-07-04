<template>
    <div class="input-box shadow">
        <input type="text" v-model="value" placeholder="Find in Bible" autofocus/>
        <span class="add-container">
            <i v-show="!value.length" v-on:click="onClick" class="fas fa-book add-btn"></i>
            <i v-show="value.length" class="fas fa-search add-btn"></i>
        </span>
    </div>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      value: this.value || ''
    }
  },
  methods: {
    onClick () {
      console.log('hiihi')
      this.$emit('@click')
    }
  }
}

</script>

<style scoped>
input:focus {
  outline: none;
}
.input-box {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  text-align: center;
}
.input-box input {
  border-style: none;
  font-size: 0.9rem;
  width: 70vw;
  height: 5vh;
}
.add-container {
  float: right;
  background: linear-gradient(to right, #c4bc27af, #c4bc2786);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  text-align: center;
}
.add-btn {
  color: white;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
</style>
