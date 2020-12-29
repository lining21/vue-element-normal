import {login, logout, getUserInfo} from '@/api';

export default {
  namespaced: true,
  state: {
    name: '',
    avatar: '',
    userInfo: null,
  },
  getters: {},
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;

      state.name = userInfo.name;
      state.avatar = userInfo.avatar;
    },
    removeUserInfo(state) {
      state.userInfo = null;
    },
  },
  actions: {
    // 登录 - 纯登录，不做任何操作，通过 set-cookie 处理 token
    login({ commit }, userInfo) {
      return login(userInfo);
    },

    // 登出
    logout({ commit }) {
      return logout().then(() => {
        commit('removeUserInfo');
      });
    },

    getUserInfo({ commit }) {
      return getUserInfo().then(({ data }) => {
        commit('setUserInfo', data);
        return data;
      });
    },
  },
};
