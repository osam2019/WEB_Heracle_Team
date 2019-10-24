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
      <ProductReviewAdd :product="product" :on-done="handleClose" :add-review="addReview" />
    </el-dialog>
    <el-row>
      <el-col class="product-info" :span="10">
        <img :src="product.img">
        <p class="brand-name">브랜드: {{ product.brand }}</p>
        <p class="product-name">
          <b>제품명: {{ product.name }}</b>
        </p>
        <hr>
        <p class="title align-left">
          <b>평점</b>
          <el-rate v-model="product.rating" class="rate" disabled show-score />
        </p>
        <div class="align-left">
          <p class="title">
            <b>정가</b>
          </p>
          <p>{{ product.price }} 원</p>
        </div>
        <el-button class="full-btn" type="primary" @click="linkWithNewTab(product.buy_url)">구매하러 가기</el-button>
        <hr>
        <el-collapse v-model="activeNames">
          <el-collapse-item title="섭취 방법" name="1">
            <p>{{ product.eat_way }}</p>
          </el-collapse-item>
        </el-collapse>
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
      dialogVisible: false,
      activeNames: []
    }
  },
  methods: {
    handleClose(done) {
      this.dialogVisible = false
      done()
    },
    openAddReviewForm() {
      this.dialogVisible = true
    },
    addReview(review) {
      console.log(review)
      this.product.reviews.push(review)
    },
    linkWithNewTab(url) {
      console.log(url)
      var win = window.open(url, '_blank')
      win.focus()
    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  color: black;
  font-size: 18px;
}
.rate {
  margin-top: 10px;
}
.align-left {
  text-align: left;
}
.full-btn {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
}
.product-info {
  padding: 20px;
  text-align: center;
  img {
    height: 250px;
  }
}
.brand-name {
}
.product-name {
  color: black;
}
.review_btn {
  width: auto;
  margin: 0 auto;
}
</style>
