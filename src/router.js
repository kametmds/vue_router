import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import UsersPosts from './views/UsersPosts.vue';
import UsersProfile from './views/UsersProfile.vue';

// ↓でvuerouterが使える様になるVue.use()はプラグインを適用させる構文
Vue.use(Router);

// ↓main.jsでインポートする為にexportする
export default new Router({
  // デフォルトは"hash"になっている、historyにするとURLの#が消える
  mode: "history",
  // URLとコンポーネントをマッピングする
  routes: [
    { path: '/', component: Home },
    // コロンを使用して動的なURLを作る
    {
      path: '/users/:id',
      component: Users,
      props: true,
      children: [
        // childrenオプションを使って、ネストされた<router-view>を作る
        { path: "posts", component: UsersPosts},
        // 名前付きルートを使って、わかりやすくリンク先のURLを動的にする
        { path: "profile", component: UsersProfile, name: "users-id-profile" }
      ]
    }
  ]
})