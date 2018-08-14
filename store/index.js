/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import _ from 'lodash';
import Vuex from 'vuex';
import Cookie from 'js-cookie';
import { parse } from 'cookie';

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
    clearToken(state) {
      state.token = null;
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
    async addPost({ state, commit }, post) {
      const createdPost = { ...post, updatedDate: new Date() };
      const url = `/posts.json?auth=${state.token}`;
      const data = await this.$axios.$post(url, createdPost);
      commit('addPost', { id: data.name, ...createdPost });
    },
    async editPost({ state, commit }, editedPost) {
      const updatedPost = { ...editedPost, updatedDate: new Date() };
      const { id } = updatedPost;
      const url = `/posts/${id}.json?auth=${state.token}`;
      await this.$axios.$put(url, updatedPost);
      commit('editPost', updatedPost);
    },
    async authenticateUser({ commit }, authData) {
      const { firebaseKey } = process.env;
      const url = authData.isLogin
        ? `${AUTH_URL}/verifyPassword?key=${firebaseKey}`
        : `${AUTH_URL}/signupNewUser?key=${firebaseKey}`;

      const { idToken, expiresIn } = await this.$axios.$post(url, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      });
      const expires = expiresIn * 1000;
      const expiresAt = new Date().getTime() + expires;

      commit('setToken', idToken);
      localStorage.setItem('token', idToken);
      localStorage.setItem('tokenExpiresAt', expiresAt);
      Cookie.set('token', idToken);
      Cookie.set('tokenExpiresAt', expiresAt);
    },
    initAuth({ commit }, req) {
      let token;
      let expiresAt;

      if (req) {
        if (!req.headers.cookie) return;
        const values = parse(req.headers.cookie);
        ({ token } = values);
        expiresAt = Number(values.tokenExpiresAt || 0);
      } else {
        token = localStorage.getItem('token');
        expiresAt = Number(localStorage.getItem('tokenExpiresAt'));
      }

      if (!token || new Date().getTime() > expiresAt) {
        commit('clearToken');
        return;
      }

      commit('setToken', token);
    },
  },
  getters: {
    loadedPosts(state) {
      return state.loadedPosts;
    },
    isAuthenticated(state) {
      return !_.isEmpty(state.token);
    },
  },
});

export default createStore;
