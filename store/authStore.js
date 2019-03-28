import axios from 'axios';

export const state = () => ({
  app_init: {},
  token: ''
})

export const mutations = {
  setToken(state, payload) {
    delete axios.defaults.headers.common["Authorization"];
    state.token = payload;
    if (!payload) return;
    localStorage.setItem('token', payload);
    axios.defaults.headers.common['Authorization'] = `Bearer ${payload}`;
  },
  setAppInit(state, payload) {
    state.app_init = payload;
    if (!payload) return;
    localStorage.setItem('app_init', payload)
  }
}

export const actions = {
  checkToken({
    commit
  }) {
    commit('setToken', localStorage.getItem('token'));
    commit('setAppInit', localStorage.getItem('app_init'));
  },
  logout({
    commit
  }) {
    localStorage.clear();
    commit('setToken', null);
    commit('setAppInit', null);
  },
  auth({
    commit,
    dispatch
  }, body = {}) {
    return new Promise(async (resolve, reject) => {
      try {
        let {
          data
        } = await axios.post(`${process.env.BASE_URL}auth/login`, body);
        commit('setToken', data.token);
        commit('setAppInit', data.app_init);
        resolve(data);
      } catch (err) {
        console.error(err);
        reject(err.response);
      }
    })
  }
}

export const getters = {
  IS_LOGGED: state => !!state.token,
  USER: state => state.app_init.user
}
