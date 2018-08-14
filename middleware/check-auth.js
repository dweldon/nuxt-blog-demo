const checkAuth = ({ store }) => {
  if (process.client) store.dispatch('initAuth');
};

export default checkAuth;
