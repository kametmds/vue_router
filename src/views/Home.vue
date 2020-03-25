<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Userページにいく</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <input type="text" v-model="message" @input="updateMessage">
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // store.jsのstate(vuex)を撮ってくる場合はcomputedプロパティに書く
  // mapGettersヘルパーで、効率よくgettersをコンポーネントに追加できる
  computed: {
    // スプレッド演算子を使うと算出プロパティに複数のゲッターを展開する事ができる。
    ...mapGetters(["count", "doubleCount", "tripleCount"]),
    message: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.dispatch("updateMessage", value);
      }
    }
  },
  // ・オブジェクトでのmapGettersの書き方
  // computed: mapGetters({
  //   myComponentCount: "Count",
  //   myComponentDoubleCount: "doubleCount",
  //   myComponentTripleCount: "tripleCount"
  // }),
  // ・普通のGettersの書き方
  // computed: {
  //   count() {
  //     // $storeのvuexの中のstateに書いてあるcountにアクセス
  //     return this.$store.state.count;
  //   },
  //   doubleCount() {
  //     // gettersを使って、ストアの算出プロパティを呼び出す
  //     return this.$store.getters.doubleCount;
  //   }
  // },
  methods: {
    updateMessage(e) {
      this.$store.dispatch("updateMessage", e.target.value);
    },
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