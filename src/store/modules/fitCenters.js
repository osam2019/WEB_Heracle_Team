import { FETCH_CENTERS } from '@/store/actions.type'
import {
  SET_FOCUS_CENTER,
  ADD_CENTER_REVIEW_TO_FOCUS
} from '@/store/mutations.type'
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
  [ADD_CENTER_REVIEW_TO_FOCUS](state, review) {
    const focusCenter = state.focusCenter

    focusCenter.reviews.push({
      writer: review.user.name,
      contents: review.text,
      grade: review.grade
    })
  }
}

export default {
  state,
  mutations,
  actions
}
