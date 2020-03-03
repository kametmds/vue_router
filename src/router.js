import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';

// ↓でvuerouterが使える様になるVue.use()はプラグインを適用させる構文
Vue.use(Router);

// ↓main.jsでインポートする為にexportする
export default new Router({
  // URLとコンポーネントをマッピングする
  routes: [{path: '/', component: Home}, {path: '/users', component: Users}]
})