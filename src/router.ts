import Vue from 'vue';
import Router from 'vue-router';
import Todo from './views/todo.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todo',
      component: Todo,
    },
    {
      path: '/show',
      name: 'show',
      // route level code-splitting
      // this generates a separate chunk (show.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "show" */ './views/show.vue'),
    },
  ],
});
