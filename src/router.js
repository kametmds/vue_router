import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
// import Users from './views/Users.vue';
// import UsersPosts from './views/UsersPosts.vue';
// import UsersProfile from './views/UsersProfile.vue';
// import HeaderHome from './views/HeaderHome.vue';
// import HeaderUsers from './views/HeaderUsers.vue';
// 下記の様な書き方で遅延ローディングをすることで、必要な時にデータを取ってくる
const Home = () => import(/* webpackChunkName: "Home" */'./views/Home.vue');
const Users = () => import(/* webpackChunkName: "Users" */'./views/Users.vue');
const UsersPosts = () => import(/* webpackChunkName: "USersPosts" */'./views/UsersPosts.vue');
const UsersProfile = () => import(/* webpackChunkName: "UsersProfile" */'./views/UsersProfile.vue');
const HeaderHome = () => import(/* webpackChunkName: "HeaderHome" */'./views/HeaderHome.vue');
const HeaderUsers = () => import(/* webpackChunkName: "HeaderUsers" */'./views/HeaderUsers.vue');

// ↓でvuerouterが使える様になるVue.use()はプラグインを適用させる構文
Vue.use(Router);

// ↓main.jsでインポートする為にexportする
export default new Router({
  // デフォルトは"hash"になっている、historyにするとURLの#が消える
  mode: "history",
  // URLとコンポーネントをマッピングする
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        header: HeaderHome
      }
      // 特定のページ遷移前に、特定の処理をするためのbeforeEnterガード
      // beforeEnter(to, from, next) {
      //   next(false);
      // }
    },
    // コロンを使用して動的なURLを作る
    {
      path: '/users/:id',
      components: {
        default: Users,
        header: HeaderUsers
      },
      // 名前付きビューを設定した場合、名前付きビューごとにpropsを定義する必要がある
      props: {
        default: true,
        header: false,
      },
      children: [
        // childrenオプションを使って、ネストされた<router-view>を作る
        { path: "posts", component: UsersPosts},
        // 名前付きルートを使って、わかりやすくリンク先のURLを動的にする
        { path: "profile", component: UsersProfile, name: "users-id-profile" }
      ]
    },
    // リダイレクト機能を使って、全てをキャッチするルートを作る
    {
      path: "*",
      redirect: "/"
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // return new Promise(resolve => {
    //   this.app.$root.$once("triggerScroll", () => {
    //     let position = { x: 0, y: 0 }
    //     if (savedPosition) {
    //       position = savedPosition;
    //     }
    //     if (to.hash) {
    //       position = {
    //         selector: to.hash
    //       };
    //     }
    //     resolve(position);
    //   })
    //   // this.app.$rootでルートインスタンスにアクセス
    // })
    // transitionで.5秒かけてページ更新されるので、スクロール先のidが作られていない為、スクロールが発生しない
    // transitionがない場合の書き方は下の３つ
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    // return {
    // selector: "#next-user",
    // offset: { x:0, y: 100}
    // };
    return { x: 0, y: 100};
  }
})