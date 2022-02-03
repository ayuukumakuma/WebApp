export const state = () => ({
  list: [],
});

export const getters = {
  updateList(state) {
    return state.list;
  },
};
export const mutations = {
  setList(state, list) {
    state.list = list;
  },
  newList(state, list) {
    state.list.push(list);
  },
  removeList(state, id) {
    state.list = state.list.filter((list) => {
      return list.id !== id;
    });
  },
};
export const actions = {
  async getList({ commit }) {
    const res = await this.$axios.$get("http://localhost:3000/users");
    commit("setList", res);
  },
  async deleteList({ commit }, id) {
    await this.$axios.$delete(`http://localhost:3000/users/${id}`);
    commit("removeList", id);
  },
  async postList({ commit }, user) {
    const res = await this.$axios.$post("http://localhost:3000/users", {
      name: user,
    });
    console.log(res);
    commit("newList", res);
  },
};
