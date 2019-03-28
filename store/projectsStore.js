import axios from 'axios';

export const state = () => ({
  projects: []
})

export const mutations = {
  setProjects(state, payload) {
    state.projects = payload;
  }
}

export const actions = {
  fetchProjects({
    commit,
    dispatch
  }) {
    return new Promise(async (resolve, reject) => {
      console.log(process.env)
      try {
        let {
          data
        } = await axios.get(`${process.env.BASE_URL}projects-manage/index`);
        resolve(data);
        commit('setProjects', data.projects);
      } catch (err) {
        console.error(err);
        reject(err.response);
      }
    })
  },
  fetchProjectById({
    commit,
    dispatch
  }, id = null) {
    return new Promise(async (resolve, reject) => {
      console.log(process.env)
      try {
        let {
          data
        } = await axios.get(`${process.env.BASE_URL}projects-manage/${id}`);
        resolve(data.project);
      } catch (err) {
        console.error(err);
        reject(err.response);
      }
    })
  },
  updateProject({}, body) {
    return new Promise(async (resolve, reject) => {
      console.log(process.env)
      try {
        let {
          data
        } = await axios.post(`${process.env.BASE_URL}projects-manage/update?id=${body.id}`, {
          name: body.name
        });
        resolve(data.project);
      } catch (err) {
        console.error(err);
        reject(err.response);
      }
    })
  }
}

export const getters = {
  PROJECTS: state => state.projects
}
