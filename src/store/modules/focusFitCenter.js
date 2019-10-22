const state = {
  center: null
}

const mutations = {
  SET_FOCUS_CENTER: (state, center) => {
    state.center = state.center === null ? center : null
  }
}

const getters = {
  focusCenter(state) {
    return state.center
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
