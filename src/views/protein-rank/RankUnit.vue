<template>
  <div class="unit-container">
    <el-dialog
      v-if="focusProduct !== null"
      title="제품 상세 페이지"
      :visible.sync="dialogVisible"
      width="60%"
      top="1em"
      height="400px"
      :before-close="handleClose"
    >
      <RankDetail :product="focusProduct" />
    </el-dialog>

    <div class="unit-header">
      <h2>{{ data.subtitle }}</h2>
      <span>{{ data.title }}</span>
    </div>
    <div class="unit-body">
      <ul>
        <li
          v-for="(product, idx) of data.ranker"
          :key="product.id"
          class="unit-li"
          @click="openProductDetailPage(product)"
        >
          <RankUnitItem :product="product" :idx="idx" />
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
<style lang="scss" scoped>
.unit-header {
  h2 {
    margin: 0 0 19px 0;
  }
}
.unit-body {
  margin: 20px 0;
  ul {
    padding: 0;
    margin: 0;
  }
  .unit-li {
    list-style-type: none;
  }
}
</style>
