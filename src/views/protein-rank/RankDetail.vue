<template>
  <div>
    <el-dialog
      v-if="dialogVisible"
      title="제품 리뷰 등록"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose"
      :modal-append-to-body="false"
    >
      <ProductReviewAdd :product="product" :on-done="handleClose" />
    </el-dialog>
    <el-row>
      <el-col class="product-info" :span="10">
        <img :src="product.img" />
        <p class="brand-name">브랜드: {{ product.brand }}</p>
        <p class="product-name">
          <b>제품명: {{ product.name }}</b>
        </p>
        <el-rate v-model="product.rating" disabled show-score />
        <ProductComponent />
      </el-col>
      <el-col class="product-detail" :span="14">
        <ProductReviewList :reviews="product.reviews ? product.reviews : []" />
        <el-button type="primary" class="review-btn" @click="openAddReviewForm">리뷰 남기기</el-button>
        <!-- <ProductReviewInput /> -->
      </el-col>
    </el-row>
    <!-- <el-button type="primary" class="review-btn" @click="openAddReviewForm">리뷰 남기기</el-button> -->
  </div>
</template>
<script>
import ProductReviewAdd from './ProductReviewAdd'
import ProductComponent from './ProductComponent'
import ProductReviewList from './ProductReviewList'
// import ProductReviewInput from './ProductReviewInput'

export default {
  components: {
    ProductReviewAdd,
    ProductComponent,
    ProductReviewList
    // ProductReviewInput
  },
  props: ['product'],
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClose(done) {
      this.dialogVisible = false
      done()
    },
    openAddReviewForm() {
      this.dialogVisible = true
    }
  }
}
</script>
<style lang="scss" scoped>
.product-info{
  text-align : center;
  img{
    height : 250px;
  }
}
.brand-name {
}
.product-name {
  color: black;
}
.review_btn {
  width: auto;
  margin : 0 auto;
}
</style>
