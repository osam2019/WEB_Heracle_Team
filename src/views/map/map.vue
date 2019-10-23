<template>
  <div class="map-main-container">
    <!-- <div class="logo-container">
      <router-link to="/main">
        <img :src="logo" class="logo">
      </router-link>
    </div> -->
    <div class="body-container">
      <div class="list-container">
        <FitCenterList :on-item-clicked="onItemClicked" />
      </div>
      <div class="map-container">
        <GoogleMap class="google-map" />
        <el-dialog
          width="50%"
          top="1em"
          :visible.sync="dialogVisible"
          :before-close="handleClose"
        >
          <FitCenterDetail class="map-detail" />
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import FitCenterList from '@/components/FitCenterList'
import FitCenterDetail from '@/components/FitCenterDetail'
import GoogleMap from '@/components/GoogleMap'
import Logo from '@/assets/image/title.png'

export default {
  components: { FitCenterList, GoogleMap, FitCenterDetail },
  data() {
    return {
      dialogVisible: false,
      center: null,
      something: false,
      logo: Logo
    }
  },
  methods: {
    handleClose(done) {
      done()
    },
    onItemClicked() {
      this.dialogVisible = true
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
  min-height: 100vh;

  .list-container {
    border-right : 2px solid #b4c3d9;
    width: 350px;
    min-height: 100%;
  }
  .map-container {
    min-height: 100%;
    position: relative;
    width: calc(100% - 300px);

    // dialog css
    .dialog{
      margin : 1em 0 0 0 ;
    }


  }
}
</style>

