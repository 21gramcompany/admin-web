export const state = () => ({
  auth: false,
});

export const mutations = {
  startLoading (state) {
    state.auth = true;
  },
  endLoading (state) {
    state.auth = false;
  },
};
