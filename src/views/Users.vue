<template>
  <div>
    <h3>Users</h3>
    <!-- パラメーターが変わった時にライフサイクルフックが呼ばれないことに注意、どういう事かと言うと、-->
    <!-- 同じコンポーネントが再利用されているのでcreatedやdestroyがされていないので、フックするときはwatchを使う -->
    <router-link to="/users/1">ユーザー１</router-link>
    <router-link to="/users/2">ユーザー２</router-link>
    <hr>
    <!-- routeオブジェクトを利用してパラメーターを取得 -->
    <!-- propsを指定する事で$route.params.idをidと書くことができ、ルートコンポーネントの再利用性を損なわないようにする -->
    <h1>User No.{{ id }}</h1>
    <!-- toはv-bind(:)を使うと動的に書ける -->
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile?lang=ja#next-user'">次のユーザー</router-link>
    <router-view></router-view>
    <div style="height: 700px;"></div>
    <!-- 名前付きルートを使って、わかりやすくリンク先のURLを動的にする -->
    <!-- 特定のidを持つ要素までスクロールするために、URLにハッシュ(#)をつける -->
    <router-link id="next-user" :to="{ name: 'users-id-profile', params: { id: Number(id) + 1}, query: { lang: 'ja', page: 2}, hash: '#next-user' }">次のユーザー</router-link>
    <div style="height: 1400px;"></div>
  </div>
</template>

<script>
export default {
  props: ["id"]
  // ルートコンポーネントに指定できる３つのナビゲーションガード
  // beforeRouteEnter (to, from, next) {
  //   next(vm => {
  //     console.log(vm.id);
  //   });
  // },
  // beforeRouteUpdate (to, from, next) {
  //   next()
  // },
  // beforeRouteLeave (to, from, next) {
  //   const isLeave = window.confirm("本当にこのページを離れますか？");
  //   if (isLeave) {
  //     next();
  //   } else {
  //     next(false);
  //   }
  // }
  // watch: {
  //   $route(to, old) {
  //     console.log(to);//toは新しいrouteオブジェクト
  //     console.log(old);//oldは古いrouteオブジェクト
  //   }
  // }
}
</script>