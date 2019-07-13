import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [
      {
        text: '学习TypeScript',
        complete: false,
      },
      {
        text: '学习Vue',
        complete: false,
      },
    ],
  },
  mutations: {
    updateTodoList(state, { index, content }) {
      state.todoList[index].text = content
    },
    todoItemComplate(state, index) {
      state.todoList[index].complete = true
    },
  },
  actions: {

  },
});
