import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// .storeはデータを置いとく場所宣言してmain.jsで読み込み
export default new Vuex.Store({
  state: {
    count: 2
  },
  getters: {
    // gettersを使って、ストアに算出プロパティを作る事ができる（stateはデータのみ）
    // アロー関数はreturnを省略できる(gettersは毎回returnを返すから相性がいい)
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3
  },
  mutations: {
    // mutationで状態(state)を変える場所を一つに絞って、データの予測と追跡をしやすくする、
    // stateのデータを変える処理はmutationにしか書かない
    increment(state, number) {
      state.count += number;
    },
    decrement(state, number) {
      state.count -= number;
    },
  }
});