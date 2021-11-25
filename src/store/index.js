import { createStore } from "vuex";

export default createStore({
  state: {
    visage: null,
    genre: null,
    eyes: null,
  },

  getters: {
    getVisage(state) {
      return state.visage;
    },
    getGenre(state) {
      return state.genre;
    },
    getEyes(state) {
      return state.eyes;
    },
  },
  mutations: {
    setVisage(state, visage) {
      state.visage = visage;
    },

    setGenre(state, genre) {
      state.genre = genre;
    },

    setEyes(state, eyes) {
      state.eyes = eyes;
    },
  },
  actions: {
    setVisage({ commit }, visage) {
      commit("setVisage", visage);
    },

    setGenre({ commit }, genre) {
      commit("setGenre", genre);
    },

    setEyes({ commit }, eyes) {
      commit("setEyes", eyes);
    },
  },
  modules: {},
});
