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
  background: linear-gradient(to right, rgba(121, 154, 198, 0.94), #0c0f1854);
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
