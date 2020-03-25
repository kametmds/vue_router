<template>
  <div>
    <h2>Home</h2>
    <nav>
      <!-- aタグだとページ全体が読み込みされてしまう、けどHTMLではaタグになる、tag属性で他のに指定もできる-->
      <!-- active-classはアクティブなコンポーネントにだけ適用し、exact属性を付けるとtoURLが完全一致したものだけに適用させる -->
      <router-link to="/" active-class="link--active" exact class="link">Home</router-link>
      <router-link :to="{ name: 'users-id-profile', params: { id: 1}, query: { lang: 'ja', page: 2}, hash: '#next-user' }" active-class="link--active" exact class="link">Users</router-link>
      <button @click="increment(2)">+1</button>
      <button @click="decrement(2)">-1</button>
    </nav>
  </div>
</template>

<script>
// import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  methods: {
    // mapActionsヘルパーで、mapMutaionsみたいに効率よくActionsをコンポーネントで使用できる
    ...mapActions(["increment", "decrement"])
    // actionをdispatchして、非同期処理を含む処理を扱いながらミューテーションをコミットする
    // increment() {
    //   this.$store.dispatch("increment", 2);
    // },
    // decrement() {
    //   this.$store.dispatch("decrement", 2);
    // }
    // mapMutaionsヘルパーで、一つづつ書かなくてもmutationsをコンポーネントに追加できる@clickで引数は指定する
    // ...mapMutations(["increment", "decrement"])
    // commitする事で$storeのvuexの中のmutationにデータを送る（データの予想と追跡をしやすくする為）
    // increment() {
    //   this.$store.commit("increment", 2);
    // },
    // decrement() {
    //   this.$store.commit("decrement", 2)
    // }
  }
}
</script>
