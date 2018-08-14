const checkAuth = ({ req, store }) => store.dispatch('initAuth', req);

export default checkAuth;
