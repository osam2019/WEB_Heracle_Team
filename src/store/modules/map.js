const state = {
  place: {
    lat: 37.4803267,
    lng: 126.7463804
  }
}

const mutations = {
  SET_PLACE: (state, place) => {
    state.place = place
  }
}

const actions = {}

export default {
  state,
  mutations,
  actions
}
