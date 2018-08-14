/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import _ from 'lodash';
import Vuex from 'vuex';

const AUTH_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';

const createStore = () => new Vuex.Store({
  state: {
    token: null,
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
    setToken(state, token) {
      state.token = token;
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
    async authenticateUser({ commit }, authData) {
      const { firebaseKey } = process.env;
      const url = authData.isLogin
        ? `${AUTH_URL}/verifyPassword?key=${firebaseKey}`
        : `${AUTH_URL}/signupNewUser?key=${firebaseKey}`;

      const { idToken } = await this.$axios.$post(url, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      });
      commit('setToken', idToken);
    },
  },
  getters: {
    loadedPosts(state) {
      return state.loadedPosts;
    },
  },
});

export default createStore;
