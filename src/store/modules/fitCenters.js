import { FETCH_CENTERS, SEARCH_CENTERS } from '@/store/actions.type'
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
  },
  [SEARCH_CENTERS](context, cur) {
    return new Promise(resolve => {
      const centers = context.state.centers
      const dist = a => {
        const diffLat = cur.lat - a.lat
        const diffLng = cur.lng - a.lng

        const res = diffLat * diffLat + (diffLng + diffLng)
        return res
      }

      centers.sort((a, b) => {
        const distA = dist(a)
        const distB = dist(b)

        return distA > distB
      })
      centers.forEach(e => console.log(e.address, dist(e)))
      // console.log(result);
      resolve(centers.slice(0, 10))
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
