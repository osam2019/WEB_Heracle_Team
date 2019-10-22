<template>
  <GmapMap :center="pos" :zoom="17" style="width: 100%;">
    <GmapMarker
      v-for="(m, index) in markers"
      :key="index"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    />
  </GmapMap>
</template>
<script>
import { gmapApi } from 'vue2-google-maps'

export default {
  data() {
    return {
      pos: {
        lat: 37.4803267,
        lng: 126.7463804
      }
    }
  },
  computed: {
    google: gmapApi
  },
  mounted() {
    const vue = this

    navigator.geolocation.getCurrentPosition(function(pos) {
      var latitude = pos.coords.latitude
      var longitude = pos.coords.longitude

      vue.pos = {
        lat: latitude,
        lng: longitude
      }
    })
  }
}
</script>
