export const state = () => ({
  list: [],
})

export const getters = {
  updateList (state) {
    return state.list
  },
}
export const mutations = {
  setList (state, list) {
    state.list = list
  },
}
export const actions = {
  async getList ({ commit }) {
    const res = await this.$axios.$get("http://localhost:3000/users")
    commit("setList", res)
  },
}
