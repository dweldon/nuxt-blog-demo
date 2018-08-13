/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import _ from 'lodash';
import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => new Vuex.Store({
  state: {
    loadedPosts: [],
  },
  mutations: {
    setPosts(state, posts) {
      state.loadedPosts = posts;
    },
  },
  actions: {
    async nuxtServerInit(vuexContext) {
      const url = 'https://nuxt-blog-e5b96.firebaseio.com/posts.json';
      const res = await axios.get(url);
      const posts = _.map(res.data, (post, id) => ({ id, ...post }));
      vuexContext.commit('setPosts', posts);
    },
    setPosts(vuexContext, posts) {
      vuexContext.commit('setPosts', posts);
    },
  },
  getters: {
    loadedPosts(state) {
      return state.loadedPosts;
    },
  },
});

export default createStore;
