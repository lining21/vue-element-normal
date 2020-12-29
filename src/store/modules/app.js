export default {
  namespaced: true,
  state: {
    keepAlive: [], // 当前缓存页面
    layout: 'sideMenu', // topMenu
    sidebar: {
      isCollapse: false,
      withoutAnimation: false,
    },
  },
  getters: {},
  mutations: {
    toggleKeepAlive(state, { type, componentName }) {
      const index = state.keepAlive.indexOf(componentName);

      if (index === -1 && type === 'add') {
        state.keepAlive.push(componentName);
      } else if (index > -1 && type === 'remove') {
        state.keepAlive.splice(index, 1);
      }
    },
    toggleSideBarCollapse(state) {
      state.sidebar.isCollapse = !state.sidebar.isCollapse;
    },
  },
  actions: {
    toggleSideBarCollapse({ commit }) {
      commit('toggleSideBarCollapse');
    },
  },
};
