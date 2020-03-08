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
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile'">次のユーザー</router-link>
    <!-- 名前付きルートを使って、わかりやすくリンク先のURLを動的にする -->
    <router-link :to="{ name: 'users-id-profile', params: { id: Number(id) + 1} }">次のユーザー</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"]
  // watch: {
  //   $route(to, old) {
  //     console.log(to);//toは新しいrouteオブジェクト
  //     console.log(old);//oldは古いrouteオブジェクト
  //   }
  // }
}
</script>