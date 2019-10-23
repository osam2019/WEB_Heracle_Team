<template>
  <div class="fit-center-list">
    <div class="input">
      <form>
        <gmap-autocomplete placeholder="Address" @place_changed="setPlace" />
      </form>
    </div>
    <div class="container">
      <ul class="fit-list">
        <li
          v-for="center of centers"
          :key="center.id"
          class="col-md-6"
          @click="onCenterItemClicked(center)"
        >
          <FitCenterItem :center="center" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { FETCH_CENTERS } from '@/store/actions.type'
import { SET_FOCUS_CENTER } from '@/store/mutations.type'
import FitCenterItem from '@/components/FitCenterItem'

export default {
  components: {
    FitCenterItem
  },
  props: ['onItemClicked'],
  computed: mapState({
    centers: state => state.fitCenters.centers
  }),
  mounted() {
    this.$store.dispatch(FETCH_CENTERS)
  },
  methods: {
    onCenterItemClicked(item) {
      this.$store.commit(SET_FOCUS_CENTER, item)
      this.onItemClicked()
    },
    setPlace(place) {
      this.$store.commit('SET_PLACE', {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      })
    }
  }
}
</script>
<style>
.fit-list {
  list-style-type: none;
}
.fit-center-list {
  width: 100%;
  height: 100%;
}
</style>
