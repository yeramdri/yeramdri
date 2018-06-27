<template>
    <div class="input-box shadow">
        <input type="text">
        <span class="add-container">
            <i class="fas fa-search add-btn"></i>
        </span>
    </div>
</template>

<script>
export default {
  name: 'Input'
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.input-box {
  background: green;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.input-box input {
  border-style: none;
  font-size: 1.4rem;
}
.add-container {
  float: right;
  background: linear-gradient(to right, #339af0, #74c0fc);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.add-btn {
  color: white;
  vertical-align: middle;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
</style>
