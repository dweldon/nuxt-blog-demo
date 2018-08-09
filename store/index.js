/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import Vuex from 'vuex';

const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

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
      await snooze(1000);
      const loadedPosts = [{
        id: '1',
        title: 'What is your puppy thinking about?',
        isAdmin: 'isAdmin',
        previewText: 'Your canine companion slumbers by your side, but is she dreaming of you?',
        thumbnailUrl: 'https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg',
      }, {
        id: '2',
        title: 'Are zebras just horses with stripes?',
        isAdmin: 'isAdmin',
        previewText: 'Zebras, horses, and donkeys have differing numbers of chromosomes, in fact...',
        thumbnailUrl: 'https://images.pexels.com/photos/39245/zebra-stripes-black-and-white-zoo-39245.jpeg',
      }];
      vuexContext.commit('setPosts', loadedPosts);
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
