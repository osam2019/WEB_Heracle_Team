<template>
  <div class="map-main-container">
    <div class="logo-container">
      <router-link to="/main">
        <img :src="logo" class="logo">
      </router-link>
    </div>
    <div class="body-container">
      <div class="list-container">
        <FitCenterList :on-item-clicked="onItemClicked" />
      </div>
      <div class="map-container">
        <GoogleMap class="google-map" />
        <el-dialog
          title="헬스장 상세정보"
          width="50%"
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

