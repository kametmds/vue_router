import Vue from "vue";
import Vuex from "vuex";
import count from "./modules/count";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
Vue.use(Vuex);

// .storeはデータを置いとく場所宣言してmain.jsで読み込み
export default new Vuex.Store({
  state: {
    message: ""
  },
  getters: {
    // gettersを使って、ストアに算出プロパティを作る事ができる（stateはデータのみ）
    // アロー関数はreturnを省略できる(gettersは毎回returnを返すから相性がいい)
    // doubleCount: state => state.count * 2,
    // tripleCount: state => state.count * 3,
    // message: state => state.message
  },
  mutations: {
    // mutationで状態(state)を変える場所を一つに絞って、データの予測と追跡をしやすくする、
    // stateのデータを変える処理はmutationにしか書かない
    // increment(state, number) {
    //   state.count += number;
    // },
    // decrement(state, number) {
    //   state.count -= number;
    // },
    // updateMessage(state, newMessage) {
    //   state.message = newMessage;
    // }
  },
  actions: {
    // increment({ commit }, number) {
    //   commit("increment", number);
    // },
    // decrement({ commit }, number) {
    //   commit("decrement", number);
    // },
    // updateMessage({ commit }, newMessage) {
    //   commit("updateMessage", newMessage);
    // }
  },
  // 機能ごとにコードを抜き出し、モジュールとして別ファイルに分割し、コードの肥大化に対処する
  modules: {
    count,
    getters,
    mutations,
    actions
  }
});