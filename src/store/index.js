import { createStore } from "vuex";

export default createStore({
  state: {
    username: localStorage.getItem("username") || "",
  },
  getters: {
    getUsername: (state) => state.username,
  },
  mutations: {
    setUsername(state, data) {
      state.username = data;
      localStorage.setItem("username", data);
    },
  },
  actions: {},
  modules: {},
});
