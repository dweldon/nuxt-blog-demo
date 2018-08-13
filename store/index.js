/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import _ from 'lodash';
import Vuex from 'vuex';
import axios from 'axios';

const BASE_URL = 'https://nuxt-blog-e5b96.firebaseio.com';

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
    async nuxtServerInit(vuexContext) {
      const url = `${BASE_URL}/posts.json`;
      const res = await axios.get(url);
      const posts = _.map(res.data, (post, id) => ({ id, ...post }));
      vuexContext.commit('setPosts', posts);
    },
    setPosts(vuexContext, posts) {
      vuexContext.commit('setPosts', posts);
    },
    async addPost({ commit }, post) {
      const createdPost = { ...post, updatedDate: new Date() };
      const url = `${BASE_URL}/posts.json`;
      const res = await axios.post(url, createdPost);
      commit('addPost', { id: res.data.name, ...createdPost });
    },
    async editPost({ commit }, editedPost) {
      const updatedPost = { ...editedPost, updatedDate: new Date() };
      const { id } = updatedPost;
      const url = `https://nuxt-blog-e5b96.firebaseio.com/posts/${id}.json`;
      await axios.put(url, updatedPost);
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
