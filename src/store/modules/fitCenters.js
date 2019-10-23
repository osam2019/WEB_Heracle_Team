import { FETCH_CENTERS } from '@/store/actions.type'
import { SET_FOCUS_CENTER } from '@/store/mutations.type'
import centerListJson from '@/assets/json/center.json'

const state = {
  centers: centerListJson,
  focusCenter: null
}

const actions = {
  [FETCH_CENTERS](context) {
    return new Promise(resolve => {
      const centers = context.state.centers
      resolve(centers)
    })
  }
}

const mutations = {
  [SET_FOCUS_CENTER](state, center) {
    const currentCenter = state.focusCenter
    if (currentCenter === null) {
      state.focusCenter = center
      return
    }

    state.focusCenter = currentCenter.id === center.id ? null : center
  },
  UPDATE_FIT_CENTER: (state, center) => {
    for (let i = 0; i < state.centers.length; i++) {
      const c = state.centers[i]
      if (c.id === center.id) {
        state.centers[i] = center
      }
    }
  }
}

export default {
  state,
  mutations,
  actions
}
