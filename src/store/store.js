import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'

Vue.use(Vuex);


// store를 다른 곳에서 접근할 수 있게 export해주는 부분 , this.$store
export const store = new Vuex.Store ({
 modules: {
  todoApp,
 }
});
