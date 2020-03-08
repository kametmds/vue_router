<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Userページにいく</button>
  </div>
</template>

<script>
export default {
  methods: {
    toUsers() {
      // jsからコンポーネントを切り替える。$routerにアクセスしてpathを指定している。
      this.$router.push({
        name: 'users-id-profile',
        // パラメータを使うときは必ずnameを付ける
        params: { id: 1 }
      });
    }
  }
}
</script>