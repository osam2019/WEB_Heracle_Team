<template>
  <el-row :gutter="20" class="panel-group">
    <el-col :xs="8" :sm="8" :lg="8" class="card-panel-col">
      <div class="card-panel" @click="goLinkto('map')">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="weightlifting" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            헬스장 찾기 & 리뷰
          </div>
        </div>
      </div>
    </el-col>
    <el-col :xs="8" :sm="8" :lg="8" class="card-panel-col">
      <div class="card-panel" @click="goLinkto('protein')">
        <div class="card-panel-icon-wrapper icon-money">
          <svg-icon icon-class="whey" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            보충제
          </div>
          <!-- <count-to :start-val="0" :end-val="9280" :duration="3200" class="card-panel-num" /> -->
        </div>
      </div>
    </el-col>
    <el-col :xs="8" :sm="8" :lg="8" class="card-panel-col">
      <div class="card-panel" @click="goLinkto('dashboard')">
        <div class="card-panel-icon-wrapper icon-shopping">
          <svg-icon icon-class="heart" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            헬스 케어
          </div>
          <!-- <count-to :start-val="0" :end-val="13600" :duration="3600" class="card-panel-num" /> -->
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    },
    goLinkto(link){
      switch(link){
        case 'dashboard':
          this.$router.push('/dashboard/dashboard')
          break;
        case 'map':
          this.$router.push('/map')
          break;
        case 'protein':
          this.$router.push('/protein-rank')
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {

  .card-panel {
    border-radius : 15px;
    margin : 0;
    display : flex;
    align-items: center;
    padding : 10px;
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    // overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3
    }

    .card-panel-icon-wrapper {
      float: left;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 18px;
        margin-left : 20px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

// @media (max-width:550px) {
//   .card-panel-description {
//     display: none;
//   }

//   .card-panel-icon-wrapper {
//     float: none !important;
//     width: 100%;
//     height: 100%;
//     margin: 0 !important;

//     .svg-icon {
//       display: block;
//       margin: 14px auto !important;
//       float: none !important;
//     }
//   }
// }
</style>
