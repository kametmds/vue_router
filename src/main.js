import Vue from 'vue'
import App from './App.vue'
import router from "./router";

Vue.config.productionTip = false

// 全てのページ遷移前に、特定の処理をするためのbeforeEachガード
// router.beforeEach((to, from, next) => {
//   if (to.path === '/users/1') {
//     next('/');
//   }
//   next()
// });

new Vue({
  //↓rotuer: router
  router,
  render: h => h(App),
}).$mount('#app')
