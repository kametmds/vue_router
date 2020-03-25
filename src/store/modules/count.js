const state = {
  count: 2
};
const getters = {
  doubleCount: state => state.count * 2,
  tripleCount: state => state.count * 3
};
const mutations = {
  // mutationで状態(state)を変える場所を一つに絞って、データの予測と追跡をしやすくする、
  // stateのデータを変える処理はmutationにしか書かない
  increment(state, number) {
    state.count += number;
  },
  decrement(state, number) {
    state.count -= number;
  }
};
const actions = {
  increment({ commit }, number) {
    commit("increment", number);
  },
  decrement({ commit }, number) {
    commit("decrement", number);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};