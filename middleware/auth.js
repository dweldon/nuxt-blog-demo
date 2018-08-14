const auth = ({ store, redirect }) => {
  if (!store.getters.isAuthenticated) {
    redirect('/admin/auth');
  }
};

export default auth;
