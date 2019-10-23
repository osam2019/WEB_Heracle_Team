const state = {
  center: null
}

const mutations = {
  SET_FOCUS_CENTER: (state, center) => {
    state.center = state.center === null ? center : null
  },
  ADD_CENTER_REVIEW: (state, { user, text, grade }) => {
    if (state.center.reviews === undefined) {
      state.center.reviews = []
    }

    state.center.reviews.push({
      writer: user.name,
      contents: text,
      grade: grade
    })
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
