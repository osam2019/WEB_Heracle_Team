<template>
  <div class="map-main-container">
    <div class="logo-container">
      <router-link to="/main">
        <img :src="logo" class="logo">
      </router-link>
    </div>
    <div class="body-container">
      <div class="list-container">
        <FitCenterList @onFocusCenter="onFocusCenter" />
      </div>
      <div class="map-container">
        <GoogleMap v-show="!focusCenter" class="google-map" />
        <FitCenterDetail v-if="focusCenter" class="map-detail" />
      </div>
    </div>
  </div>
</template>

<script>
import FitCenterList from '@/components/FitCenterList'
import FitCenterDetail from '@/components/FitCenterDetail'
import GoogleMap from '@/components/GoogleMap'
import Logo from '@/assets/image/title.png'
import { mapGetters } from 'vuex'

export default {
  components: { FitCenterList, GoogleMap, FitCenterDetail },
  computed: {
    ...mapGetters(['focusCenter'])
  },
  data() {
    return {
      center: null,
      something: false,
      logo: Logo
    }
  },
  methods: {
    onFocusCenter: function(c) {
      this.center = c
      this.something = !this.something
    }
  }
}
</script>
<style lang="scss" scoped>
.logo {
  margin: 10px;
  width: 200px;
  height: auto;
}
.body-container {
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: calc(100vh - 84px);

  .list-container {
    border: 1px solid red;
    width: 300px;
    min-height: 100%;
  }
  .map-container {
    min-height: 100%;
    position: relative;
    border: 1px solid blue;
    width: calc(100% - 300px);

    .map-detail {
      position: relative;
      z-index: 999999 !important;
      width: 100%;
      height: 100%;
    }
  }
}
</style>

