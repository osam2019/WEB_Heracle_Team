<template>
  <div class="map-main-container">
    <div class="list-container">
      <FitCenterList @onFocusCenter="onFocusCenter" />
    </div>
    <div class="map-container">
      <GoogleMap class="google-map" v-show="!something"/>
      <FitCenterDetail class="map-detail" v-show="something" />
    </div>
      
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
      center: null,
      something : false
    }
  },
  methods: {
    onFocusCenter: function(c) {
      this.center = c
      this.something = !this.something
      console.log("dfdfdf")
      console.log(this.something)
    }
  }
}
</script>
<style lang="scss" scoped>
.map-main-container{
  display : flex;
  margin : 0;
  padding : 0;
  width : 100%;
  min-height: calc(100vh - 84px);

  .list-container{
    border : 1px solid red;
    width: 300px;
    min-height: 100%;

  }
  .map-container{
    min-height : 100%;
    position : relative;
    border : 1px solid blue;
    width : calc(100% - 300px);

    .map-detail{
      position : relative;
      z-index:999999 !important;
      width : 100%;
      height : 100%;
    }

  }
}
// .fit-center-list {
//   border : 1px solid red;
//   width: 300px;
//   height: 100%;
// }
// .google-map, .google-map-detail {
//   width: 100%;
//   height: calc(100vh - 80px);
// }
// .google-map-detail{
//   position : absolute;
//   padding : 10px;
//   border : 1px solid red;
// }
/* .main-container {
  height: 1000px;
} */
// .container {
//   display: flex;
// }
</style>

