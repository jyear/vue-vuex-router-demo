import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './constants'

Vue.use(Vuex)

const state = {
  currentId: 0,
  searchName: '',
  users: []
}

const mutations = {
  [types.USER_ADD] (state) {
    console.log(state);
  },
  [types.USER_EDIT] (state, user) {
    const id = user.id

    state.users.forEach((currentUser) => {
      if(currentUser.id === id) {
        currentUser = {...user}
      }
    })
  },
  [types.USER_DELETE] (state, id) {
    state.users.$remove(state.users[id])
  },
  [types.USER_FILTER] (state, name) {
    state.searchName = name
  },
  [types.USER_START_OPERATE] (state, id) {
    state.currentId = id
  }
}

export default new Vuex.Store({
  state,
  mutations
})
