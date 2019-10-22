<template>
  <div class="main-container">
    <div class="container">
      <FitCenterList @onFocusCenter="onFocusCenter" />
      <GoogleMap />
    </div>
    <transition name="slide-fade">
      <FitCenterDetail v-if="center !== null" :center="center" />
    </transition>
  </div>
</template>

<script>
import FitCenterList from '@/components/FitCenterList'
import FitCenterDetail from '@/components/FitCenterDetail'
import GoogleMap from '@/components/GoogleMap'

export default {
  components: { FitCenterList, GoogleMap, FitCenterDetail },
  data() {
    return {
      center: null
    }
  },
  methods: {
    onFocusCenter: function(c) {
      this.center = c
    }
  }
}
</script>
<style>
.fit-center-list {
  width: 300px;
  height: 100%;
}
.google-map {
  width: 100%;
  height: 100%;
}
/* .main-container {
  height: 1000px;
} */
.container {
  display: flex;
}
</style>

