<template lang="">
  <div>
    <transition-group name="list" tag="ul">
    
      <li v-for="(todoItem, index) in this.storedTodoItems" :key="todoItem.item" class="shadow">
        <!-- 
          v-bind를 통해 todoItem의 completed의 boolean값을 통해서 textCompleted 라는 class가 추가될지, 없어질지 결정.
          간단하게 addClass, removeClass가 가능하다.
        -->
        <font-awesome-icon icon="fa-solid fa-check" class="checkBtn" :class="{checkBtnCompleted: todoItem.completed}" @click="toggleComplete({todoItem, index})" />
        <span :class="{textCompleted: todoItem.completed}">
          {{ todoItem.item }}
        </span>
        <!-- v-for의 파라미터를 그대로 받아와서 바로 직접 관여 가능 -->
        <span class="removeBtn" @click="removeTodo({todoItem, index})">
          <font-awesome-icon icon="fa-solid fa-trash" />
        </span>
      </li>

    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem',
    }),
  },
  computed: {
    /* todoItems() {
      return this.$store.getters.storedTodoItems;
    } */
    ...mapGetters(['storedTodoItems'])
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.4rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 50px;
    color: #62acde;
    padding-right: 5px;
    margin: auto 0;
  }
  .checkBtnCompleted {
    color: #b3adad;
  }
  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }

  /* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>