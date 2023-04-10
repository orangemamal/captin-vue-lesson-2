<template lang="">
  <div class="clearAllContainer">
    <span class="clearAllbtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
     this.$store.commit('clearAllItems');
    }
  }
}
</script>

<style scoped>
  .clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: #e20303;
    border-radius: 5px;
    margin: 0 auto;
  }
  .clearAllbtn {
    color: white;
    display: block;
  }
</style>