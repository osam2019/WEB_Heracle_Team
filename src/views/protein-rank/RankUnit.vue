<template>
  <div class="unit-container">
    <el-dialog
      v-if="focusProduct !== null"
      title="제품 상세 페이지"
      :visible.sync="dialogVisible"
      width="60%"
      height="400px"
      :before-close="handleClose"
    >
      <RankDetail :product="focusProduct" />
    </el-dialog>
    <el-row class="unit-header">
      <el-col :span="20">
        <div>
          <p>
            <b>{{ data.subtitle }}</b>
          </p>
          <p>{{ data.title }}</p>
        </div>
      </el-col>
      <el-col :span="1">
        <div>
          <el-button icon="el-icon-search" circle />
        </div>
      </el-col>
    </el-row>
    <div class="unit-body">
      <ul>
        <li
          v-for="(product, idx) of data.ranker"
          :key="product.id"
          class="unit-li"
          @click="openProductDetailPage(product)"
        >
          <RankUnitItem :product="product" :idx="idx" />
          <hr>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import RankUnitItem from './RankUnitItem'
import RankDetail from './RankDetail'

export default {
  components: {
    RankUnitItem,
    RankDetail
  },
  props: ['data'],
  data() {
    return {
      dialogVisible: false,
      focusProduct: null
    }
  },
  methods: {
    handleClose(done) {
      this.focusProduct = null
      this.dialogVisible = false
      done()
    },
    openProductDetailPage(product) {
      this.focusProduct = product
      this.dialogVisible = true
      console.log(product)
    }
  }
}
</script>
<style scoped>
.unit-header {
  background: greenyellow;
  padding: 5px;
}
.unit-li {
  list-style-type: none;
}
</style>
