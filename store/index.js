/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import _ from 'lodash';
import Vuex from 'vuex';

const createStore = () => new Vuex.Store({
  state: {
    loadedPosts: [],
  },
  mutations: {
    setPosts(state, posts) {
      state.loadedPosts = posts;
    },
    addPost(state, post) {
      state.loadedPosts.push(post);
    },
    editPost(state, editedPost) {
      const index = _.findIndex(state.loadedPosts, { id: editedPost.id });
      state.loadedPosts.splice(index, 1, editedPost);
    },
  },
  actions: {
    async nuxtServerInit({ commit }, { app }) {
      const data = await app.$axios.$get('/posts.json');
      const posts = _.map(data, (post, id) => ({ id, ...post }));
      commit('setPosts', posts);
    },
    setPosts(vuexContext, posts) {
      vuexContext.commit('setPosts', posts);
    },
    async addPost({ commit }, post) {
      const createdPost = { ...post, updatedDate: new Date() };
      const data = await this.$axios.$post('/posts.json', createdPost);
      commit('addPost', { id: data.name, ...createdPost });
    },
    async editPost({ commit }, editedPost) {
      const updatedPost = { ...editedPost, updatedDate: new Date() };
      const { id } = updatedPost;
      await this.$axios.$put(`/posts/${id}.json`, updatedPost);
      commit('editPost', updatedPost);
    },
  },
  getters: {
    loadedPosts(state) {
      return state.loadedPosts;
    },
  },
});

export default createStore;
