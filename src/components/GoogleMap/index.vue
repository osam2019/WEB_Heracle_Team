<template>
  <GmapMap :center="place" :zoom="17" style="width: 100%;">
    <!-- <GmapMarker
      v-for="(m, index) in markers"
      :key="index"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    />-->
  </GmapMap>
</template>
<script>
import { gmapApi } from 'vue2-google-maps'

export default {
  computed: {
    google: gmapApi,
    place() {
      return this.$store.state.map.place
    }
  },
  mounted() {
    const vue = this

    navigator.geolocation.getCurrentPosition(function(pos) {
      var latitude = pos.coords.latitude
      var longitude = pos.coords.longitude

      vue.$store.commit('SET_PLACE', {
        lat: latitude,
        lng: longitude
      })
    })
  }
}
</script>
