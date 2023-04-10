<template lang="">
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer" @click="addTodo">
      <font-awesome-icon :icon="['fas', 'plus']" class="addBtn" />
    </span>

    <ModalComp v-if="showModal">
     
      <h3 slot="header" @click="showModal = false">
        경고!
        <i class="closeModalBtn fas fa-times"></i>
      </h3>
      <div slot="body">아무것도 입력하지 않으셨습니다.</div>

    </ModalComp>

  </div>
</template>

<script>
import ModalComp from "./common/ModalComp.vue"

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    }
  },
  methods: {
    addTodo() {
      // 공백이 아닐 때,
      if(this.newTodoItem !== '') {
        
        // this.$emit('addTodoItem', this.newTodoItem);
        this.$store.commit('addOneItem', this.newTodoItem);

        // 메서드를 분할하여서 작동시킴
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      // input text 비우는 작업
      this.newTodoItem = '';
    }
  },
  components: {
    ModalComp,
  },
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478fb, #8763fb);
    width: 3rem;
    height: 100%;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
    cursor: pointer;
  }
  .closeModalBtn {
    color: #42b983;
    cursor: pointer;
  }
</style>